import { Component, OnInit } from '@angular/core';
import {Profile} from 'src/app/models/profile-form.model'
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/services/validator.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  user: User

  address: Address = {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  }

  profile: Profile = {
    profileImage: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    celphoneNumber: '',
    address: this.address
  }

  constructor(private userService: UserService, private router: Router, private valid: ValidatorService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.getUser()
  }
  
  getUser() {
    this.user = this.userService.getUser()
  }

  async saveChanges() {
    let userImage = this.user.profileImage.trim()
    let firstName = this.user.firstName.trim()
    let lastName = this.user.lastName.trim()
    let email = this.user.email.trim()
    let phoneNumber = this.user.phoneNumber.trim()
    let celphoneNumber = this.user.celphoneNumber.trim()
    let street = this.user.address.street.trim()
    let city = this.user.address.city.trim()
    let state = this.user.address.state.trim()
    let zipCode = this.user.address.zipCode.trim()
    let country = this.user.address.country.trim()
    let errorMessage = ''
    
    if(!firstName) {
      errorMessage += `<p>-First name is required</p>`
    }
    if(!lastName) {
      errorMessage += `<p>-Last name is required</p>`
    }
    if(!this.valid.isEmailAddress(email)) {
      errorMessage += `<p>-A valid email is required</p>`
    }
    if(phoneNumber != '') {
      if (!this.valid.isPhone(phoneNumber)) {
        errorMessage += `<p>-A valid Phone number is required</p>`
      }
    }
    if(!celphoneNumber || !this.valid.isPhone(celphoneNumber)) {
      errorMessage += `<p>-A valid celphone number is required</p>`
    }
    if(!street) {
      errorMessage += `<p>-Street is required</p>`
    }
    if (!city) {
      errorMessage += `<p>-City is required</p>`
    }
    if (!state) {
      errorMessage += `<p>-State is required</p>`
    }
    if (!zipCode) {
      errorMessage += `<p>-Zip code is required</p>`
    }
    if(!country) {
      errorMessage += `<p>-Country is required</p>`
    }
    if (errorMessage.length > 0) {
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

    this.profile.profileImage = userImage
    this.profile.firstName = firstName
    this.profile.lastName = lastName
    this.profile.email = email
    this.profile.phoneNumber = phoneNumber
    this.profile.celphoneNumber = celphoneNumber
    this.address.street = street
    this.address.city = city
    this.address.state = state
    this.address.zipCode = zipCode
    this.address.country = country

    this.userService.editUserProfile(this.profile)
    setTimeout(() => {
      this.router.navigate(['/tabs/tab2'])
    }, 500);
  }

}
