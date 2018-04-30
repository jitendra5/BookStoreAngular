
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {JumbotranComponent} from './components/jumbotran/jumbotran.component';
import {ContactComponent} from './components/contact/contact.component';
import {ProfileComponent} from './components/profile/profile.component';
import {VolumesComponent} from './components/volumes/volumes.component';
import {BookComponent} from './components/BookDetail/bookdetail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'callback', redirectTo: '/home', pathMatch: 'full' },
  { path: 'shelf', redirectTo: '/home', pathMatch: 'full' },
  { path: 'profile' component:ProfileComponent},
  {path:'home', component:JumbotranComponent},
  {path:'contact', component:ContactComponent},

  {path:'volumes', component:VolumesComponent},
  {path:'book/:id', component:BookComponent},
  {path:'shelf/:cat', component:JumbotranComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
