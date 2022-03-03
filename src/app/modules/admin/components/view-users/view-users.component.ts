import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',

})
export class ViewUsersComponent implements OnInit {
  
  currentUser: User;
  listOfUsers:User[];

  selectedUsers:User[];
  user:User;
  submitted: boolean;
  selectedUserDialog: boolean;
  createUserDialog:boolean;
  constructor(private authService:AuthService,private userService:UserService,private breadcrumbService:BreadcrumbService,private confirmationService:ConfirmationService,private messageService:MessageService) { 
    this.breadcrumbService.setItems([
      {label: 'View users', routerLink: ['']}
  ]);
    this.currentUser = this.authService.currentUserValue;
  }
  
  getUsers(){
    let connectedUser = JSON.parse(JSON.stringify(this.currentUser));
    this.userService.getAllUsers()
      .subscribe(
        (response) => {                           //next() callback
          this.listOfUsers = response;
        },
        (error) => {                              //error() callback
         
        },
        () => {                                   //complete() callback
        
        })
  }
  ngOnInit(): void {
    this.getUsers();
  }
  createNewUser() {
    this.user={};
    this.submitted = false;
    this.createUserDialog = true;
}

deleteUser(user:User){
  this.user = {...user};
  let id = JSON.parse(JSON.stringify(this.user)).id;
  
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete user with ID: ' + JSON.parse(JSON.stringify(this.user)).id + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.userService.delete(this.user).subscribe({
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
editUser(user: User) {
  this.user = {...user};
  this.selectedUserDialog = true;
}

getDialogValue(evt) {
  this.selectedUserDialog = evt;
  this.createUserDialog = evt;
}


}
