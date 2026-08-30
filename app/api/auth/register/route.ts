import { createSession, normalizeEmail } from "@/lib/server/auth";
import { hashPassword } from "@/lib/server/crypto";
import { getD1 } from "@/lib/server/runtime";

export async function POST(request: Request) {
  const payload = (await request.json()) as { email?: string; password?: string; name?: string };
  const email = normalizeEmail(payload.email ?? "");
  const password = payload.password ?? "";
  const name = payload.name?.trim().slice(0, 80) || null;
  if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error: "invalid_email" }, { status: 400 });
  if (password.length < 8) return Response.json({ error: "weak_password" }, { status: 400 });

  const exists = await getD1().prepare("SELECT id FROM users WHERE email = ? LIMIT 1").bind(email).first();
  if (exists) return Response.json({ error: "email_exists" }, { status: 409 });

  const id = crypto.randomUUID();
  const credentials = await hashPassword(password);
  await getD1()
    .prepare("INSERT INTO users (id, email, name, password_hash, password_salt, created_at) VALUES (?, ?, ?, ?, ?, ?)")
    .bind(id, email, name, credentials.hash, credentials.salt, new Date().toISOString())
    .run();
  await createSession(id);
  return Response.json({ user: { id, email, name } }, { status: 201 });
}
