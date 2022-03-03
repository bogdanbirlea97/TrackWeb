import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user:any;
  role:string;
  constructor(private authService:AuthService) {
    this.user = this.authService.currentUserValue;
   }

  ngOnInit(): void {
    if(this.user.isAdmin){
        this.role = 'admin';
    }else{
        this.role = 'normal user';
    }
  }
}
  
