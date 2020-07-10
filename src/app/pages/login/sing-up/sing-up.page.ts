import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ValidatorService } from 'src/app/services/validator.service';
import { Profile } from 'src/app/models/profile-form.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ApiResponse } from 'src/app/models/response';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  user: Profile = {
    id: 0,
    email: ''
  }

  emailError: boolean = false
  passwordError: boolean = false
  confirmError: boolean = false

  weakPassword: boolean = false
  goodPassword: boolean = false
  strongPassword: boolean = false

  loading: any

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private valid: ValidatorService,
    private userService: UserService,
    private auth: AuthenticationService
    ) { }

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

  async signUp(email: any, password: any, confirmPassword: any) {
    this.weakPassword = false
    this.goodPassword = false
    this.strongPassword = false
    
    email = email.value.trim()
    password = password.value.trim()
    confirmPassword = confirmPassword.value.trim()
    let errorMessage=''
    
    if(!this.valid.isEmailAddress(email)) {
      if (email == '') {
        errorMessage += `<p>Write an email.</p>`
        this.emailError = true
      }else{
        errorMessage += `<p>Write a valid email.</p>`
        this.emailError = true
      }
    }
    if(!this.valid.validPassword(password)){

      errorMessage +=`<p>Password must contain more than 8 characters, a number, a capital letter and an special character.</p>`
      this.passwordError = true
    }
    if(confirmPassword !== password) {
      errorMessage +=`<p>Passwords don't match.</p>`
      this.confirmError = true
    }
    if (errorMessage.length > 0){
      const alertMessage = await this.alertCtrl.create({      
        header: 'Signing up Error',
        message: `${errorMessage}`,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
          }]
      })
      return await alertMessage.present()
    }
    if(this.userService.user.email) {
      const alertMessage = await this.alertCtrl.create({
      
        header: 'Warning',
        message: `<p>There is a profile already saved.<br>If you continue this profile will be delete</p>`,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Cancel',
            handler: ()=> {
              this.router.navigate(['login'])
            }
          },
          {
            text: 'continue',
            handler:()=> {
              this.verificationEmail(email, password)
            }
          }
        ]
      })
  
      return await alertMessage.present()
    }

    this.verificationEmail(email, password)
  }
  
  verificationEmail(email, password) {
    this.showLoader()
    this.auth.confirmEmail(email).subscribe(
      (res: ApiResponse) => {
        console.log(res.message)
        this.loading.dismiss()
        let key = Number(res.body)
        this.emailConfirmation(email, password, key)
      },
      async err => {
        console.error(err)
        this.loading.dismiss()
        if(err.error.message === 'user email already exist') {
            const alertMessage = await this.alertCtrl.create({
              
            header: 'Email Confirmation Error',
            message: "<p>This email already exist, please try with other one</p>",
            backdropDismiss: false,
            buttons: [
              {
                text: 'cancel',
                handler: ()=> {
                  this.router.navigate(['login'])
                }
              },
              {
                text: 'Try with other email',
                handler: ()=> {
                  this.router.navigate(['login/create-new-account'])
                }
              }
            ]
          })
      
          return await alertMessage.present()
        }
      }
    )
  }

  async emailConfirmation(email, password, key) {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Email Confirmation',
      message: "<p>Enter the confirmation key<br>we sent to your email.</p>",
      backdropDismiss: false,
      inputs: [
        {
          name: 'confirmationKey',
          type: 'number',
          placeholder: 'Key'
        }
      ],
      buttons: [
      {
        text: 'Done',
        handler: (data)=> {
          const secretKey = data["confirmationKey"]
          if (secretKey == key) {
            this.createNewAccount(email, password)
          } else {
            this.confirmationError(email, password, key)
          }
        }
      }
    ]
    })

    return await alertMessage.present()
  }

  async confirmationError(email, password, key) {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Email Confirmation Error',
      message: "<p>Wrong key, please wait for the email or send another one</p>",
      backdropDismiss: false,
      buttons: [
        {
          text: 'cancel',
          handler: ()=> {
            this.router.navigate(['login'])
          }
        },
        {
          text: 'wait for email',
          handler: ()=> {
            this.emailConfirmation(email, password, key)
          }
        },
        {
          text: 'send it again',
          handler: ()=> {
            this.verificationEmail(email, password)
          }
        }
      ]
    })

    return await alertMessage.present()
  }

  createNewAccount(email, password) {
    this.showLoader()
    this.auth.signUp(email, password).subscribe(
      (res: ApiResponse) => {
        console.log(res.body)
        this.loading.dismiss()
        this.user.id = res.body
        this.auth.setLogIn()
        this.userService.deleteOldProfile()
        this.user.email = email
        this.userService.newSignInUser(this.user)
        this.router.navigate(['tabs/tab1'])
      },
      err => {
        console.log(err)
        this.loading.dismiss()
      }
    )
  }

  deleteError(param) {

    switch (param.placeholder) {
      case 'Email':
        this.emailError = false
        break;

      case 'Password':
        this.passwordError = false
        break

      case 'Confirm Password':
        this.confirmError = false
        break 
    }
  }

  securityLevel(password) {

    if (password.value.length < 8) {
        this.weakPassword = false
        this.goodPassword = false
        this.strongPassword = false
    }
    if (password.value.length >= 8) {
      this.weakPassword = true
      this.goodPassword = false
      this.strongPassword = false
    }
    if (password.value.length >= 10) {
      this.weakPassword = false
      this.goodPassword = true
      this.strongPassword = false
    } 
    if (password.value.length >= 12) {
      this.weakPassword = false
      this.goodPassword = false
      this.strongPassword = true
    }
  }
}
