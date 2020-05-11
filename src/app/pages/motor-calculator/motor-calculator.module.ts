import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorCalculatorPageRoutingModule } from './motor-calculator-routing.module';

import { MotorCalculatorPage } from './motor-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorCalculatorPageRoutingModule
  ],
  declarations: [MotorCalculatorPage]
})
export class MotorCalculatorPageModule {}
