import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  logIn(_email, _passeord) {
    this.router.navigate(['/tabs/tab1'])
  }

  async restorePassword(email: any) {
    email = email.value.trim()
    if (email === "") {
      const alertMessage = await this.alertCtrl.create({
      
        header: 'Send temporary password',
        message: "Write your email",
        buttons: [{
          text: 'Ok, I will',
          role: 'cancel'
        }]
      })
  
      return await alertMessage.present()
    }

    const alertElement = await this.alertCtrl.create({
      
      header: 'Send temporary password',
      message: `<p>We will send a temporary password to:</p>
                <p>${email}</p>`,
      buttons: [{
        text: 'No, cancel',
        role: 'cancel'
      },{
        text:'Yes, send it',
        handler: ()=> {
          console.log(`Sending an email message to: ${email}`);
        }
      }]
    })

    await alertElement.present()
  }

}
