import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Order} from "../models/Order";
import {Location} from "../models/Location";
import {Product} from "../models/Product";
import {catchError, Observable, of, retry} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

const API_URL = 'http://localhost:8081/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrder(id: number): Observable<Order|undefined>{
    return this.http.get<Order>(API_URL +"/"+ id).pipe(retry(1), catchError((error)=>{
      console.log();
      return of(undefined);
    }));
  }
  getAllOrder(): Observable<Order|undefined>{
    return this.http.get<Order>(API_URL).pipe(retry(1), catchError((error)=>{
      console.log();
      return of(undefined);
    }));
  }

  postOrder(formValue: {id: number , date: Date, location: Location|null, products: Product[]|null, state: string, userId: number, price: number}){
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
