import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';

import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  eValid :boolean;
  message:string;
  type:string;
  form: any = {
    email: null,
    password: null
  };
  user:User;
  constructor(private authService: AuthService,private router: Router,private formBuilder: FormBuilder,private messageService:MessageService) {
   
   }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  showViaService() {
    
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}
  onSubmit(): void {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    
    this.authService.login(this.loginForm.value)
    .pipe(first())
    .subscribe(
        data => {
          this.type = "success"; // color of severity
          this.message="Login successfull"; // displayed message
         if(data.isAdmin){
          this.router.navigate(['admin/dashboard']);
         }else{
          this.router.navigate(['user/dashboard']);
         }
         
        },
      
        error => {
           this.eValid = true;
           this.type = "error";// color of severity
           this.message="Email or password incorect"; // displayed message
           this.showViaService();
        });
  }


}
