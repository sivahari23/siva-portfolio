
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Users/s.g.mathivanan/AppData/Local/Programs/Git/siva-portfolio',
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
    'index.csr.html': {size: 502, hash: '5df6a00e0036694015f47b732fd5ccae6950c82d8a827700a111f7eeb194eab2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'b38fb46cdd686499c19d557d2831cd39eebb3bbe9b4a98b821955e5f37789722', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
