import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEducationComponent } from './add-edit-education/add-edit-education.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddEditTrainingComponent } from './add-edit-training/add-edit-training.component';
import { AddEditWorkExperienceComponent } from './add-edit-work-experience/add-edit-work-experience.component';
import { AddEditPositionComponent } from './add-edit-position/add-edit-position.component';



@NgModule({
  declarations: [
    AddEditEducationComponent,
    AddEditTrainingComponent,
    AddEditWorkExperienceComponent,
    AddEditPositionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    AddEditEducationComponent,
    AddEditTrainingComponent,
    AddEditWorkExperienceComponent,
    AddEditPositionComponent
  ]
})
export class ComponentsModule { }
