import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WireAndConduitPage } from './wire-and-conduit.page';

const routes: Routes = [
  {
    path: '',
    component: WireAndConduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WireAndConduitPageRoutingModule {}
