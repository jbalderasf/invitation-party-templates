import { defineConfig } from 'astro/config';
import singleFile from "astro-single-file";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()]
});
// export default defineConfig({
//   output: 'static',
//   integrations: [singleFile()],
//   vite: {
//     build: {
//       minify: false,
//     }
//   },
//   compressHTML: false,
// });