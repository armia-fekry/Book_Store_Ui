import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { book } from '../Services/Books/Models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  imgUrl=environment.filesUrl;
@Input() Book!:book
  constructor() { }

  ngOnInit(): void {
  }

}
