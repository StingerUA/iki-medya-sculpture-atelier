import { StoreApp } from "@/components/store-app";

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const { path } = await params;
  return <StoreApp initialPath={`/${path.join("/")}`} />;
}
