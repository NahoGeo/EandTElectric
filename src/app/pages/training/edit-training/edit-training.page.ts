import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/models/training';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.page.html',
  styleUrls: ['./edit-training.page.scss'],
})
export class EditTrainingPage implements OnInit {

  training: Training

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = Number(paramMap.get('Id'))
      this.training = this.userService.getTrainingById(Id)
    })
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = Number(paramMap.get('Id'))
      this.training = this.userService.getTrainingById(Id)
    })
  }

  editTraining(data: any) {
    this.userService.editTraining(this.training.id, data)
    setTimeout(()=>{
      this.router.navigate(['/training'])
    }, 500)
  }

}
