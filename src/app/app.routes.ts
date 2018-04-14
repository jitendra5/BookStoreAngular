import {LoginComponent} from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {JumbotranComponent} from './components/jumbotran/jumbotran.component';
import {ContactComponent} from './components/contact/contact.component';
import {SignupComponent} from './components/signup/signup.component';
import {VolumesComponent} from './components/volumes/volumes.component';
import {BookComponent} from './components/BookDetail/bookdetail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'home', component:JumbotranComponent},
  {path:'contact', component:ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'volumes', component:VolumesComponent},
  {path:'book/:id', component:BookComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
