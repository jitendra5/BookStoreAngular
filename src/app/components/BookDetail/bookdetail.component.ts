import { Component, OnInit } from '@angular/core';
import {GoogleBookService} from '../../services/googlebooks.service';
import {Book} from '../../../Book';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'book',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookComponent implements OnInit{
  title = 'app';
  id: string;
  book: Book[];
  constructor(private googleBookService:GoogleBookService, private route:ActivatedRoute){
            
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params['id'];
     })=>{
     this.googleBookService.getBook(this.id)
         .subscribe(book =>{
           this.book= book;
           console.log("Book get service. Book Detail component.");
           console.log(book);
         })
   }


   }
}
