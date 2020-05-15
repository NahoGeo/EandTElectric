import { Component, OnInit } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { Position } from 'src/app/models/position';
import { LoadingController, AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.page.html',
  styleUrls: ['./work-experience.page.scss'],
})
export class WorkExperiencePage implements OnInit {

  user: User

  addWorkExp: boolean = true


  constructor(private loadingController: LoadingController, private userService: UserService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.user = this.userService.getUser()
  }

  ionViewWillEnter() {
    this.changeAddWorkExp()  
  }

  changeAddWorkExp() {
    if (this.user.workExps.length >= 5) {
      this.addWorkExp = false
    }
  }

  /* async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  } */
}