import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import {ShippingMethod} from "./Models/shippingMethod"
@Injectable({
  providedIn:'root'
})
export class cartservice{
$ShippingMethods!:Observable<ShippingMethod[]>
  constructor(private _http:HttpClient) {
    this.$ShippingMethods=this._http.get<ShippingMethod[]>
                          (`${environment.url}CustomerOrder/shippingMethods`).pipe(tap(e=>console.log))
  }

}
