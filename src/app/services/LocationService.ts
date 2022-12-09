import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable, retry, catchError, of } from "rxjs";
import {Location} from "../models/Location";


const API_URL = 'http://localhost:8081/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(id: number): Observable<Location|undefined>{
    return this.http.get<Location>(API_URL +"/"+ id).pipe(retry(1), catchError((error) => {
      console.log(error);
      return of(undefined);
    }));
  }
  getAllLocation(){
    return this.http.get(API_URL, {responseType: 'text'}).subscribe();
  }

  postLocation(formValue: {id: number , name: string ,adress: string ,bakeryId: number|null ,img: string}): void{
    const newLocation: Location = {
      ...formValue
    }
    this.http.post<Location>(API_URL, newLocation).subscribe();
  }
  updateLocation(id: number, newLocation: Location){
    return this.http.put(API_URL +"/"+ id, newLocation).subscribe();
  }
  deleteLocation(id: number){
    return this.http.delete(API_URL +"/"+ id).subscribe();
  }
}
