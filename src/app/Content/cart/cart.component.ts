import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { CartConfirmComponent } from '../cart-confirm/cart-confirm.component';
import { book } from '../Services/Books/Models/book';
import { cartservice } from '../Services/Cart/cart.service';
import { ShippingMethod } from '../Services/Cart/Models/shippingMethod';
import { LoginResponse } from '../Services/LogIn/LoginResponse';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  carForm!:FormGroup;
  @Input() _book!:book
  @Input() amount!:string ;
  cost!:string
  shopingMethods!:ShippingMethod[]
  selectedMethod!:ShippingMethod;
  displayedColumns = ['item', 'cost','amount'];
  displayedColumns2: string[] = ['name', 'street', 'city', 'country'];

  customer=new Array<LoginResponse>()
  constructor(private _cartservice:cartservice,
    public dialog: MatDialog,
    private messageService: MessageService,
             private FB:FormBuilder ) {
              this.carForm = this.FB.group({
                shoppingMethod:this.FB.control(''),
              })
              }

  ngOnInit(): void {
    this._cartservice.$ShippingMethods.subscribe((e:any)=>{
      this.shopingMethods=e.result
      console.log(e)
    })
    var customerObj = localStorage.getItem('customer')
    this.customer.push(JSON.parse(customerObj!))
    console.log(this.customer)
  }
  MethoedChanges($event:any){
  var selectedShiping = this.shopingMethods.find(e=>e.id==$event)
   this.selectedMethod=selectedShiping!!
  }
  GetBook(){
    console.log(this.selectedMethod)
    if(!!!this.selectedMethod){
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Please Select Shipping Method'});
    }else{
    var totalCost = (+this._book.price * +this.amount) + this.selectedMethod.cost
    const dialogRef = this.dialog.open(CartConfirmComponent, {
      width: '500px',
      data:{cost:totalCost}
    });
  }

  }
  showResponse(event:any) {
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
}

}
