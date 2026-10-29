import { defineConfig } from 'astro/config';

// Org root site: https://epilepsycenter.github.io/
//
// No `base` here — this repo serves the domain root. Note that project pages
// win over root-site paths, so this site must never add a top-level route
// named after a repo in the org (/tracer, /asterism, /NED-Net, /GliaAnalysis).
// Those belong to the project repos and are linked out to.
export default defineConfig({
  site: 'https://epilepsycenter.github.io',
  trailingSlash: 'ignore',
});
