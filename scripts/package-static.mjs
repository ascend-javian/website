import fs from 'node:fs';

function packagePage(source, destination) {
  let html = fs.readFileSync(source, 'utf8');
  const css = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)].map(
    (match) => match[0].match(/href="([^"]+)"/)[1],
  );
  const styles = css
    .map((url) =>
      fs.readFileSync('dist/client' + url.replace(/^\/website/, ''), 'utf8'),
    )
    .join('\n');
  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<link\b[^>]*>/g, (tag) =>
      /rel="(?:stylesheet|modulepreload)"/.test(tag) ||
      /as="(?:script|style)"/.test(tag)
        ? ''
        : tag,
    );
  html = html.replace(
    '</head>',
    `<style>${styles}</style><link rel="icon" href="./favicon.svg"/></head>`,
  );
  if (/<script\b/.test(html) || /\/_next\//.test(html))
    throw new Error('Unexpected runtime asset reference');
  fs.writeFileSync(destination, html);
}

packagePage('dist/client/index.html', 'outputs/github-pages/index.html');
packagePage('dist/client/privacy.html', 'outputs/github-pages/privacy.html');
packagePage('dist/client/about.html', 'outputs/github-pages/about.html');
packagePage('dist/client/contact.html', 'outputs/github-pages/contact.html');
packagePage(
  'dist/client/whistleblowing.html',
  'outputs/github-pages/whistleblowing.html',
);
packagePage(
  'dist/client/anti-bribery.html',
  'outputs/github-pages/anti-bribery.html',
);
packagePage('dist/client/support.html', 'outputs/github-pages/support.html');
packagePage(
  'dist/client/account-deletion.html',
  'outputs/github-pages/account-deletion.html',
);
packagePage('dist/client/terms.html', 'outputs/github-pages/terms.html');

const home = fs.readFileSync('outputs/github-pages/index.html', 'utf8');
const privacy = fs.readFileSync('outputs/github-pages/privacy.html', 'utf8');
const about = fs.readFileSync('outputs/github-pages/about.html', 'utf8');
const contact = fs.readFileSync('outputs/github-pages/contact.html', 'utf8');
const whistleblowing = fs.readFileSync(
  'outputs/github-pages/whistleblowing.html',
  'utf8',
);
const antiBribery = fs.readFileSync(
  'outputs/github-pages/anti-bribery.html',
  'utf8',
);
const support = fs.readFileSync('outputs/github-pages/support.html', 'utf8');
const accountDeletion = fs.readFileSync(
  'outputs/github-pages/account-deletion.html',
  'utf8',
);
const terms = fs.readFileSync('outputs/github-pages/terms.html', 'utf8');
if ((home.match(/class="service-card"/g) || []).length !== 15)
  throw new Error('Missing service cards');
if (
  !privacy.includes('Privacy Policy') ||
  !privacy.includes('Your choices and rights')
) {
  throw new Error('Privacy policy missing');
}
if (
  !about.includes('What drives us') ||
  !contact.includes('Contact Ascend Jvian')
)
  throw new Error('Company pages missing');
if (
  !whistleblowing.includes('Whistleblowing Policy') ||
  !antiBribery.includes('Anti-Bribery')
)
  throw new Error('Governance policies missing');
if (
  !support.includes('How can we help') ||
  !accountDeletion.includes('Data Deletion') ||
  !terms.includes('Terms of Use')
)
  throw new Error('App support pages missing');

for (const name of [
  'lifestyle.png',
  'mobility.png',
  'lifestyle-discovery.png',
  'favicon.svg',
]) {
  fs.copyFileSync('public/' + name, 'outputs/github-pages/' + name);
}
fs.writeFileSync('outputs/github-pages/.nojekyll', '');
for (const file of [
  'index.html',
  'about.html',
  'contact.html',
  'privacy.html',
  'whistleblowing.html',
  'anti-bribery.html',
  'support.html',
  'account-deletion.html',
  'terms.html',
  'favicon.svg',
  'lifestyle.png',
  'mobility.png',
  'lifestyle-discovery.png',
  '.nojekyll',
]) {
  fs.copyFileSync('outputs/github-pages/' + file, file);
}
console.log(
  'Static site packaged: homepage, company, support, deletion, terms and policy pages.',
);
