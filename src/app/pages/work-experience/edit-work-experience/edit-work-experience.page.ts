import { Component, OnInit } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-work-experience',
  templateUrl: './edit-work-experience.page.html',
  styleUrls: ['./edit-work-experience.page.scss'],
})
export class EditWorkExperiencePage implements OnInit {
  
  workExps: Array<WorkExp>
  workExp: WorkExp

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = Number(paramMap.get('Id'))
      this.workExp = this.userService.getWorkExpById(Id)
    })
    this.getUser()
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = Number(paramMap.get('Id'))
      this.workExp = this.userService.getWorkExpById(Id)
    })
    this.getUser()
  }

  getUser() {
    let user: User = this.userService.getUser()
    this.workExps = user.workExps
  }

  editWorkExp(data: WorkExp) {
    this.userService.editWorkExp(this.workExp.id, data)
    setTimeout(()=>{
      this.router.navigate(['/work-experience'])
    }, 500)
  }
}