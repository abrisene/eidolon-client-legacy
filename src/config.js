/*
 # config.js
 # Configuration File
 */

/**
 # Utility Methods
 */

const jsonFromEnv = env => env ? JSON.parse(env) : undefined;

/**
 # Critical Variables
 */

const config = {
  env: window.env ? window.env : process.env.NODE_ENV || 'production',
  appName: process.env.APP_NAME || 'Eidolon',
  socketURI: window.socketURI || process.env.SOCKET_URI,
  apiURI: window.apiURI || process.env.API_URI,
  apiURLs: jsonFromEnv(process.env.API_URLS),
  apiKeys: jsonFromEnv(process.env.API_KEYS),
};

/**
 # Module Exports
 */

module.exports = config;
