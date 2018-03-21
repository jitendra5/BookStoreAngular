import {Injectable} from '@angular/core';
import {Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleBookService{
  private searchUrl: string;

  constructor(private http:Http){

  }

  searchBook(str:string){
    this.searchUrl= "https://www.googleapis.com/books/v1/volumes?q="+str+"&offset=0&limit=20";
    return this.http.get(this.searchUrl)
    .map(res =>res.json());

  }
}
