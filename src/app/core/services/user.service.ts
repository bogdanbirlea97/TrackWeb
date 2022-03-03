import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/User';
const AUTH_API = 'https://localhost:44370/api/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'User/Create', data);
  }
  getById(id:string):Observable<any>{
      return this.http.get<User>(`${AUTH_API}User/GetUserByIdAsync?id=${id}`);
  }
  
  update(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'User/Update', data);
  }
  delete(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'User/DeleteUser', data);
  }
  getAllUsers(): Observable<any>{
    return this.http.get<any>(`${AUTH_API}User/GetAllAsync`);
  }
}
