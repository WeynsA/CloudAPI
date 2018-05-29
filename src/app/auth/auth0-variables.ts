interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: '9NPMfg4Z8Q1Si6NgCtUUe6QZgYDpOKUc',
    domain: 's091998.eu.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
  };