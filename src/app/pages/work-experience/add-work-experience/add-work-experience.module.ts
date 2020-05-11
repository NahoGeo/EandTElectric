import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWorkExperiencePageRoutingModule } from './add-work-experience-routing.module';

import { AddWorkExperiencePage } from './add-work-experience.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWorkExperiencePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddWorkExperiencePage]
})
export class AddWorkExperiencePageModule {}
