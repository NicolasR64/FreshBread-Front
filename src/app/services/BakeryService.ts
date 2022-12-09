import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Bakery} from "../models/Bakery";
import {Location} from "../models/Location";
import {catchError, Observable, of, retry} from "rxjs";


const API_URL = 'http://localhost:8081/bakery';

@Injectable({
  providedIn: 'root'
})
export class BakeryService {
  constructor(private http: HttpClient) {}

  getBakery(id: number): Observable<Bakery|undefined>{
    return this.http.get<Bakery>(API_URL +"/"+ id).pipe(retry(1), catchError((error) =>{
      console.log(error);
      return of(undefined);
    }));
  }
  getAllBakery(): Observable<Bakery|undefined>{
    return this.http.get<Bakery>(API_URL).pipe(retry(1), catchError((error)=>{
      console.log(error);
      return of(undefined);
    }));
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
