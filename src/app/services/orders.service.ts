import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sendOrder } from '../models/sendOrder';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderApi = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders'

  orderUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=14'
  constructor(private http: HttpClient) { }

  getOrderApi(): Observable<sendOrder[]> {
    return this.http.get<sendOrder[]>(this.orderUrl)
  }

  postToApi(data: sendOrder) {
    console.log(data);
    return this.http.post(this.orderApi, data).subscribe()
  }
}