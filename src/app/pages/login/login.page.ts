import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
import { ValidatorService } from 'src/app/services/validator.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NetworkConnectionService } from 'src/app/services/network-connection.service'
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private verify: ValidatorService,
    private userService: UserService,
    private auth: AuthenticationService,
    private connection: NetworkConnectionService,
    private appState: AppStateService
    ){}

  ngOnInit() {
  }

  async networkConnection() {
    let connected = await this.connection.connectionDetector()
    if (!connected) {
      let showAlert = await this.alertCtrl.create({
          header: 'Connection',
          message: 'You need a network conecction to sign up or sign in',
          backdropDismiss: false,
          buttons: [{
            text: 'OK',
            handler: ()=>{
              this.appState.closeApp()
            }
          }]

        })
      return showAlert.present()
    }
  }

  getUser() {
    this.user = this.userService.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
    this.networkConnection()
  }

  async logIn(email: any, password: any) {
    email = email.value.trim()
    password = password.value.trim()
    let errorMessage = ''

    if (!this.verify.isEmailAddress(email)) {
      errorMessage += `<p>Provide a valid email address.</p>`
    }
    if (!password) {
      errorMessage += `<p>Write your password.</p>`
    }

    if (errorMessage.length > 0) {
      const alertMessage = await this.alertCtrl.create({
      
        header: 'Sign-in Error',
        message: `${errorMessage}`,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      })
  
      return await alertMessage.present()
    }

    if(email && password) {
      if(email === this.user.email && password === this.user.password) {
        this.auth.setLogIn()
        this.router.navigate(['/tabs/tab1'])
      }else {
        const alertMessage = await this.alertCtrl.create({
      
          header: 'Unauthorized User',
          message: "New here?",
          buttons: [{
            text: 'No',
            role: 'cancel'
          },{
            text: 'Yes',
            handler:()=> {
              this.router.navigate(['login/create-new-account'])
            }
          }]
        })
    
        return await alertMessage.present()
      }
    }
  }

  async restorePassword(email: any) {
    email = email.value.trim()
    if (!email) {
      const alertMessage = await this.alertCtrl.create({
      
        header: 'Send temporary password',
        message: "Write your email",
        backdropDismiss: false,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
        }]
      })
  
      return await alertMessage.present()
    }

    const alertElement = await this.alertCtrl.create({
      
      header: 'Send temporary password',
      message: `<p>We will send a temporary password to:</p>
                <p>${email}</p>`,
      backdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text:'Send',
        handler: ()=> {
          console.log(`Sending an email message to: ${email}`);
        }
      }]
    })

    await alertElement.present()
  }

}
