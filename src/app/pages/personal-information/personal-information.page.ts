import { Component, OnInit } from '@angular/core';
import {Profile} from 'src/app/models/profile-form.model'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/services/validator.service';
import { AlertController } from '@ionic/angular';
import { set, get, remove } from 'src/app/services/storage'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  user: User

  image: File

  profile: Profile = {
    profileImage: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cellphoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  }

  states: Array<string> = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO',
    'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  constructor(
    private userService: UserService,
    private router: Router,
    private valid: ValidatorService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.getUser()
  }
  
  getUser() {
    this.user = this.userService.getUser()
  }

  showImage(e: HtmlInputEvent) {
    if(e.target.files && e.target.files[0]) {
      this.image = <File>e.target.files[0]
      const reader = new FileReader()
      reader.onload = ()=> {
        this.user.profileImage = reader.result
        set('image', this.user.profileImage)
      }
      reader.readAsDataURL(this.image)
    }
  }
  
  async saveChanges() {
    let image = await get('image')
    let firstName = this.user.firstName.trim()
    let lastName = this.user.lastName.trim()
    let email = this.user.email.trim()
    let phoneNumber = this.user.phoneNumber.trim()
    let cellphoneNumber = this.user.cellphoneNumber.trim()
    let address = this.user.address.trim()
    let city = this.user.city.trim()
    let state = this.user.state.trim()
    let zipCode = this.user.zipCode.trim()
    let errorMessage = ''

    if(!image) {
      errorMessage += `<p>A profile image is required.</p>`
    }
    if(!firstName) {
      errorMessage += `<p>First name is required.</p>`
    }
    if(!lastName) {
      errorMessage += `<p>Last name is required.</p>`
    }
    if(!this.valid.isEmailAddress(email)) {
      errorMessage += `<p>A valid email is required.</p>`
    }
    if(phoneNumber != '') {
      if (!this.valid.isPhone(phoneNumber)) {
        errorMessage += `<p>A valid Phone number is required.<br>Exp: (123)456-7890 or (123)4567890.</p>`
      }
    }
    if(!cellphoneNumber || !this.valid.isPhone(cellphoneNumber)) {
      errorMessage += `<p>A valid cellphone number is required.<br>Exp: (123)456-7890 or (123)4567890.</p>`
    }
    if(!address) {
      errorMessage += `<p>Address is required.</p>`
    }
    if (!city) {
      errorMessage += `<p>City is required.</p>`
    }
    if (!state) {
      errorMessage += `<p>State is required.</p>`
    }
    if (!this.valid.validZipCode(zipCode)) {
      if(!zipCode){
        errorMessage += `<p>Zip code is required.</p>`
      }else{
        errorMessage += `<p>Provide a valid zip code.</p>`
      }
    }
    if (errorMessage.length > 0) {
      const alertMessage = await this.alertCtrl.create({      
        header: 'Sign up Error',
        message: `${errorMessage}`,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
          }]
      })
      return await alertMessage.present()
    }
    
    this.profile.profileImage = image
    this.profile.firstName = firstName
    this.profile.lastName = lastName
    this.profile.email = email
    this.profile.phoneNumber = phoneNumber
    this.profile.cellphoneNumber = cellphoneNumber
    this.profile.address = address
    this.profile.city = city
    this.profile.state = state
    this.profile.zipCode = zipCode

    remove('image')

    this.userService.editUserProfile(this.profile)
    setTimeout(() => {
      this.router.navigate(['/tabs/tab2'])
    }, 500);
  }

}
