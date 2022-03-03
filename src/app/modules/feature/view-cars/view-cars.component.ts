import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { CarService } from 'src/app/core/services/car.service';

import { Car } from 'src/app/shared/models/Car';
import { User } from 'src/app/shared/models/User';


@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
 
})
export class ViewCarsComponent implements OnInit {
  currentUser: User;
  userCars:Car[];
  
  selectedCars:Car[];
  car:Car;
  submitted: boolean;
  selectedCarDialog: boolean;
  createCarDialog:boolean;
  countCars:number;
  constructor(private authService:AuthService,private carService:CarService,private breadcrumbService:BreadcrumbService,private confirmationService:ConfirmationService,private messageService:MessageService) { 
    this.breadcrumbService.setItems([
      {label: 'View cars', routerLink: ['']}
  ]);
    this.currentUser = this.authService.currentUserValue;
  }
  public getUserCars() {
    let id = JSON.parse(JSON.stringify(this.currentUser));
    this.carService.getCarsByUserId(id.id)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.userCars = response;
          this.countCars = this.userCars.length;
          console.log(this.userCars);
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
         
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
        
        })
  }
  
  getAllCars(){
    this.carService.getAllCars()
      .subscribe(
        (response) => {                           //next() callback
          this.userCars = response;
        },
        (error) => {                              //error() callback
         
        },
        () => {                                   //complete() callback
        
        })
  }

  ngOnInit(): void {
   if(JSON.parse(JSON.stringify(this.currentUser)).isAdmin){
    this.getAllCars();
   }
  else{
    this.getUserCars();
  }
  }
  createNewCar() {
    this.car={};
    this.submitted = false;
    this.createCarDialog = true;
}

deleteCar(car:Car){
  this.car = {...car};
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete car with ID: ' + JSON.parse(JSON.stringify(this.car)).id + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.carService.delete(this.car).subscribe({
        complete: () => { 
          
         }, // completeHandler
        error: () => { 
          
         },    // errorHandler 
        next: data => {
        
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        },
    });
        
    }
});
}
editCar(car: Car) {
  this.car = {...car};
  this.selectedCarDialog = true;
}

getDialogValue(evt) {
  this.selectedCarDialog = evt;
  this.createCarDialog = evt;
}
}
