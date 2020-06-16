import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransformerPage } from './transformer.page';

const routes: Routes = [
  {
    path: '',
    component: TransformerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformerPageRoutingModule {}
