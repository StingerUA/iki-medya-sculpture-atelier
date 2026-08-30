import { currentUser } from "@/lib/server/auth";

export async function GET() {
  return Response.json({ user: await currentUser() });
}
