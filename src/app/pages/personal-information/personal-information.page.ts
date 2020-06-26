import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Profile} from 'src/app/models/profile-form.model'
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/services/validator.service'
import { AlertController, ActionSheetController, Platform } from '@ionic/angular'
import { Plugins, CameraSource, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {
  @ViewChild('imgInput', { static: false})imgInput: ElementRef

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
    private alertCtrl: AlertController,
    private actionCtrl: ActionSheetController,
    private plt: Platform
  ) { }

  ngOnInit() {
    this.getUser()
  }
  
  getUser() {
    let user: User = this.userService.getUser()
    
    this.profile.profileImage = user.profileImage
    this.profile.firstName = user.firstName
    this.profile.lastName = user.lastName
    this.profile.email = user.email
    this.profile.phoneNumber = user.phoneNumber
    this.profile.cellphoneNumber = user.cellphoneNumber
    this.profile.address = user.address
    this.profile.city = user.city
    this.profile.state = user.state
    this.profile.zipCode = user.zipCode
  }

  async showOptions() {
    const buttons = [{
      text: 'Camera',
      icon: 'camera',
      handler:()=>{
          this.selectedOption(CameraSource.Camera)
      }
    },{
      text: 'Photos',
      icon: 'image',
      handler:()=>{
        this.selectedOption(CameraSource.Photos)
      }
    }]

    if(!this.plt.is('hybrid')){
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: ()=>{
          this.imgInput.nativeElement.click()
        }
      })
    }

    const actionSheet= await this.actionCtrl.create({
      header: 'Image Source',
      buttons
    })

    return actionSheet.present()
  }

  uploadFile(e: EventTarget) {
    const eventObj: MSInputMethodContext = e as MSInputMethodContext
    const target: HTMLInputElement = eventObj.target as HTMLInputElement
    const file: File = target.files[0]
    const reader = new FileReader()
    reader.onload=()=>{
      this.profile.profileImage = reader.result
    }
    reader.readAsDataURL(file)
  }

  async selectedOption(source:CameraSource) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source
    })
    this.profile.profileImage = image.dataUrl
  }

  phoneEx(option: string) {
    switch(option) {
      case 'phoneNumber':
        if (this.profile.phoneNumber === '')
        this.profile.phoneNumber = '(123)456-7890'
        break

      case 'cellphoneNumber':
        if (this.profile.cellphoneNumber === '')
        this.profile.cellphoneNumber = '(123)456-7890'
        break
    }
  }

  checkChanges(option: string) {
    switch(option) {
      case 'phoneNumber':
        if (this.profile.phoneNumber === '(123)456-7890')
        this.profile.phoneNumber = ''
        break

      case 'cellphoneNumber':
        if (this.profile.cellphoneNumber === '(123)456-7890')
        this.profile.cellphoneNumber = ''
        break
    }
  }
  
  async saveChanges() {
    this.profile.firstName = this.profile.firstName.trim()
    this.profile.lastName = this.profile.lastName.trim()
    this.profile.email = this.profile.email.trim()
    this.profile.phoneNumber = this.profile.phoneNumber.trim()
    this.profile.cellphoneNumber = this.profile.cellphoneNumber.trim()
    this.profile.address = this.profile.address.trim()
    this.profile.city = this.profile.city.trim()
    this.profile.state = this.profile.state.trim()
    this.profile.zipCode = this.profile.zipCode.trim()
    let errorMessage = ''
    
    if(!this.profile.firstName) {
      errorMessage += `<p>First name is required.</p>`
    }
    if(!this.profile.lastName) {
      errorMessage += `<p>Last name is required.</p>`
    }
    if(!this.valid.isEmailAddress(this.profile.email)) {
      errorMessage += `<p>A valid email is required.</p>`
    }
    if(this.profile.phoneNumber != '') {
      if (!this.valid.isPhone(this.profile.phoneNumber)) {
        errorMessage += `<p>A valid Phone number is required.<br>Exp: (123)456-7890 or (123)4567890.</p>`
      }
    }
    if(!this.profile.cellphoneNumber || !this.valid.isPhone(this.profile.cellphoneNumber)) {
      errorMessage += `<p>A valid cellphone number is required.<br>Exp: (123)456-7890 or (123)4567890.</p>`
    }
    if(!this.profile.address) {
      errorMessage += `<p>Address is required.</p>`
    }
    if (!this.profile.city) {
      errorMessage += `<p>City is required.</p>`
    }
    if (!this.profile.state) {
      errorMessage += `<p>State is required.</p>`
    }
    if (!this.valid.validZipCode(this.profile.zipCode)) {
      if(!this.profile.zipCode){
        errorMessage += `<p>Zip code is required.</p>`
      }else{
        errorMessage += `<p>Provide a valid zip code.</p>`
      }
    }
    if (errorMessage.length > 0) {
      const alertMessage = await this.alertCtrl.create({      
        header: 'Instructions:',
        message: `${errorMessage}`,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
          }]
      })
      return await alertMessage.present()
    }

    this.userService.editUserProfile(this.profile)
    setTimeout(() => {
      this.router.navigate(['/tabs/tab2'])
    }, 500);
  }

}
