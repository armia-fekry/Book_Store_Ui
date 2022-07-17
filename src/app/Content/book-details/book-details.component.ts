import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { environment } from 'src/environments/environment';
import { CartComponent } from '../cart/cart.component';
import { BookServiceService } from '../Services/Books/book-service.service';
import { book } from '../Services/Books/Models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
bookId!:number
book!:book;
display!:boolean
imgUrl=environment.filesUrl;
orderAmount!:string
  constructor(private _route: ActivatedRoute
             ,private _bookService:BookServiceService,
             private messageService: MessageService
             ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var id =params['id'];
      this._bookService.GetBookDetails(id).subscribe((e:any)=>{
        console.log(e.result);
        this.book=e.result;
      })
    })
  }
  AddToCart(){
    if(!!!this.orderAmount){
      this.messageService.add({severity:'error', summary:'Amount Order ', detail:'Please Select Amount Of books'});
    }else{
      this.display=true;

    }
  // const ref =  this.dialogService.open(CartComponent,{
  //   header:'show',
  //   width:'70%'
  // })
  }

}
