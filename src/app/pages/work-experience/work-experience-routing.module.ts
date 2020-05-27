import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkExperiencePage } from './work-experience.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WorkExperiencePage
  },
  {
    path: 'edit-work-experience/:Id',
    loadChildren: () => import('./edit-work-experience/edit-work-experience.module').then( m => m.EditWorkExperiencePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-work-experience',
    loadChildren: () => import('./add-work-experience/add-work-experience.module').then( m => m.AddWorkExperiencePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkExperiencePageRoutingModule {}
