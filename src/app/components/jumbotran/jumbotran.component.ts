import { Component } from '@angular/core';
import {GoogleBookService} from '../../services/googlebooks.service';
import {Book} from '../../../Book';
@Component({
  selector: 'jumbo',
  templateUrl: './jumbotran.component.html',
    styleUrls: ['./jumbotran.component.css'],
    providers:[GoogleBookService]

})
export class JumbotranComponent {
  searchStr:string;
  results:Book[];
  constructor(private googleBookService:GoogleBookService){

  }
  searchBooks(){
    this.googleBookService.searchBook(this.searchStr)
    .subscribe(res=>{
      this.results=res.items;
      console.log(res.items);
    });
  }
}
