import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { book } from './Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private _http:HttpClient) { }


public getBooks(page:number,pageSize:number):Observable<book[]>{
return  this._http.get<book[]>(`${environment.url}book`,{params:{page,pageSize}}).pipe(tap(e=>console.log("res,",e)))
}
public GetBookDetails(bookId:string):Observable<book>{
  return this._http.get<book>(`${environment.url}book/${bookId}`)
}
public GetCategoryBooks(categoryName:string,page:number,pageSize:number):Observable<book[]>{
  return this._http.get<book[]>(`${environment.url}book/category`,{params:{categoryName,page,pageSize}}).pipe(tap(e=>console.log("res,",e)));
}
}


