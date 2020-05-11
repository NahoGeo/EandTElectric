import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEducationPageRoutingModule } from './add-education-routing.module';

import { AddEducationPage } from './add-education.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEducationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddEducationPage]
})
export class AddEducationPageModule {}
