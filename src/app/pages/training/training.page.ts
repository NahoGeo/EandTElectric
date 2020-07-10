import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Training } from 'src/app/models/training';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  @ViewChild('lista', {static:false}) lista :IonList

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
  }

  private showMessage1Counter = 0

  async showFirstNote() {
    if(this.showMessage1Counter === 0) {
      if(this.trainings.length === 0) {
        this.showMessage1Counter ++
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
    this.lista.closeSlidingItems()
    this.showDeleteAlert(id)
  }

  async showDeleteAlert(id: Number) {
    const deleteAlert = await this.alertCtrl.create({
      header: 'Delete',
      message: 'Delete this training?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'no',
          role: 'cancel'
        },
        {
          text: 'yes',
          handler: ()=>{
            this.deleteTraining(id)
          }
        }
      ]
    })
    return deleteAlert.present()
  }

  deleteTraining(id: Number) {
    this.trainings = this.userService.deleteTraining(id)
    this.changeAddTraining()
  }
}