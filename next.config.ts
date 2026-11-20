import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Every page is statically generated. To produce a plain static site
  // (for GitHub Pages / Netlify / any web host), uncomment the next line
  // and run `npm run build` – the site will be written to the `out/` folder.
  // output: 'export',
};

export default nextConfig;
