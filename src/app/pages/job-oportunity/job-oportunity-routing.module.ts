import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobOportunityPage } from './job-oportunity.page';

const routes: Routes = [
  {
    path: '',
    component: JobOportunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOportunityPageRoutingModule {}
