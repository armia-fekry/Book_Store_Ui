import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LogInModel } from '../Content/Services/LogIn/loginModel';
import { LoginResponse } from '../Content/Services/LogIn/LoginResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  customerName!:string
  constructor() { }

  ngOnInit(): void {
    var obj =localStorage.getItem('customer');
    this.customerName=JSON.parse(obj!!)?.customerName
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }]
  }
LogOut(){
  localStorage.clear();
}
}
