import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Product} from "../models/Product";
import {catchError, Observable, of, retry} from "rxjs";

const API_URL = 'http://localhost:8081/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: number):Observable<Product|undefined>{
    return this.http.get<Product>(API_URL +"/"+ id).pipe(retry(1), catchError((error)=>{
      console.log;
      return of(undefined);
    }));
  }
  getAllProduct():Observable<Product[]|undefined>{
    return this.http.get<Product[]>(API_URL).pipe(retry(1), catchError((error)=>{
      console.log('error');
      return of(undefined);
    }));
  }

  postProduct(formValue: {id: number , name: string, price: number, qty: number, desc: string, picture: string}){
    const newProduct: Product  = {
      ...formValue
    }
    this.http.post<Product>(API_URL, newProduct).subscribe();
  }
  updateProduct(id: number, newProduct: Product){
    return this.http.put(API_URL +"/"+ id, newProduct).subscribe();
  }
  deleteProduct(id: number){
    return this.http.delete(API_URL +"/"+ id).subscribe();
  }
}
