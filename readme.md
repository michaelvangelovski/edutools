A collection of tools for schools (the "platform") built on Moodle as a headless backend. 
- /platform: Bootstraps the platform and provides core services for other tools.
- /example: An example of a tool
- /dashboard: The landing page for the platform - just another tool in the platform
- /excursions: The first real world tool.

Each tool has the standard plugin files needed by Moodle. On top of that, the tool is divided into frontend (the interface of the tool using React for example) and backend (the API layer for the tool)

Installation:

Pre-requisites:
- A fresh and working Moodle installation on Apache: https://github.com/moodle/moodle

The core: 
- cd <moodle_root_dir>/local/
- rm -rf * #Remove all existing contents from local dir
- git clone git@github.com:michaelvangelovski/edutools.git .
- Run the installation of the plugins via the browser
- Open <moodle_root_dir>/config.php and add the following line to the bottom: require_once(__DIR__. '/local/platform/setup.php');

Access the example tool:
- Access the example tool: <site_url>/local/example

Develop the example tool:
- cd local/example/frontend/
- npm install # this will install all of the front end dependencies
- npm run dev # this command starts the development server
- Access the example tool again, dev scripts will be loaded, and live reload will be working: <site_url>/local/example
- npm run build # this will build the frontend for production
