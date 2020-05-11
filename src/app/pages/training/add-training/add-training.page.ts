import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.page.html',
  styleUrls: ['./add-training.page.scss'],
})
export class AddTrainingPage implements OnInit {

  training: Training = {
    id: '',
    title: '',
    awardedBy: '',
    recognitionDate: new Date().toDateString(),
    description: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addTraining(data: any) {
    this.userService.addTraining(data)
    setTimeout(()=>{
      this.router.navigate(['/training'])
    }, 500)
  }
}