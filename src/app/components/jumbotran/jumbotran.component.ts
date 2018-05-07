import { Component,OnInit,ElementRef } from '@angular/core';
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
  showDropDown=false;
  searchStr:string;
  results:Book[];
  category:string;
  public elementRef;
  constructor(private googleBookService:GoogleBookService,private route:ActivatedRoute,myElement: ElementRef){
    this.elementRef = myElement;
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
    if(this.searchStr.length>0){
      this.showDropDown=true;
    this.googleBookService.searchBook(this.searchStr)
    .subscribe(res=>{
      this.results=res.items;
      console.log(res.items);
    });
    }
    else{
      this.showDropDown=false;
    }
    
  }
  toggleDropDown(){
    this.showDropDown=!this.showDropDown;
  }
}
