import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTrainingPageRoutingModule } from './edit-training-routing.module';

import { EditTrainingPage } from './edit-training.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTrainingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditTrainingPage]
})
export class EditTrainingPageModule {}
