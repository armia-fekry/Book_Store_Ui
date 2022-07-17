import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.scss']
})
export class CartConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CartConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _router :Router,
    private messageService: MessageService,) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ConfirmPay(){
    this.dialogRef.close();
    this.messageService.add({severity:'success', summary: 'Ordered Success', detail: 'Thank You For Chossing Us We Will Contact you Soon'});
    setTimeout(() => {
      this._router.navigate(["/main"])
    }, 1500);
  }
}
