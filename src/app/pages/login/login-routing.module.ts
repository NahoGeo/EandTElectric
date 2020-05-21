import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { LoginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'create-new-account',
    loadChildren: () => import('./sing-up/sing-up.module').then( m => m.SingUpPageModule),
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
