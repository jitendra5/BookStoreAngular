import { Component, OnInit } from '@angular/core';
import {GoogleBookService} from '../../services/googlebooks.service';
import {Book} from '../../../Book';
import {ActivatedRoute} from '@angular/router';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'book',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookComponent implements OnInit{
  title = 'app';
  id: string;
  newId: string;
  book: Book[];
  searchTitle: string;
  results:Book[];

  constructor(private googleBookService:GoogleBookService, private route:ActivatedRoute){
    this.route.params.subscribe(params => {
        this.id = params['id'];
     })
     
     this.googleBookService.getBook(this.id)
         .subscribe(book =>{
           this.book= book;
           this.searchTitle=book.volumeInfo.title;
           this.googleBookService.searchBook(this.searchTitle)
           .subscribe(res=>{
             this.results=res.items;
           console.log("Book get service. Book Detail component.");
           console.log(book);
         });
   }

   this.route.url.subscribe(url =>{
        console.log(url[1].path);
   });


}
ngOnInit() {
   
}
}
