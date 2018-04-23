import { Component, Input, HostListener } from '@angular/core';
import { ShelfComponent } from '../shelves/shelf.component';
@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  shelfSelected: boolean;
  message:string;
  parentMessage : string;
   constructor(){
       this.shelfSelected = false;
   }

   ShowShelf($event){
       this.shelfSelected = true;
        this.message = $event;
        // console.log("Event----------->");
        // console.log($event);
        console.log($event.srcElement.attributes.id);
        console.log(this.shelfSelected);
        this.parentMessage=$event.srcElement.attributes.id;
   }


}
