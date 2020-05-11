import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Education } from 'src/app/models/education';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.page.html',
  styleUrls: ['./add-education.page.scss'],
})
export class AddEducationPage implements OnInit {

  education: Education = {
    institute: '',
    startDate: new Date('').toDateString(),
    endDate: new Date('').toDateString(),
    degree: '',
    current: false
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  addEducation(data: any) {
    this.userService.addEducation(data)
    setTimeout(()=>{
      this.router.navigate(['/education'])
    }, 500)
  }

}
