import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { CarService } from 'src/app/core/services/car.service';
import { UserService } from 'src/app/core/services/user.service';
import { Car } from 'src/app/shared/models/Car';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit {
  userCars:Car[];
  carCounter :number;
  isNormalUser:boolean;
  totalUsers:number;
  totalCars:number;
  currentUser:User;
  constructor(private userService: UserService, private carService: CarService, private breadcrumbService: BreadcrumbService,private authService:AuthService) {
      this.currentUser = this.authService.currentUserValue;
      this.breadcrumbService.setItems([
          {label: 'Dashboard', routerLink: ['']}
      ]);
  }
  getTotalUsers(){
      
    this.userService.getAllUsers()
      .subscribe(
        (response) => {                           
          this.totalUsers =response.length;
          console.log(response.length)
        },
        (error) => {                              //error() callback
          console.error('Display number of cars error')
         
        },
        () => {                                   //complete() callback
          //console.error('Request completed')      //This is actually not needed 
        
        })
    }
    getTotalCars(){
      
      this.carService.getAllCars()
        .subscribe(
          (response) => {                           
            this.totalCars =response.length;
            console.log(response.length)
          },
          (error) => {                              //error() callback
            console.error('Display number of cars error')
           
          },
          () => {                                   //complete() callback
            //console.error('Request completed')      //This is actually not needed 
          
          })
      }
      displayNumberOfCars(){
        let id = JSON.parse(JSON.stringify(this.currentUser));
      this.carService.getCarsByUserId(id.id)
        .subscribe(
          (response) => {                           
            this.carCounter =response.length;
            console.log(this.userCars);
          },
          (error) => {                              //error() callback
            console.error('Display number of cars error')
           
          },
          () => {                                   //complete() callback
            //console.error('Request completed')      //This is actually not needed 
          
          })
      }
  ngOnInit() {
      let isUserAdmin = JSON.parse(JSON.stringify(this.currentUser));
      if(isUserAdmin.isAdmin){
          this.isNormalUser = false;
          this.getTotalUsers();
          this.getTotalCars();
         
      }else{
          this.isNormalUser = true;
          this.displayNumberOfCars();
      }
     
     // this.userService.getAllUsers().subscribe(data => this.users = data);
  
      

     
  }
}
