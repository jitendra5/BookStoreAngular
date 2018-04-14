import { Component, OnInit } from '@angular/core';
import {GoogleBookService} from '../../services/googlebooks.service';
import {Book} from '../../../Book';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  title = 'app';
  id: string;
  book: Book[];
  constructor(private googleBookService:GoogleBookService, private route:ActivatedRoute){

  }
  // ngOnInit(){
  //   this.route.params
  //   .map(params => params['id'])
  //   .subscribe((id)=>{
  //     this.googleBookService.getBook(this.id)
  //     .subscribe(book =>{
  //       this.book= book;
  //       console.log("Book get service.");
  //       console.log(book);
  //     })
  //   }
  // }
  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params['id']
        // console.log(this.id);
         // (+) converts string 'id' to a number
     })=>{
     this.googleBookService.getBook(this.id)
         .subscribe(book =>{
           this.book= book;
           console.log("Book get service.");
           console.log(book);
         })
   }


   }
}
