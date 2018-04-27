import { Component } from '@angular/core';
import {Auth} from '../../services/auth.services';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:Auth){

  }
}
