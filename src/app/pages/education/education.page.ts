import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Education } from 'src/app/models/education';
import { Subscription } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

  private subscription: Subscription

  educations: Array<Education>

  addEducation: boolean = true

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private router: Router
    ) { }

  async ngOnInit() {
    await this.onEnter();

    this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/education') {
            this.onEnter();
        }
    });
  }

  getUser() {
    let user: User = this.userService.getUser()
    this.educations = user.educations
  }
  
  onEnter() {
    this.getUser()
    this.changeAddEducation()
    this.showFirstNote()
    this.showSecondNote()
  }

  async showFirstNote() {
    if(this.educations.length === 0) {
      const note1 = await this.alertCtrl.create({
        header: 'Education',
        message: 'Here goes your education history.<br>Click the plus button to add your education',
        backdropDismiss: false,
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      })
      return note1.present()
    }
  }

  async showSecondNote() {
    if(this.educations.length === 1) {
      const note2 = await this.alertCtrl.create({
        header: 'Education',
        message: 'You can edit or delete your experience, just slide the field from right to left to show the options',
        backdropDismiss: false,
        buttons: [{
          text: 'OK',
          role: 'cancel'
        }]
      })
      return note2.present()
    }
  }

  doRefresh(event) {
    this.getUser()
    this.changeAddEducation()
    event.target.complete();
  }

  changeAddEducation() {
    if (this.educations.length >= 5) {
      this.addEducation = false
    }else{
      this.addEducation = true
    }
  }
  
  deleteOption(id: Number) {
    this.educations = this.userService.deleteEducation(id)
  }
}
