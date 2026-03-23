
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 503, hash: 'fa12e5cb2bd2d7575acd775efb1aa8b364e3f807f1aea695eca1d0a49b065945', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '9fca3a01413dd61e722b198562a65d3fb402605f313ae88176512c9a49e9c0ab', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
