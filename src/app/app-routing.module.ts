import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';





@NgModule({
    imports: [
        RouterModule.forRoot([
          {path: '', loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule)},
          {path: 'admin', loadChildren: () => import('../app/modules/admin/admin.module').then(m => m.AdminModule)},
          {path: 'user', loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
