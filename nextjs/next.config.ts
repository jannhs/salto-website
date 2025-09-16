import type { NextConfig } from "next";
import createMDX from "@next/mdx";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks", "@/components"],
    mdxRs: true,
  },
  output: "standalone",
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const withNextIntl = createNextIntlPlugin();
export default withMDX(withNextIntl(nextConfig));
