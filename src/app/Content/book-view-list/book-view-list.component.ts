import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BookServiceService } from '../Services/Books/book-service.service';
import { book } from '../Services/Books/Models/book';

@Component({
  selector: 'app-book-view-list',
  templateUrl: './book-view-list.component.html',
  styleUrls: ['./book-view-list.component.scss']
})
export class BookViewListComponent implements OnInit {
  pageEvent!: PageEvent;
@Input() selectedBookName!:string
  bookLists !:book[]

  constructor(private _bookStore:BookServiceService) { }

  ngOnInit(): void {
   this._bookStore.getBooks(1,5).subscribe((e:any)=>{
    this.bookLists=e;

   })

  }
  onPaginatorChanged($event:PageEvent){
    console.log($event)
    let start = $event.pageIndex*$event.pageSize
    let end =  $event.pageSize
     this._bookStore.getBooks(start,end).subscribe((e:any)=>{
      this.bookLists= e
    })
  }
}
