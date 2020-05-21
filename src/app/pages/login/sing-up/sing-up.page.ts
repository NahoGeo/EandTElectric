import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ValidatorService } from 'src/app/services/validator.service';
import { Profile } from 'src/app/models/profile-form.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  user: Profile = {
    email: '',
    password: ''
  }

  emailError: boolean = false
  passwordError: boolean = false
  confirmError: boolean = false

  weakPassword: boolean = false
  goodPassword: boolean = false
  strongPassword: boolean = false

  constructor(private router: Router, private alertCtrl: AlertController, private valid: ValidatorService, private userService: UserService, private auth: AuthenticationService) { }

  ngOnInit() {
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

    const alertMessage = await this.alertCtrl.create({
      
      header: 'Email Confirmation',
      message: "<p>Enter the confirmation key<br>we sent to your email.</p>",
      inputs: [
        {
          name: 'Confirmation Key',
          type: 'text',
          placeholder: 'Key'
        }
      ],
      buttons: [
      {
        text: 'Done',
        handler: ()=> {
          this.user.email = email
          this.user.password = password
          this.userService.newSignInUser(this.user)
          this.auth.setLogIn()
          this.router.navigate(['tabs/tab1'])
        }
      }
    ]
    })

    return await alertMessage.present()
    

    //this.router.navigate(['login/create-new-account/email-confirmation'])
    
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
