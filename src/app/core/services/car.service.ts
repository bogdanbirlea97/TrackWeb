import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/Car';
const AUTH_API = 'https://localhost:44370/api/';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsByUserId(userId:number){
    return this.http.get<Car[]>(`${AUTH_API}Car/GetCarsByUserIdAsync?userId=${userId}`);
  }
  getAllCars(){
    return this.http.get<Car[]>(`${AUTH_API}Car/GetAllAsync`);
  }
  create(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'Car/Create', data);
  }
  update(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'Car/Update', data);
  }
  delete(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'Car/DeleteCar', data);
  }
}
