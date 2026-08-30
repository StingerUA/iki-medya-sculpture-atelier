import { env } from "cloudflare:workers";

type RuntimeEnv = {
  DB?: D1Database;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  PUBLIC_SITE_ORIGIN?: string;
};

export function runtimeEnv() {
  return env as unknown as RuntimeEnv;
}

export function getD1() {
  const db = runtimeEnv().DB;
  if (!db) throw new Error("D1 binding DB is unavailable");
  return db;
}
