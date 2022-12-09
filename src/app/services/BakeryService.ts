import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Bakery} from "../models/Bakery";


const API_URL = 'http://localhost:8081/bakery';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  constructor(private http: HttpClient) {}

  getBakery(id: number){
    return this.http.get(API_URL +"/"+ id, {responseType: 'text'}).subscribe();
  }
  getAllBakery(){
    return this.http.get(API_URL, {responseType: 'text'}).subscribe();
  }

  postBakery(formValue: {id: number , name: string ,adress: string ,userId: number}){
    const newBakery: Bakery = {
      ...formValue
    }
    this.http.post<Bakery>(API_URL, newBakery).subscribe();
  }
  updateBakery(id: number, newBakery: Bakery){
    return this.http.put(API_URL +"/"+ id, newBakery).subscribe();
  }
  deleteBakery(id: number){
    return this.http.delete(API_URL +"/"+ id).subscribe();
  }
}
