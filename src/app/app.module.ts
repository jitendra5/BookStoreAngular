import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NavComponent} from './components/NavComponent/nav.component';
import {LoginComponent} from './components/login/login.component';
import { AppComponent } from './app.component';
import {JumbotranComponent} from './components/jumbotran/jumbotran.component';
import {ContactComponent} from './components/contact/contact.component';
import {SignupComponent} from './components/signup/signup.component';
import {VolumesComponent} from './components/volumes/volumes.component';
import {BookComponent} from './components/BookDetail/bookdetail.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import {GoogleBookService} from './services/googlebooks.service';
import {FooterComponent} from './components/Footer/footer.component';
import {StripHtmlPipe} from './striphtml.pipe';
import { ShelfComponent } from './components/shelves/shelf.component';
@NgModule({
  declarations: [
    AppComponent,BookComponent, NavComponent,LoginComponent,VolumesComponent,JumbotranComponent, ContactComponent,SignupComponent,
    FooterComponent,StripHtmlPipe,ShelfComponent,
  ],
  imports: [
    BrowserModule, routing,FormsModule,HttpModule,HttpClientModule,
  ],
  providers: [GoogleBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
