import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'motor-calculator',
    loadChildren: () => import('./pages/motor-calculator/motor-calculator.module').then( m => m.MotorCalculatorPageModule)
  },
  {
    path: 'wire-and-conduit',
    loadChildren: () => import('./pages/wire-and-conduit/wire-and-conduit.module').then( m => m.WireAndConduitPageModule)
  },
  {
    path: 'e-toolbox',
    loadChildren: () => import('./pages/e-toolbox/e-toolbox.module').then( m => m.EToolboxPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'work-experience',
    loadChildren: () => import('./pages/work-experience/work-experience.module').then( m => m.WorkExperiencePageModule)
  },
  {
    path: 'education',
    loadChildren: () => import('./pages/education/education.module').then( m => m.EducationPageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./pages/training/training.module').then( m => m.TrainingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
