- Backend is a standard Moodle Local plugin
- Frontend is Vite + React, located in frontend folder. The build directory is set to the plugin root.
- initial setup:
  - npm create vite@latest
  - project name 'frontend', lang 'javascript'
  - cd frontend
  - npm install
  - npm run dev (for development server)
  - npm run build (will place assests and index.html in plugin root for production)
  - We need to replace the standard entry point with plugin index.php.



 