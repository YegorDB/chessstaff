import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));


export default {
  entry: './src/browser.js',
  output: {
    filename: 'chessstuff.min.js',
    path: resolve(__dirname, 'lib'),
  },
};
