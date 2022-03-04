import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { CarService } from 'src/app/core/services/car.service';
import { UserService } from 'src/app/core/services/user.service';
import { Car } from 'src/app/shared/models/Car';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
 
})
export class ManageCarsComponent implements OnInit {
  currentUser:User;
  connectedUser:User;
  isInputHiddenForThisTypeOfUser:boolean;
  @Input() sharedCar : Car;
  @Input() selectedCarDialog:boolean;
  @Input() createCarDialog:boolean;
  @Output() updateCarDialogValue: EventEmitter<any> = new EventEmitter();
  @Output() createCarDialogValue: EventEmitter<any> = new EventEmitter();
  constructor(private userService:UserService,private messageService: MessageService,private confirmationService: ConfirmationService,private carService:CarService,private authService:AuthService) { 
    this.currentUser = this.authService.currentUserValue;
     let connectedUser = JSON.parse(JSON.stringify(this.currentUser));

    if(connectedUser.isAdmin){
      
      this.isInputHiddenForThisTypeOfUser = false;
    }
    else{

      this.isInputHiddenForThisTypeOfUser=true;
    }
  }


  hideDialog(){
    if(this.selectedCarDialog == true){
      this.selectedCarDialog=false;
      this.sharedCar={};
      this.sendNotificationToUpdate(this.selectedCarDialog);
    }
    if(this.createCarDialog == true){
      this.createCarDialog=false;
      this.sendNotificationToUpdate(this.createCarDialog);
    }
  }
 
  sendNotificationToUpdate(value:any) {
      this.updateCarDialogValue.emit(value);
  }
  update(){
    this.carService.update(this.sharedCar).subscribe({
      complete: () => { 
        
       }, // completeHandler
      error: () => { 
        
       },    // errorHandler 
      next: data => {
        if(data == null){
            this.messageService.add({severity:'success', summary:'Update successfully', detail:''})
            this.selectedCarDialog = false;
            
        }
        else
        {
          this.messageService.add({severity:'error', summary:'Error updating entries', detail:''});

        }
      },
  });
  }
  create(){
   let connectedUser = JSON.parse(JSON.stringify(this.currentUser));
    if(connectedUser.isAdmin){
      console.log("admin");
      this.carService.create(this.sharedCar).subscribe({
        complete: () => { 
          
         }, // completeHandler
        error: () => { 
          
         },    // errorHandler 
        next: data => {
          if(data == null){
              this.messageService.add({severity:'success', summary:'User created successfully', detail:''})
              this.createCarDialog = false;
              location.reload();
          }
          else
          {
            this.messageService.add({severity:'error', summary:'Error updating entries', detail:''});
  
          }
        },
    });
    }else{
      this.sharedCar.UserId =connectedUser.id;
      this.carService.create(this.sharedCar).subscribe({
        complete: () => { 
          
         }, // completeHandler
        error: () => { 
          
         },    // errorHandler 
        next: data => {
          if(data == null){
              this.messageService.add({severity:'success', summary:'User created successfully', detail:''})
              this.createCarDialog = false;
              location.reload();
          }
          else
          {
            this.messageService.add({severity:'error', summary:'Error updating entries', detail:''});
  
          }
        },
    });
    }
  

  }

  save(){
    if(this.selectedCarDialog == true){
        this.update();
    }
    if(this.createCarDialog == true){
        this.create();
      }
  }

  ngOnInit(): void {
    
  }

}
