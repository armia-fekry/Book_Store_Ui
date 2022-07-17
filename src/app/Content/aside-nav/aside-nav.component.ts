import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Observable } from 'rxjs';
import { BookServiceService } from '../Services/Books/book-service.service';

export interface BookSearch {
  name: string;
}
@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})

export class AsideNavComponent implements OnInit {
  myControl !: FormControl;
  options!: string[]
  filteredOptions!:string[];
  @Input() childBookNames!:string[]
  @Output() selectedBookEvent= new EventEmitter<string>()
  @Output() selectedCategoryEvent= new EventEmitter<string>()

  constructor(private _bookService:BookServiceService) { }

  ngOnInit(): void {
    this.filteredOptions=this.childBookNames
    console.log(this.childBookNames)
  }
  displayFn(user: BookSearch): string {
    return user && user.name ? user.name : '';
  }
  onSelectionChange($event:MatOptionSelectionChange,input:string){
    console.log('aa',input)
    this.selectedBookEvent.emit($event.source.value)
  }
  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.childBookNames.filter(option => option.toLowerCase().includes(filterValue.toLowerCase()));
  }
  onKeyUp(inputValue:any){
   this.filteredOptions= this.childBookNames?.filter(e=>e.toLowerCase().includes(inputValue.toLowerCase()))
  }
  GetCategoriesBooks(categoryName:string){
  this.selectedCategoryEvent.emit(categoryName)
  }

}
