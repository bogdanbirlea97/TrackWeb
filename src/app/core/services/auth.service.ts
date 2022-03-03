import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { User } from 'src/app/shared/models/User';
const AUTH_API = 'https://localhost:44370/api/Auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public user:User;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')|| '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

login(loginUser:Login) {
  let email = JSON.parse(JSON.stringify(loginUser)).Email;
  let password =JSON.parse(JSON.stringify(loginUser)).Password;
    return this.http.post<any>(`${AUTH_API}/Login`, { email,password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.results.result));
            this.currentUserSubject.next(user.results.result);
            return user.results.result;
        }));
}
}
