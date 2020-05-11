import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPage } from './training.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPage
  },
  {
    path: 'edit-training/:Id',
    loadChildren: () => import('./edit-training/edit-training.module').then( m => m.EditTrainingPageModule)
  },
  {
    path: 'add-training',
    loadChildren: () => import('./add-training/add-training.module').then( m => m.AddTrainingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPageRoutingModule {}
