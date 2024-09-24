// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base:"/todo/",
//   plugins: [react()],
// })

// vite.config.js
// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     outDir: 'build',  // Change output folder from 'dist' to 'build'
//   }
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Add React plugin
  build: {
    outDir: 'build', // Set output folder to 'build'
  },
  base: '/Todo-using-React/', // Set your GitHub repo name
});
