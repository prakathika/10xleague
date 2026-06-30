import { copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const src = join(__dirname, 'assets', 'logo.jpg');
const dest1 = join(__dirname, 'public', 'logo.jpg');
const dest2 = join(__dirname, 'src', 'assets', 'logo.jpg');

try {
  copyFileSync(src, dest1);
  console.log('Copied to public/logo.jpg');
} catch (e) {
  console.error('Failed to copy to public:', e.message);
}

try {
  copyFileSync(src, dest2);
  console.log('Copied to src/assets/logo.jpg');
} catch (e) {
  console.error('Failed to copy to src/assets:', e.message);
}
