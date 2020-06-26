import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Training } from 'src/app/models/training';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  private subscription: Subscription

  trainings: Array<Training>

  addTraining: boolean = true

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private router: Router
    ) { }

  async ngOnInit() {
    await this.onEnter();

    this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/training') {
            this.onEnter();
        }
    });
  }

  getUser() {
    let user: User = this.userService.getUser()
    this.trainings = user.trainings
  }

  onEnter() {
    this.getUser()
    this.changeAddTraining()
    this.showFirstNote()
    this.showSecondNote()
  }

  async showFirstNote() {
    if(this.trainings.length === 0) {
      const note1 = await this.alertCtrl.create({
        header: 'Training',
        message: 'Here goes your training history.<br>Click the plus button to add your training',
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
    if(this.trainings.length === 1) {
      const note2 = await this.alertCtrl.create({
        header: 'Training',
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
    this.changeAddTraining()
    event.target.complete();
  }

  changeAddTraining() {
    if (this.trainings.length >= 5) {
      this.addTraining = false
    }else{
      this.addTraining = true
    }
  }

  deleteOption(id: Number) {
    this.trainings = this.userService.deleteTraining(id)
  }

}
