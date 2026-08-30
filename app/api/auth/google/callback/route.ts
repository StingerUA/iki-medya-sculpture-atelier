import { cookies } from "next/headers";
import { createSession, normalizeEmail } from "@/lib/server/auth";
import { getD1, runtimeEnv } from "@/lib/server/runtime";

type GoogleProfile = { sub: string; email: string; email_verified?: boolean; name?: string };
type GoogleUser = { id: string; email: string; name: string | null };

export async function GET(request: Request) {
  const config = runtimeEnv();
  const url = new URL(request.url);
  const jar = await cookies();
  const expectedState = jar.get("iki_oauth_state")?.value;
  const returnUrl = jar.get("iki_oauth_return")?.value || `${url.origin}/tr`;
  jar.delete("iki_oauth_state");
  jar.delete("iki_oauth_return");
  if (!expectedState || expectedState !== url.searchParams.get("state")) {
    return Response.redirect(`${url.origin}/tr?auth=state_error`);
  }
  const code = url.searchParams.get("code");
  if (!code || !config.GOOGLE_CLIENT_ID || !config.GOOGLE_CLIENT_SECRET) {
    return Response.redirect(`${url.origin}/tr?auth=google_error`);
  }

  const callback = `${url.origin}/api/auth/google/callback`;
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: config.GOOGLE_CLIENT_ID,
      client_secret: config.GOOGLE_CLIENT_SECRET,
      redirect_uri: callback,
      grant_type: "authorization_code",
    }),
  });
  if (!tokenResponse.ok) return Response.redirect(`${url.origin}/tr?auth=google_error`);
  const token = (await tokenResponse.json()) as { access_token?: string };
  if (!token.access_token) return Response.redirect(`${url.origin}/tr?auth=google_error`);
  const profileResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { authorization: `Bearer ${token.access_token}` },
  });
  if (!profileResponse.ok) return Response.redirect(`${url.origin}/tr?auth=google_error`);
  const profile = (await profileResponse.json()) as GoogleProfile;
  if (!profile.email || profile.email_verified === false || !profile.sub) {
    return Response.redirect(`${url.origin}/tr?auth=google_error`);
  }

  const email = normalizeEmail(profile.email);
  let user = await getD1()
    .prepare("SELECT id, email, name FROM users WHERE google_sub = ? OR email = ? LIMIT 1")
    .bind(profile.sub, email)
    .first<GoogleUser>();
  if (user) {
    await getD1().prepare("UPDATE users SET google_sub = COALESCE(google_sub, ?), name = COALESCE(name, ?) WHERE id = ?").bind(profile.sub, profile.name ?? null, user.id).run();
  } else {
    user = { id: crypto.randomUUID(), email, name: profile.name ?? null };
    await getD1()
      .prepare("INSERT INTO users (id, email, name, google_sub, created_at) VALUES (?, ?, ?, ?, ?)")
      .bind(user.id, email, user.name, profile.sub, new Date().toISOString())
      .run();
  }
  await createSession(user.id);
  return Response.redirect(returnUrl);
}
