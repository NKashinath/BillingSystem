import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent implements OnInit {
@Input() orders: any;
  constructor() { }

  ngOnInit(): void {
  }


}
