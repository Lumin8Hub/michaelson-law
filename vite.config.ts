// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When GH_PAGES=1 (set by the GitHub Actions workflow), build a fully static
// site via Nitro's `github_pages` preset and prerender every route. The Lovable
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

export default defineConfig({
  tanstackStart: isGhPages
    ? {}
    : {
        // Redirect TanStack Start's bundled server entry to src/server.ts
        // (our SSR error wrapper) for the Cloudflare Workers build only.
        server: { entry: "server" },
      },
  nitro: isGhPages
    ? ({
        preset: "github_pages",
        prerender: {
          crawlLinks: true,
          failOnError: false,
          routes: [
            "/",
            "/about",
            "/practice-areas",
            "/results",
            "/insights",
            "/contact",
            "/sitemap.xml",
            ...PRACTICE_SLUGS.map((s) => `/practice-areas/${s}`),
          ],
        },
      } as never)
    : undefined,
});
