import {LoginComponent} from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {JumbotranComponent} from './components/jumbotran/jumbotran.component';
import {ContactComponent} from './components/contact/contact.component';
import {SignupComponent} from './components/signup/signup.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'home', component:JumbotranComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignupComponent},
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);