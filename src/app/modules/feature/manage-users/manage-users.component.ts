import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',

})
export class ManageUsersComponent implements OnInit {
  @Input() sharedUser : User;
  @Input() selectedUserDialog:boolean;
  @Input() createUserDialog:boolean;
  @Output() updateUserDialogValue: EventEmitter<any> = new EventEmitter();
  @Output() createUserDialogValue: EventEmitter<any> = new EventEmitter();
  constructor(private userService:UserService,private messageService: MessageService,private confirmationService: ConfirmationService) { }


  hideDialog(){
    if(this.selectedUserDialog == true){
      this.selectedUserDialog=false;
      this.sharedUser={};
      this.sendNotificationToUpdate(this.selectedUserDialog);
    }
    if(this.createUserDialog == true){
      this.createUserDialog=false;
      this.sendNotificationToUpdate(this.createUserDialog);
    }
  }
 
  sendNotificationToUpdate(value:any) {
      this.updateUserDialogValue.emit(value);
  }
  update(){
    this.userService.update(this.sharedUser).subscribe({
      complete: () => { 
        
       }, // completeHandler
      error: () => { 
        
       },    // errorHandler 
      next: data => {
        if(data == null){
            this.messageService.add({severity:'success', summary:'Update successfully', detail:''})
            this.selectedUserDialog = false;
            
        }
        else
        {
          this.messageService.add({severity:'error', summary:'Error updating entries', detail:''});

        }
      },
  });
  }
  create(){
    this.userService.create(this.sharedUser).subscribe({
      complete: () => { 
        
       }, // completeHandler
      error: () => { 
        
       },    // errorHandler 
      next: data => {
        if(data == null){
            this.messageService.add({severity:'success', summary:'User created successfully', detail:''})
            this.createUserDialog = false;
            location.reload();
        }
        else
        {
          this.messageService.add({severity:'error', summary:'Error updating entries', detail:''});

        }
      },
  });
  }

  save(){
    if(this.selectedUserDialog == true){
        this.update();
    }
    if(this.createUserDialog == true){
        this.create();
      }
  }

  ngOnInit(): void {
    
  }
  

}
