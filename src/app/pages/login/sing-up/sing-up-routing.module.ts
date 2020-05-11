import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingUpPage } from './sing-up.page';

const routes: Routes = [
  {
    path: '',
    component: SingUpPage
  },
  {
    path: 'email-confirmation',
    loadChildren: () => import('./email-confirmation/email-confirmation.module').then( m => m.EmailConfirmationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingUpPageRoutingModule {}
