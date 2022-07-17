import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LogInModel } from "./loginModel";
import { LoginResponse } from "./LoginResponse";

@Injectable({
  providedIn:'root'
})
export class LoginService{
constructor(private _http:HttpClient) {

}
LogIn(LogInModel:LogInModel):Observable<LoginResponse>{
  return this._http.post<LoginResponse>(`${environment.url}CustomerOrder/LogIn`,LogInModel)
}
}
