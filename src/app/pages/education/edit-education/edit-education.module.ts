import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEducationPageRoutingModule } from './edit-education-routing.module';

import { EditEducationPage } from './edit-education.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEducationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditEducationPage]
})
export class EditEducationPageModule {}
