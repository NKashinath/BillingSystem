import { NgForm } from '@angular/forms';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BillingSystem';
  products: any;
  product = {
    name: '',
    price: 0
  };
  orderDetails: any = [];
  productSelected: any = [];
  salesByDay = {byDay: 0, total: 0};
  salesByMonth = {byMonth: 0, total: 0};
  salesByYear = {byYear: 0, total: 0};

  constructor(private dataService: DataService) {
  }
  // tslint:disable-next-line:typedef
  productAdd(data: NgForm){
    this.dataService.add(data.value).subscribe((response: any) => {
      if (response){
        alert('Product Added successfully');
        this.dataService.getAll().subscribe((res: any) => {
          this.products = res.data;
        });
      }
    }, (error) => {
      console.log(error);
    });
    data.reset();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.dataService.getAll().subscribe((res: any) => {
      this.products = res.data;
    });
  }
  // tslint:disable-next-line:typedef
  addToNewBill(data: NgForm){
    this.productSelected.push(data.value);
    this.products.map((ob: any) => {
      this.productSelected.forEach((x: any) => {
        if (ob.name === x.name){
          x.price = ob.price * x.quantity;
        }
      });
    });
    data.reset();
  }
  // tslint:disable-next-line:typedef
  saveOrderDetails(data: any){
    this.orderDetails = data;
    this.salesData();
  }
  // tslint:disable-next-line:typedef
  salesData(){
    // tslint:disable-next-line:one-variable-per-declaration
    let totalByDate = 0,
        totalByMonth = 0,
        totalByYear = 0;
    this.orderDetails.map((x: any): any => {
      if (new Date(x.orderDate).getDate() === new Date().getDate()){
        totalByDate += x.price;
        this.salesByDay.total = totalByDate, this.salesByDay.byDay = new Date(x.orderDate).getDate();
      }
      if (new Date(x.orderDate).getMonth() === new Date().getMonth()){
        totalByMonth += x.price;
        this.salesByMonth.total = totalByMonth, this.salesByMonth.byMonth = new Date(x.orderDate).getMonth() + 1;
      }
      if (new Date(x.orderDate).getFullYear() === new Date().getFullYear()){
        totalByYear += x.price;
        this.salesByYear.total = totalByYear, this.salesByYear.byYear = new Date(x.orderDate).getFullYear();
      }
    });
  }
}
