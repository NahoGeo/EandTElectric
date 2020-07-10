import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AlertController, LoadingController } from '@ionic/angular';
import { ValidatorService } from 'src/app/services/validator.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NetworkConnectionService } from 'src/app/services/network-connection.service'
import { AppStateService } from 'src/app/services/app-state.service';
import { ApiResponse } from 'src/app/models/response';
import { SyncronizationService } from 'src/app/services/syncronization.service';
import { set } from 'src/app/services/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User
  loading: any

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private verify: ValidatorService,
    private userService: UserService,
    private auth: AuthenticationService,
    private sync: SyncronizationService,
    private connection: NetworkConnectionService,
    private appState: AppStateService
    ){}

  ngOnInit() {
  }

  async showLoader() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait',
      spinner: 'dots',
      backdropDismiss: false
    })

    return this.loading.present()
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
      this.showLoader()
      this.auth.signIn(email, password).subscribe(
        (res: ApiResponse) => {
          console.log(res.message)
          this.loading.dismiss()
          this.userService.saveUserFrmAPI(res.body)
          this.sync.getApplications().subscribe(
            (res: ApiResponse) => {
              let positionsSelected = res.body
              set('positionsSelected', positionsSelected)
            }
          )
          this.auth.setLogIn()
          this.router.navigate(['/tabs/tab1'])
        },
        async err => {
          console.error(err.message)
          this.loading.dismiss()
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
      )
    }
  }

  async restorePassword(email: any) {
    console.log(typeof(email))
    if(typeof email === 'object'){
      email = email.value.trim()
    }else{
      email = email.trim()

      const alertMessage = await this.alertCtrl.create({
      
        header: 'Send key',
        message: "Write your email",
        backdropDismiss: false,
        inputs: [
          {
            name: 'email',
            type: 'text',
            placeholder: 'email'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
          text: 'send key',
          handler: (data)=>{
            let email = data["email"]
            email = email.trim()
            this.checkEmail(email)
          }
        }]
      })
  
      return await alertMessage.present()
    }

    if (!email) {
      const alertMessage = await this.alertCtrl.create({
      
        header: 'Send key',
        message: "Write your email",
        backdropDismiss: false,
        inputs: [
          {
            name: 'email',
            type: 'text',
            placeholder: 'email'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
          text: 'send key',
          handler: (data)=>{
            let email = data["email"]
            email = email.trim()
            this.checkEmail(email)
          }
        }]
      })
  
      return await alertMessage.present()
    }

    const alertElement = await this.alertCtrl.create({
      
      header: 'Send key',
      message: `<p>We will send a key to:</p>
                <p>${email}</p>`,
      backdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text:'Send',
        handler: ()=> {
          this.checkEmail(email)
        }
      }]
    })

    await alertElement.present()
  }

  checkEmail(email) {
    let errorMessage = ''

    if (!this.verify.isEmailAddress(email)) {
      errorMessage += `<p>Provide a valid email address.</p>`
    }

    if (errorMessage.length > 0) {
      this.emailErrorMessage(email, errorMessage)
    } else {
      this.confirmEmail(email)
    }
  }

  async emailErrorMessage(email, errorMessage) {
    const alertMessage = await this.alertCtrl.create({
    
      header: 'Email Error',
      message: `${errorMessage}`,
      buttons: [{
        text: 'Ok',
        handler: ()=>{
          this.restorePassword(email)
        }
      }]
    })

    return await alertMessage.present()
  }

  confirmEmail(email) {
    this.showLoader()
    this.auth.restorePasswordSendEmail(email).subscribe(
      (res: ApiResponse) => {
        console.log(res.message)
        this.loading.dismiss()
        let key = Number(res.body)
        this.keyConfirmation(email, key)
      },
      async err => {
        console.error(err)
        this.loading.dismiss()
        if(err.error.message === 'user email does not exist') {
            const alertMessage = await this.alertCtrl.create({
              
            header: 'Email Confirmation Error',
            message: "<p>This email does not exist, please try with other one.</p>",
            backdropDismiss: false,
            buttons: [
              {
                text: 'ok',
                role: 'cancel'
              }
            ]
          })
      
          return await alertMessage.present()
        }
      }
    )
  }

  async keyConfirmation(email, key) {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Email Confirmation',
      message: "<p>Enter the confirmation key<br>we sent to your email.</p>",
      backdropDismiss: false,
      inputs: [
        {
          name: 'secretKey',
          type: 'number',
          placeholder: 'Key'
        }
      ],
      buttons: [
      {
        text: 'Done',
        handler: (data)=> {
          const secretKey = data["secretKey"]
          if (secretKey == key) {
            this.presentPassword(email)
          } else {
            this.confirmationError(email, key)
          }
        }
      }
    ]
    })

    return await alertMessage.present()
  }

  async confirmationError(email, key) {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Confirmation Key Error',
      message: "<p>Wrong key, please wait for the email or send another one.</p>",
      backdropDismiss: false,
      buttons: [
        {
          text: 'cancel',
          role: 'cancel'
        },
        {
          text: 'wait for email',
          handler: ()=> {
            this.keyConfirmation(email, key)
          }
        },
        {
          text: 'send it again',
          handler: ()=> {
            this.confirmEmail(email)
          }
        }
      ]
    })

    return await alertMessage.present()
  }

  async presentPassword(email) {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Restore Password',
      message: "<p>Enter a new password.</p>",
      backdropDismiss: false,
      inputs: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'New Password'
        },
        {
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm Password'
        }
      ],
      buttons: [
      {
        text: 'Done',
        handler: (data)=> {
          let newPassword = data["newPassword"]
          let confirmPassword = data["confirmPassword"]
          newPassword = newPassword.trim()
          confirmPassword = confirmPassword.trim()

          if (newPassword === confirmPassword) {
            this.checkPassword(email, newPassword)
          } else {
            this.passwordDontMatch(email)
          }
        }
      }
    ]
    })

    return await alertMessage.present()
  }

  async checkPassword(email, password) {
    let errorMessage = ''
    if(!this.verify.validPassword(password)){
      errorMessage +=`<p>Password must contain more than 8 characters, a number, a capital letter and an special character.</p>`
    }
    if(errorMessage) {
      const alertMessage = await this.alertCtrl.create({      
        header: 'Restore Password',
        message: `${errorMessage}`,
        buttons: [
          {
          text: 'Ok',
          handler: ()=>{
              this.presentPassword(email)
            }
          }
        ]
      })
      return await alertMessage.present()
    }
    this.changePassword(email, password)
  }

  changePassword(email, password) {
    this.showLoader()
    this.auth.restorePassword(email, password).subscribe(
      (res: ApiResponse) => {
        console.log(res.message)
        this.loading.dismiss()
        this.userService.saveUserFrmAPI(res.body)
        this.auth.setLogIn()
        this.router.navigate(['/tabs/tab1'])
      },
      err => {
        console.error(err.error.message)
        this.loading.dismiss()
      }
    )
  }

  async passwordDontMatch(email) {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Restore Password',
      message: "<p>Password does not match.</p>",
      backdropDismiss: false,
      buttons: [
      {
        text: 'ok',
        handler: ()=> {
          this.presentPassword(email)
        }
      }
    ]
    })

    return await alertMessage.present()
  }
}
