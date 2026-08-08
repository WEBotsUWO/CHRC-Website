const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteBasePath = configuredBasePath.replace(/\/$/, "");

export function publicAsset(path: string) {
  return `${siteBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}
