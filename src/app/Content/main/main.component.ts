import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BookViewListComponent } from '../book-view-list/book-view-list.component';
import { BookServiceService } from '../Services/Books/book-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(BookViewListComponent) bookListComponent!:BookViewListComponent
  selectedBookName!:string
  bookNames!:string[]
    constructor(private messageService: MessageService,private _bookService:BookServiceService) {}

    ngOnInit() {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'LOG IN Success'});
       setTimeout(() => {console.log(this.bookListComponent.bookLists)
        this.bookNames=this.bookListComponent.bookLists.map(e=>e.title)
       }, 4000);
    }
    onSelectedBook($event:any){
      this.bookListComponent.bookLists=this.bookListComponent.bookLists.filter(e=>e.title.includes($event))
    }
    onSelectedCategory($event:any){
      if($event=='home'){
        this._bookService.getBooks(1,5).subscribe((e:any)=>{
          this.bookListComponent.bookLists=e;
      })
    }else{
   this._bookService.GetCategoryBooks($event,1,8).subscribe((e:any)=>{
    this.bookListComponent.bookLists=e
   })
    }
  }
}
