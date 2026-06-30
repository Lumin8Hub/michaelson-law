// Resolves a Lovable Asset pointer to a URL that works in the current build.
// In Lovable preview / published Lovable hosting, the CDN path /__l5e/... is
// served directly. On GitHub Pages (or any static host without that CDN
// route), assets are downloaded into dist/client at build time and served
// from `${BASE_URL}lovable-assets/<asset_id>/<filename>`.
type AssetPointer = {
  url: string;
  asset_id: string;
  original_filename: string;
};

export function assetUrl(asset: AssetPointer): string {
  if (import.meta.env.VITE_GH_PAGES === "1") {
    const base = import.meta.env.BASE_URL || "/";
    return `${base}lovable-assets/${asset.asset_id}/${asset.original_filename}`;
  }
  return asset.url;
}
