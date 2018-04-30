import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavComponent} from './components/NavComponent/nav.component';

import { AppComponent } from './app.component';
import {JumbotranComponent} from './components/jumbotran/jumbotran.component';
import {ContactComponent} from './components/contact/contact.component';

import {VolumesComponent} from './components/volumes/volumes.component';
import {BookComponent} from './components/BookDetail/bookdetail.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {GoogleBookService} from './services/googlebooks.service';
import {FooterComponent} from './components/Footer/footer.component';
import {ProfileComponent} from './components/profile/profile.component';
import {StripHtmlPipe} from './striphtml.pipe';
import { ShelfComponent } from './components/shelves/shelf.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {Auth} from './services/auth.services';
@NgModule({
  declarations: [
    AppComponent,BookComponent, NavComponent,VolumesComponent,JumbotranComponent, ContactComponent,
    FooterComponent,StripHtmlPipe,ShelfComponent,ProfileComponent
  ],
  imports: [
    BrowserModule, routing,FormsModule,HttpModule,HttpClientModule,
  ],
  providers: [GoogleBookService,Auth,AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
