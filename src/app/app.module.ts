import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ItemsComponent } from './items/items.component';
import { SalesComponent } from './sales/sales.component';
import { MyBillsComponent } from './my-bills/my-bills.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBillComponent,
    ItemsComponent,
    SalesComponent,
    MyBillsComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
