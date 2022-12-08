
import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../models/User";

const API_URL = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number){
    return this.http.get(API_URL +"/"+ id, {responseType: 'text'}).subscribe();
  }
  getAllUser(){
    return this.http.get(API_URL, {responseType: 'text'}).subscribe();
  }

  postUser(formValue: {id: number , name: string, firstname: string, password: string, role: string, phoneNumber: string}){
    const newUser: User  = {
      ...formValue
    }
    this.http.post<User>(API_URL, newUser).subscribe();
  }
  updateUser(id: number, newUser: User){
    return this.http.put(API_URL +"/"+ id, newUser).subscribe();
  }
  deleteUser(id: number){
    return this.http.delete(API_URL +"/"+ id).subscribe();
  }
}
