import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EToolboxPage } from './e-toolbox.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EToolboxPage
  },
  {
    path: 'motor-calculator',
    loadChildren: () => import('./motor-calculator/motor-calculator.module').then( m => m.MotorCalculatorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'wire-and-conduit',
    loadChildren: () => import('./wire-and-conduit/wire-and-conduit.module').then( m => m.WireAndConduitPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'transformer',
    loadChildren: () => import('./transformer/transformer.module').then( m => m.TransformerPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EToolboxPageRoutingModule {}
