import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  user: User

  addTraining: boolean = true

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.user = this.userService.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
    this.changeAddTraining()
  }

  changeAddTraining() {
    if (this.user.trainings.length >= 5) {
      this.addTraining = false
    }
  }

}
