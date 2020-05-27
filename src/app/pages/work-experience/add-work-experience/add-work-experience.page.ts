import { Component, OnInit } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.page.html',
  styleUrls: ['./add-work-experience.page.scss'],
})
export class AddWorkExperiencePage implements OnInit {

  user: User

  workExp: WorkExp = {
    id: '',
    name: '',
    position: '',
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    current: false,
    description: ''
  }

  constructor(private userService: UserService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.showNote()
    this.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
  }

  getUser() {
    this.user = this.userService.getUser()
  }

  async showNote() {
    const alert = await this.alertCtrl.create({
      header: 'Notes:',
      message: `<p>Please add your work experience from newer to older.</p>
                <p>Only a maximun of five fields.</p>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  addWorkExp(data: WorkExp) {
    this.userService.addWorkExp(data)
  }

}
