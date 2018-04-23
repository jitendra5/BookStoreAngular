import {Injectable} from '@angular/core';
import {Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleBookService{
  private searchUrl: string;
  private bookUrl:string;
  private catUrl:string;
  constructor(private http:Http){

  }

  searchBook(str:string){
    this.searchUrl= "https://www.googleapis.com/books/v1/volumes?q="+str+"&offset=0";
    return this.http.get(this.searchUrl)
    .map(res =>res.json());

  }
  getBook(id:string){
    console.log("id:"+id);
    this.bookUrl= "https://www.googleapis.com/books/v1/volumes/"+id;
    return this.http.get(this.bookUrl)
    .map(res =>res.json());

  }
  searchShelf(cat:string){
    console.log("categoryInService:"+cat);
    this.catUrl= "https://www.googleapis.com/books/v1/volumes?q=subject:"+cat;
    return this.http.get(this.catUrl)
    .map(res =>res.json());
  }
}
