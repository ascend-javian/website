import fs from 'node:fs';

function packagePage(source, destination) {
  let html = fs.readFileSync(source, 'utf8');
  const css = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)]
    .map((match) => match[0].match(/href="([^"]+)"/)[1]);
  const styles = css
    .map((url) => fs.readFileSync('dist/client' + url.replace(/^\/website/, ''), 'utf8'))
    .join('\n');
  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<link\b[^>]*>/g, (tag) =>
      /rel="(?:stylesheet|modulepreload)"/.test(tag) || /as="(?:script|style)"/.test(tag) ? '' : tag,
    );
  html = html.replace('</head>', `<style>${styles}</style><link rel="icon" href="./favicon.svg"/></head>`);
  if (/<script\b/.test(html) || /\/_next\//.test(html)) throw new Error('Unexpected runtime asset reference');
  fs.writeFileSync(destination, html);
}

packagePage('dist/client/index.html', 'outputs/github-pages/index.html');
packagePage('dist/client/privacy.html', 'outputs/github-pages/privacy.html');

const home = fs.readFileSync('outputs/github-pages/index.html', 'utf8');
const privacy = fs.readFileSync('outputs/github-pages/privacy.html', 'utf8');
if ((home.match(/class="service-card"/g) || []).length !== 15) throw new Error('Missing service cards');
if (!privacy.includes('Privacy Policy') || !privacy.includes('Your choices and rights')) {
  throw new Error('Privacy policy missing');
}

for (const name of ['lifestyle.png', 'mobility.png', 'lifestyle-discovery.png', 'favicon.svg']) {
  fs.copyFileSync('public/' + name, 'outputs/github-pages/' + name);
}
fs.writeFileSync('outputs/github-pages/.nojekyll', '');
console.log('Static site packaged: homepage, 15 services and privacy policy.');
