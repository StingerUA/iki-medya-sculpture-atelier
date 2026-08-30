import { cookies } from "next/headers";
import { getD1 } from "./runtime";
import { randomToken, sha256 } from "./crypto";

const SESSION_COOKIE = "iki_session";
const SESSION_SECONDS = 60 * 60 * 24 * 30;

export type PublicUser = { id: string; email: string; name: string | null };

export async function createSession(userId: string) {
  const token = randomToken();
  const tokenHash = await sha256(token);
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  await getD1()
    .prepare("INSERT INTO sessions (token_hash, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)")
    .bind(tokenHash, userId, expiresAt, new Date().toISOString())
    .run();
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function destroySession() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) {
    const tokenHash = await sha256(token);
    await getD1().prepare("DELETE FROM sessions WHERE token_hash = ?").bind(tokenHash).run();
  }
  jar.delete(SESSION_COOKIE);
}

export async function currentUser(): Promise<PublicUser | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const tokenHash = await sha256(token);
  const now = Math.floor(Date.now() / 1000);
  const user = await getD1()
    .prepare(
      "SELECT users.id, users.email, users.name FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = ? AND sessions.expires_at > ? LIMIT 1",
    )
    .bind(tokenHash, now)
    .first<PublicUser>();
  return user ?? null;
}

export function normalizeEmail(value: string) {
  return value.trim().toLocaleLowerCase("en-US");
}

export function safeReturnPath(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/tr";
  return value;
}
