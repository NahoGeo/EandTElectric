import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWorkExperiencePageRoutingModule } from './edit-work-experience-routing.module';

import { EditWorkExperiencePage } from './edit-work-experience.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWorkExperiencePageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditWorkExperiencePage]
})
export class EditWorkExperiencePageModule {}
