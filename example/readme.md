- Backend is a standard Moodle Local plugin
- Frontend is Vite + React, located in frontend folder. The build directory is set to the plugin root.
- initial setup:
  - npm create vite@latest
  - project name 'frontend', lang 'javascript'
  - cd frontend
  - npm install
  - npm run dev (this will start the development server)
  - npm run build (will deploy assets to plugin root for production)
  - The standard vite entry point (index.html) is used by the build process, but it is not used loading the site. We use index.php, run via Moodle server, to load the vite app. When the dev server is running the scripts will load from the vite dev server, but when it is not running the dist scripts will be run. This is managed via vite.php.



 