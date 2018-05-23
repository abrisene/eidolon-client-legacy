## Eidolon

An opinionated React + Redux Boilerplate with Bootstrap to facilitate quick ideation on UI / UX concepts.

## Installation

Run:

```
touch .env
npm install
npm run start
```

### Environment Variables

Webpack looks for the environment variables below in an .env file in the app's root directory:

```
APP_NAME // A String passed into the Redux store.

API_URLS // A JSON object containing API URLs. 
  - These are not passed into the Redux Store by default. 
  - Including "socket" will automatically try and link Redux to the URL indicated using socket.io.
  ex. { "socket": "http://localhost:8000" }

API_KEYS // A JSON object containing API Keys.
  -These are not passed into the Redux Store by default.

DEV_PORT // Defines the port for Webpack's dev server to use.

```
