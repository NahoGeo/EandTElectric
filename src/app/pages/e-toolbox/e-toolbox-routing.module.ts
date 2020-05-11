import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EToolboxPage } from './e-toolbox.page';

const routes: Routes = [
  {
    path: '',
    component: EToolboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EToolboxPageRoutingModule {}
