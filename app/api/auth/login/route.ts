import { createSession, normalizeEmail } from "@/lib/server/auth";
import { verifyPassword } from "@/lib/server/crypto";
import { getD1 } from "@/lib/server/runtime";

type LoginUser = { id: string; email: string; name: string | null; password_hash: string | null; password_salt: string | null };

export async function POST(request: Request) {
  const payload = (await request.json()) as { email?: string; password?: string };
  const email = normalizeEmail(payload.email ?? "");
  const password = payload.password ?? "";
  const user = await getD1()
    .prepare("SELECT id, email, name, password_hash, password_salt FROM users WHERE email = ? LIMIT 1")
    .bind(email)
    .first<LoginUser>();
  if (!user?.password_hash || !user.password_salt) {
    return Response.json({ error: "invalid_credentials" }, { status: 401 });
  }
  const valid = await verifyPassword(password, user.password_salt, user.password_hash);
  if (!valid) return Response.json({ error: "invalid_credentials" }, { status: 401 });
  await createSession(user.id);
  return Response.json({ user: { id: user.id, email: user.email, name: user.name } });
}
