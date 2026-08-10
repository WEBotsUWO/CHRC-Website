import type { NextConfig } from "next";

const pagesBasePath = process.env.GITHUB_PAGES === "true"
  ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
  : "";

const nextConfig: NextConfig = {
  ...(process.env.GITHUB_PAGES === "true" ? { output: "export" } : {}),
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
  trailingSlash: true,
};

export default nextConfig;
