import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs-compat/operator/take';
import { BookServiceService } from '../Services/Books/book-service.service';
import { book } from '../Services/Books/Models/book';

@Component({
  selector: 'app-carousal-books',
  templateUrl: './carousal-books.component.html',
  styleUrls: ['./carousal-books.component.scss']
})
export class CarousalBooksComponent implements OnInit {
books!:Array<book>
responsiveOptions!:any[]
  constructor(private _bookServuce:BookServiceService) { }

  ngOnInit(): void {
    this._bookServuce.getBooks(1,5).subscribe();
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
