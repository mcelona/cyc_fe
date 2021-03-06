/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'cyc_fe',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self' data: fonts.googleapis.com data: fonts.gstatic.com",
      'connect-src': "'self' localhost:3000",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' data: fonts.googleapis.com",
      'frame-src': "'none'"
    },
    
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    ENV.APP.API_VERSION = "v1";
    ENV.APP.API_ENDPOINT = "http://localhost:3000";
    ENV.APP.AUTH_ENDPOINT = "http://localhost:3000/v1/signin";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  
  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    routeAfterAuthentication: 'home'
  };

  return ENV;
};
