import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (base && !/^\/[a-zA-Z0-9._/-]+$/.test(base)) throw new Error('Invalid BASE_PATH');
// The pinned Vinext release cannot prerender with Next basePath on static exports.
// Build at root, then prefix public asset URLs for repository hosting.
function finalize() {
  if (!existsSync('dist/client/index.html')) throw new Error('Static homepage missing');
  if (base) {
    const visit = (dir) => {
      for (const item of readdirSync(dir, { withFileTypes: true })) {
        const file = join(dir, item.name);
        if (item.isDirectory()) visit(file);
        else if (/\.(html|rsc|js|json|css)$/.test(item.name)) {
          const text = readFileSync(file, 'utf8');
          writeFileSync(file, text.replaceAll('/_next/', `${base}/_next/`));
        }
      }
    };
    visit('dist/client');
  }
}
const exit = process.exit.bind(process);
process.exit = (code) => {
  if (code === 0) {
    try { finalize(); } catch (error) { console.error(error); exit(1); }
    // Let pending Windows handles close before successful CLI shutdown.
    if (process.platform === 'win32') { setTimeout(() => exit(0), 250); return; }
  }
  exit(code);
};
process.argv = [process.argv[0], 'vinext', 'build', ...process.argv.slice(2)];
await import(new URL('./cli.js', import.meta.resolve('vinext')).href);
