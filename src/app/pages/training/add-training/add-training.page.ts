import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.page.html',
  styleUrls: ['./add-training.page.scss'],
})
export class AddTrainingPage implements OnInit {

  training: Training = {
    title: '',
    awardedBy: '',
    recognitionDate: new Date().toDateString(),
    description: ''
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.showNote()
  }

  async showNote() {
    const alert = await this.alertCtrl.create({
      header: 'Notes:',
      message: `<p>Please add your trainings from newer to older.</p>
                <p>Only a maximun of five fields.</p>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  addTraining(data: any) {
    this.userService.addTraining(data)
    setTimeout(()=>{
      this.router.navigate(['/training'])
    }, 500)
  }
}