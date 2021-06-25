import { DataService } from './../data.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {
  @Output() orderDetails = new EventEmitter();
  @Input() productSelected: any;
products: any = [];
orderedP: any = [];
  // tslint:disable-next-line:prefer-const
  constructor(private dataService: DataService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataService.getAll().subscribe((res: any) => {
      this.products = res.data;
    });
  }
  // tslint:disable-next-line:typedef
  createdOrder(){
    this.orderedP = [];
    this.productSelected.map((x: any) => {
      const date: Date = new Date();
      x.orderDate = date.toLocaleDateString();
      x.billNo = `BILL${date.getMilliseconds()}${date.getSeconds()}${date.getMinutes()}${date.getHours()}${date.getDay()}${date.getDate()}${date.getFullYear()}`;
      this.orderedP.push(x);
      this.sendOrderDetails();
    });
  }
  // tslint:disable-next-line:typedef
  sendOrderDetails(){
    this.orderDetails.emit(this.orderedP);
  }
}
