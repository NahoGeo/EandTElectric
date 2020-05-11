import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWorkExperiencePage } from './add-work-experience.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorkExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWorkExperiencePageRoutingModule {}
