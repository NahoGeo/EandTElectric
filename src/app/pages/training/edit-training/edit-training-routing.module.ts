import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTrainingPage } from './edit-training.page';

const routes: Routes = [
  {
    path: '',
    component: EditTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTrainingPageRoutingModule {}
