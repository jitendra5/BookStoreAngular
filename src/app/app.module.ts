import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavComponent} from './components/NavComponent/nav.component';
import {LoginComponent} from './components/login/login.component';
import { AppComponent } from './app.component';
import {JumbotranComponent} from './components/jumbotran/jumbotran.component';
import {ContactComponent} from './components/contact/contact.component';
import {SignupComponent} from './components/signup/signup.component';


import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, NavComponent,LoginComponent,JumbotranComponent, ContactComponent,SignupComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
