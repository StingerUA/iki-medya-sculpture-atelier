const externalUrl = /^(?:[a-z]+:)?\/\//i;

export function withBasePath(path?: string) {
  if (!path || externalUrl.test(path) || path.startsWith("data:")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\/+/, "")}`;
}
