import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Education } from 'src/app/models/education';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.page.html',
  styleUrls: ['./add-education.page.scss'],
})
export class AddEducationPage implements OnInit {

  user: User

  education: Education = {
    institute: '',
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    degree: '',
    current: false
  }

  constructor(private userService: UserService, private router: Router, private alertCtrl: AlertController) { }

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
      message: `<p>Please add your education history from newer to older.</p>
                <p>Only a maximun of five fields.</p>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  addEducation(data: any) {
    this.userService.addEducation(data)
    setTimeout(()=>{
      this.router.navigate(['/education'])
    }, 500)
  }

}
