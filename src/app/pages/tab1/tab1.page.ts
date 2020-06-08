import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: User

  options = [
    {
      option: 'My Profile',
      icon: 'person',
      path: '/tabs/tab2'
    },
    {
      option: 'Job Opportunity',
      icon: 'business',
      path: 'job-oportunity'
    },
    {
      option: 'e-toolbox',
      icon: 'flash',
      path: '/e-toolbox'
    }
  ]

  constructor(private router: Router, private authService: AuthenticationService, private alertCtrl: AlertController, private userService: UserService) {
    this.getUser()
  }

  async getUser() {
    this.user = await this.userService.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
  }
  
  async checkAuth(path: string) {
    if(path === this.options[1].path) {
      if (!this.user.firstName || this.user.workExps.length === 0 || this.user.educations.length === 0 || this.user.trainings.length === 0) {

        const alertMessage = await this.alertCtrl.create({
    
          header: 'Alert',
          message: "You need to fill your profile to access this page",
          buttons: [{
            text: 'Later',
            role: 'cancel'
          },
          {
            text: 'Profile',
            handler: ()=> {
              this.router.navigate(['/tabs/tab2'])
            }
          }
        ]
        })
        return await alertMessage.present()
      }
    }

    this.router.navigate([`${path}`])
  }
}
