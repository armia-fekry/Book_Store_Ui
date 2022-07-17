import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LoginService } from '../Content/Services/LogIn/login.Service';
import { LogInModel } from '../Content/Services/LogIn/loginModel';

@Component({
  selector: 'app-log-in',
  templateUrl: 'log-in.component.html',
  styleUrls: ['log-in.component.scss']
})
export class LogInComponent implements OnInit {
  msgs!:any[]
loginForm!:FormGroup
  constructor(private _LoginService:LoginService,private FB:FormBuilder,private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.loginForm=this.FB.group({
      username:this.FB.control(''),
      password:this.FB.control('')
    })
  }
  LogIn(){
    var model = new LogInModel(this.loginForm.get('username')?.value,
              this.loginForm.get('password')?.value)

   this._LoginService.LogIn(model).subscribe((e:any)=>{
    if(e.succeeded){
      localStorage.setItem('customer',JSON.stringify(e.result));
    }else{
      this.messageService.add({severity:'error', summary:'LogIn Status', detail:'Invalid Email Or Password'})
    }
   })
  }
}
