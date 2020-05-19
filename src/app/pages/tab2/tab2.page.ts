import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user: User

  constructor(private userService: UserService) {
  }

  ngOnInit(){
    this.getUser()
  }
  
  getUser() {
    this.user =this.userService.getUser()
  }
  
  ionViewWillEnter() {
    this.getUser()
  }
}