// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import {tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock : any;
@Injectable()
export class Auth {
  lock = new Auth0Lock('gJK14rvCgSX2FlPYhR7L4Z0wKBZy337a','ramjitendra.eu.auth0.com',{});

  constructor() {
    console.log("Inside constructor!");
    let abc= this.lock.on("authenticated",(authResult: any)=>{
      localStorage.setItem('id_token',authResult.idToken);


    });
      console.log(localStorage);
    console.log(abc);
  }
  public login(){
    this.lock.show();
  }
  public authenticated(){
    return tokenNotExpired();
  };

  public logout() {
    console.log("CLICKED ON LOGOUT!");
    localStorage.removeItem('id_token');
    console.log(localStorage);
  };

}
