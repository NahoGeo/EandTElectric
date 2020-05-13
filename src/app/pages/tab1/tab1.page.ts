import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  options = [
    {
      option: 'My Profile',
      icon: 'person',
      path: '/tabs/tab2'
    },
    {
      option: 'Job Oportunity',
      icon: 'business',
      path: ''
    },
    {
      option: 'e-toolbox',
      icon: 'flash',
      path: '/e-toolbox'
    }
  ]

  constructor() {} 

}
