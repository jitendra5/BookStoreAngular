import { Component,OnInit } from '@angular/core';
import {GoogleBookService} from '../../services/googlebooks.service';
import {Book} from '../../../Book';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'jumbo',
  templateUrl: './jumbotran.component.html',
    styleUrls: ['./jumbotran.component.css'],
    providers:[GoogleBookService]

})
export class JumbotranComponent {
  searchStr:string;
  results:Book[];
  category:string;

  constructor(private googleBookService:GoogleBookService,private route:ActivatedRoute){
}
ngOnInit() {
  this.route.params.subscribe(params => {
  this.category = params['cat'];
  console.log("Cat: "+this.category);
  if(this.category){
      this.googleBookService.searchShelf(this.category)
      .subscribe(res=>{
        this.results=res.items;
        console.log(res.items);
      });
    }
}
}
  searchBooks(){
    this.googleBookService.searchBook(this.searchStr)
    .subscribe(res=>{
      this.results=res.items;
      console.log(res.items);
    });
  }
}
