import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Location} from "../models/Location";


const API_URL = 'http://localhost:8081/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(id: number){
    return this.http.get(API_URL +"/"+ id, {responseType: 'text'}).subscribe();
  }
  getAllLocation(){
    return this.http.get(API_URL, {responseType: 'text'}).subscribe();
  }

  postLocation(formValue: {id: number , name: string ,adress: string ,bakeryId: number|null ,img: string}){
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
