import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorCalculatorPage } from './motor-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: MotorCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorCalculatorPageRoutingModule {}
