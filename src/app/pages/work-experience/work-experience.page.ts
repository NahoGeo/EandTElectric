import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.page.html',
  styleUrls: ['./work-experience.page.scss'],
})
export class WorkExperiencePage implements OnInit {

  user: User

  addWorkExp: boolean = true

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser()
    this.changeAddWorkExp()  
  }

  getUser() {
    this.user = this.userService.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
    this.changeAddWorkExp()  
  }

  changeAddWorkExp() {
    if (this.user.workExps.length >= 5) {
      this.addWorkExp = false
    }
  }
}