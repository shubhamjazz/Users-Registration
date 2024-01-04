import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ='http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User){
    return this.http.post(`${this.URL}/users`,userDetails)
  }

  getUserByEmail(email:string):Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}/users?email=${email}`)
  }
}
