import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  add(data: any){
   return this.http.post(`${environment.apiUrl}products/add`, data);
  }
    // tslint:disable-next-line:typedef
  getAll(){
    return this.http.get(`${environment.apiUrl}products/getAll`);
  }
}
