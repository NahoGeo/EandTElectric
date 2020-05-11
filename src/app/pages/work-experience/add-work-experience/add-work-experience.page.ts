import { Component, OnInit } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { UserService } from 'src/app/services/user.service';
import { Position } from 'src/app/models/position';

@Component({
  selector: 'app-add-work-experience',
  templateUrl: './add-work-experience.page.html',
  styleUrls: ['./add-work-experience.page.scss'],
})
export class AddWorkExperiencePage implements OnInit {

  workExp: WorkExp = {
    id: '',
    name: '',
    positions: []
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addWorkExp(data: WorkExp) {
    this.userService.addWorkExp(data)
  }

}
