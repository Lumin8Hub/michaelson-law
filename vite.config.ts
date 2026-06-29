// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When GH_PAGES=1 (set by the GitHub Actions workflow), build a fully static
// site using TanStack Start's native SPA + prerender pipeline. We disable
// Nitro for this build (Nitro would overwrite the SSR bundle that TanStack
// Start's prerender preview server needs to load). The Lovable
// sandbox/preview never sets this flag, so the live preview keeps using the
// default Cloudflare Workers SSR pipeline and the src/server.ts error wrapper.
const isGhPages = process.env.GH_PAGES === "1";

const PRACTICE_SLUGS = [
  "motor-vehicle-accidents",
  "medical-malpractice",
  "catastrophic-injury",
  "accident-benefits",
  "slip-and-fall",
  "fire-loss",
  "wrongful-death",
  "disability",
  "product-liability",
  "long-term-care-class-actions",
];

const STATIC_PAGES = [
  { path: "/" },
  { path: "/about" },
  { path: "/practice-areas" },
  { path: "/results" },
  { path: "/insights" },
  { path: "/contact" },
  ...PRACTICE_SLUGS.map((s) => ({ path: `/practice-areas/${s}` })),
];

// For GitHub Pages project sites (served under /<repo>/), set BASE_PATH so
// asset URLs resolve under the subpath. Workflow derives it from
// GITHUB_REPOSITORY. Must start and end with "/".
function normalizeBase(raw: string | undefined): string {
  if (!raw || raw === "/" || raw === "") return "/";
  let b = raw.trim();
  if (!b.startsWith("/")) b = "/" + b;
  if (!b.endsWith("/")) b = b + "/";
  return b;
}
const basePath = isGhPages ? normalizeBase(process.env.BASE_PATH) : "/";

export default defineConfig({
  vite: { base: basePath },
  tanstackStart: isGhPages
    ? ({
        server: { entry: "server" },
        prerender: { enabled: true, crawlLinks: true, failOnError: false },
        pages: STATIC_PAGES,
        sitemap: {
          enabled: true,
          host: process.env.SITE_URL || "https://example.com",
        },
      } as never)
    : {
        // Redirect TanStack Start's bundled server entry to src/server.ts
        // (our SSR error wrapper) for the Cloudflare Workers build only.
        server: { entry: "server" },
      },
  nitro: isGhPages ? false : undefined,
});
