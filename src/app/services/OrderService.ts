import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Order} from "../models/Order";
import {Location} from "../models/Location";

const API_URL = 'http://localhost:8081/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrder(id: number){
    return this.http.get(API_URL +"/"+ id, {responseType: 'text'}).subscribe();
  }
  getAllOrder(){
    return this.http.get(API_URL, {responseType: 'text'}).subscribe();
  }

  postOrder(formValue: {id: number , date: Date, location: Location, products: string, state: string, userId: number}){
    const newOrder: Order = {
      ...formValue
    }
    this.http.post<Order>(API_URL, newOrder).subscribe();
  }
  updateOrder(id: number, newOrder: Order){
    return this.http.put(API_URL +"/"+ id, newOrder).subscribe();
  }
  deleteOrder(id: number){
    return this.http.delete(API_URL +"/"+ id).subscribe();
  }
}
