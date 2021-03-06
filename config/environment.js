'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'traino-app',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-google-maps': {
      key: 'AIzaSyDxlc8MY5vnRcFik2Ke6dK45gVMseDDsGc', // Using .env files in this example
      language: 'en',
      region: 'GB',
      protocol: 'https',
      version: '3.35',
      libraries: ['geometry', 'places'], // Optional libraries
      // client: undefined,
      // channel: undefined,
      // baseUrl: '//maps.googleapis.com/maps/api/js'
    },
    firebase:{ 
      apiKey: "AIzaSyB_IRiWr1gTa-jx6QjfauJIg1QXPgONwpM",
      authDomain: "traino-9c081.firebaseapp.com",
      databaseURL: "https://traino-9c081.firebaseio.com",
      projectId: "traino-9c081",
      storageBucket: "traino-9c081.appspot.com",
      messagingSenderId: "222254817747"
  },
      // if using ember-cli-content-security-policy
      contentSecurityPolicy: {
        'script-src': "'self' 'unsafe-eval' apis.google.com",
        'frame-src': "'self' https://*.firebaseapp.com",
        'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
      },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
