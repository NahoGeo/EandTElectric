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

  user: User
  education: Education

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        const Id = paramMap.get('Id')
        this.education = this.userService.getEducationById(Id)
    })
    this.getUser()
  }

  ionViewWillEnter() {
    this.getUser()
  }

  getUser() {
    this.user = this.userService.getUser()
  }

  editEducation(data: any) {
    this.userService.editEducation(this.education.id, data)
    setTimeout(()=>{
      this.router.navigate(['/education'])
    }, 500)
  }

}
