import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkExperiencePageRoutingModule } from './work-experience-routing.module';

import { WorkExperiencePage } from './work-experience.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkExperiencePageRoutingModule,
    ComponentsModule
  ],
  declarations: [WorkExperiencePage]
})
export class WorkExperiencePageModule {}
