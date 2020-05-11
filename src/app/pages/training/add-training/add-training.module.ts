import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTrainingPageRoutingModule } from './add-training-routing.module';

import { AddTrainingPage } from './add-training.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTrainingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddTrainingPage]
})
export class AddTrainingPageModule {}
