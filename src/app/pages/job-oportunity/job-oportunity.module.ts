import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobOportunityPageRoutingModule } from './job-oportunity-routing.module';

import { JobOportunityPage } from './job-oportunity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobOportunityPageRoutingModule
  ],
  declarations: [JobOportunityPage]
})
export class JobOportunityPageModule {}
