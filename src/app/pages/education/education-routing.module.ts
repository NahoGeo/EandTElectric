import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPage } from './education.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EducationPage
  },
  {
    path: 'edit-education/:Id',
    loadChildren: () => import('./edit-education/edit-education.module').then( m => m.EditEducationPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-education',
    loadChildren: () => import('./add-education/add-education.module').then( m => m.AddEducationPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule {}
