import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

  user: User

  addEducation: boolean = true

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser()
    this.changeAddEducation()  
  }

  getUser() {
    this.user = this.userService.getUser()
  }
  
  ionViewWillEnter() {
    this.getUser()
    this.changeAddEducation()  
  }

  changeAddEducation() {
    if (this.user.educations.length >= 5) {
      this.addEducation = false
    }
  }

}
