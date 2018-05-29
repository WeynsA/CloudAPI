// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '9NPMfg4Z8Q1Si6NgCtUUe6QZgYDpOKUc',
    domain: 's091998.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://s091998.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}