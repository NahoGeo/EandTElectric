import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.page.html',
  styleUrls: ['./edit-education.page.scss'],
})
export class EditEducationPage implements OnInit {

  educations: Array<Education>
  education: Education

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = Number(paramMap.get('Id'))
      this.education = this.userService.getEducationById(Id)
    })
    this.getEducations()
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const Id = Number(paramMap.get('Id'))
      this.education = this.userService.getEducationById(Id)
    })
    this.getEducations()
  }

  getEducations() {
    let user: User = this.userService.getUser()
    this.educations = user.educations
  }

  editEducation(data: Education) {
    this.userService.editEducation(this.education.id, data)
    setTimeout(()=>{
      this.router.navigate(['/education'])
    }, 500)
  }
}
