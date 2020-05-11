import { Component, OnInit } from '@angular/core';
import {Profile} from 'src/app/models/profile-form.model'
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUser()
  }

  checkImage(e) {
    console.log(e.target.firstElementChild.files[0]);
    
  }
  
  getUser() {
    this.user = this.userService.getUser()
  }

  saveChanges() {
    this.profile.firstName = this.user.firstName
    this.profile.lastName = this.user.lastName
    this.profile.email = this.user.email
    this.profile.phoneNumber = this.user.phoneNumber
    this.profile.celphoneNumber = this.user.celphoneNumber
    this.address.street = this.user.address.street
    this.address.city = this.user.address.city
    this.address.state = this.user.address.state
    this.address.zipCode = this.user.address.zipCode
    this.address.country = this.user.address.country

    this.userService.editUserProfile(this.profile)
    this.router.navigate(['/tabs/tab2'])
  }

}
