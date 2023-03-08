// View your website at your own local server
// for excursions http://vite-php-setup.test

// http://localhost:5133 is serving Vite on development
// but accessing it directly will be empty
// TIP: consider changing the port for each project, see below

// IMPORTANT image urls in CSS works fine
// BUT you need to create a symlink on dev server to map this folder during dev:
// ln -s {path_to_project_source}/src/assets {path_to_public_html}/assets
// on production everything will work just fine
// (this happens because our Vite code is outside the server public access,
// if it where, we could use https://vitejs.dev/config/server-options.html#server-origin)
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import liveReload from 'vite-plugin-live-reload'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    liveReload([
      // using this for our excursions:
      __dirname + '../../*.php',
    ]),
    splitVendorChunkPlugin(),
  ],
  //base: '/app/excursions/frontend',
  base: process.env.APP_ENV === 'development'
  ? '/app/excursions/frontend/'
  : '/app/excursions/frontend/dist',
  build: {
    //outDir: '../',
    // emit manifest so PHP can find the hashed files
    manifest: true,
  },
  server: {
    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    // tip: choose a different port per project to run them at the same time
    strictPort: true,
    port: 5133,
    origin: 'http://127.0.0.1:5133',
  }
})
