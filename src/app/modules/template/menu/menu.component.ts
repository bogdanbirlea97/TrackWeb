import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;"
                [item]="item" [index]="i" [visible]="true" [root]="true"></li>
        </ul>
    `
})
export class MenuComponent implements OnInit {

    model: any[];
    menu:any[];
    connectedUser:User;
    userRole:User;
    constructor(private userService:UserService,private authenticationService:AuthService){
        this.connectedUser = this.authenticationService.currentUserValue;
        //console.log("THIS ",this.connectedUser);
        
    }
    ngOnInit() {
        let isAdmin = JSON.parse(JSON.stringify(this.connectedUser)).isAdmin;
     
        //
        if(isAdmin){
            this.model = [
                {
                    label: 'Home Page', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['dashboard']}
                    ]
                },
                {
                    label: 'Manage', icon: 'pi pi-fw pi-star-fill', routerLink: ['/admin'],
                    items: [
                        {label: 'View cars', icon: 'pi pi-fw pi-id-card', routerLink: ['viewcars']},
                        {label: 'View users', icon: 'pi pi-fw pi-id-card', routerLink: ['viewusers']},
                       
                    ]
                },
               
            ];
        }else{
            this.model = [
                {
                    label: 'Home Page', icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['dashboard']}
                       
                    ]
                },
                {
                    label: 'User cars', icon: 'pi pi-fw pi-star-fill', routerLink: ['/user'],
                    items: [
                        {label: 'Car list', icon: 'pi pi-fw pi-car', routerLink: ['viewcars']},
                       
                    ]
                },
               
            ];
        }
    }
}
