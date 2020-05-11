import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EToolboxPageRoutingModule } from './e-toolbox-routing.module';

import { EToolboxPage } from './e-toolbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EToolboxPageRoutingModule
  ],
  declarations: [EToolboxPage]
})
export class EToolboxPageModule {}
