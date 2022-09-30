import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from './models/cake';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  URL: string = "http://localhost:3000/cakes";
  URL_ORDER:string="http://localhost:3001/orders";
  constructor(private http: HttpClient) { }
  getCakes(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.URL);
  }
  getCake(id?: number): Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${id}`);
  }
add(order:Order){
  return this.http.post<Order>(this.URL_ORDER, order);

}

}
// Split into 2 services - cakes and orders
//Header
//Footer
//color-blue and pink

