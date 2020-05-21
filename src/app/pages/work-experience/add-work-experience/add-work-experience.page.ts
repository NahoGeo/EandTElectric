import { Component, OnInit } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.page.html',
  styleUrls: ['./add-work-experience.page.scss'],
})
export class AddWorkExperiencePage implements OnInit {

  workExp: WorkExp = {
    id: '',
    name: '',
    positions: []
  }

  constructor(private userService: UserService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.showNote()
  }

  async showNote() {
    const alert = await this.alertCtrl.create({
      header: 'Notes:',
      message: `<p>Please add your work experience from newer to older, at the same way with your positions in each experience.</p>
                <p>Only a maximun of five fields.</p>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  addWorkExp(data: WorkExp) {
    this.userService.addWorkExp(data)
  }

}
