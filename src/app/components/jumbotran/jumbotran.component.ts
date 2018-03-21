import { Component } from '@angular/core';
import {GoogleBookService} from '../../services/googlebooks.service';
@Component({
  selector: 'jumbo',
  templateUrl: './jumbotran.component.html',
    styleUrls: ['./jumbotran.component.css'],
    providers:[GoogleBookService]

})
export class JumbotranComponent {
  searchStr:string;
  constructor(private googleBookService:GoogleBookService){

  }
  searchBooks(){
    this.googleBookService.searchBook(this.searchStr)
    .subscribe(res=>{
      console.log(res.items);


    });
  }
}
