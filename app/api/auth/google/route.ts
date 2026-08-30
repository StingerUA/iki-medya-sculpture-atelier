import { cookies } from "next/headers";
import { randomToken } from "@/lib/server/crypto";
import { runtimeEnv } from "@/lib/server/runtime";
import { safeReturnPath } from "@/lib/server/auth";

export async function GET(request: Request) {
  const config = runtimeEnv();
  if (!config.GOOGLE_CLIENT_ID || !config.GOOGLE_CLIENT_SECRET) {
    return Response.json({ error: "google_auth_not_configured" }, { status: 503 });
  }
  const requestUrl = new URL(request.url);
  const state = randomToken(24);
  const returnTo = safeReturnPath(requestUrl.searchParams.get("return_to"));
  const requestedOrigin = requestUrl.searchParams.get("return_origin");
  const allowedOrigin = config.PUBLIC_SITE_ORIGIN?.replace(/\/$/, "");
  const returnOrigin = requestedOrigin && allowedOrigin === requestedOrigin ? requestedOrigin : requestUrl.origin;
  const jar = await cookies();
  jar.set("iki_oauth_state", state, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 600 });
  jar.set("iki_oauth_return", `${returnOrigin}${returnTo}`, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 600 });

  const callback = `${requestUrl.origin}/api/auth/google/callback`;
  const target = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  target.searchParams.set("client_id", config.GOOGLE_CLIENT_ID);
  target.searchParams.set("redirect_uri", callback);
  target.searchParams.set("response_type", "code");
  target.searchParams.set("scope", "openid email profile");
  target.searchParams.set("state", state);
  target.searchParams.set("prompt", "select_account");
  return Response.redirect(target);
}
