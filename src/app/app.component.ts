import { Component } from '@angular/core';
import { Auth } from './services/auth.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: Auth) {
    auth.handleAuthentication();
  }
}
