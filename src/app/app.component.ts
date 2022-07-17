import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AsideNavComponent } from './Content/aside-nav/aside-nav.component';
import { BookViewListComponent } from './Content/book-view-list/book-view-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookStore-angular';
  dockItems = [
    {
        label: 'Order',
        icon: "assets/Order.jpg"
    },

];
@ViewChild(BookViewListComponent) bookListComponent!:BookViewListComponent
selectedBookName!:string
bookNames!:string[]
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
     setTimeout(() => {console.log(this.bookListComponent.bookLists)
      this.bookNames=this.bookListComponent.bookLists.map(e=>e.title)
     }, 4000);
  }
  onSelectedBook($event:any){
    this.bookListComponent.bookLists=this.bookListComponent.bookLists.filter(e=>e.title.includes($event))
  }
  IsLogin():boolean{
    return !!localStorage.getItem('customer')
  }
}
