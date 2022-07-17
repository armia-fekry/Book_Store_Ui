import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BookServiceService } from '../Services/Books/book-service.service';
import { book } from '../Services/Books/Models/book';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  imgUrl=environment.filesUrl;
@Input() Book!:book

  constructor(private _bookServivce:BookServiceService,private _router:Router) { }

  ngOnInit(): void {
  }
  GoToDetails(){
    this._router.navigate(['/book', this.Book.bookId]);  }
}
