
import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../models/User";
import {catchError, Observable, of, retry} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

const API_URL = 'http://localhost:8081/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number):Observable<User|undefined>{
    return this.http.get<User>(API_URL +"/"+ id).pipe(retry(1), catchError((error)=>{
      console.log;
      return of(undefined);
    }));
  }
  getAllUser():Observable<User|undefined>{
    return this.http.get<User>(API_URL).pipe(retry(1), catchError((error)=>{
      console.log;
      return of(undefined);
  }));
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
