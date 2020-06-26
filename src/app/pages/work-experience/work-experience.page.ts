import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { WorkExp } from 'src/app/models/work-exp.model';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.page.html',
  styleUrls: ['./work-experience.page.scss'],
})
export class WorkExperiencePage implements OnInit {

  private subscription: Subscription

  workExps: Array<WorkExp>

  addWorkExp: boolean = true

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private router: Router
    ) { }

  async ngOnInit() {
    await this.onEnter();

    this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/work-experience') {
            this.onEnter();
        }
    });
  }

  getUser() {
    let user: User = this.userService.getUser()
    this.workExps = user.workExps
  }

  onEnter() {
    this.getUser()
    this.changeAddWorkExp()
    this.showFirstNote()
    this.showSecondNote()
  }

  async showFirstNote() {
    if(this.workExps.length === 0) {
      const note1 = await this.alertCtrl.create({
        header: 'Work Experience',
        message: 'Here goes your work experience history.<br>Click the plus button to add your work experience',
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
    if(this.workExps.length === 1) {
      const note2 = await this.alertCtrl.create({
        header: 'Work Experience',
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
    this.changeAddWorkExp()
    event.target.complete();
  }

  changeAddWorkExp() {
    if (this.workExps.length >= 5) {
      this.addWorkExp = false
    }else{
      this.addWorkExp = true
    }
  }

  deleteOption(id: Number) {
    this.workExps = this.userService.deleteWorkExp(id)
  }
}