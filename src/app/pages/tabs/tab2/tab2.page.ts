import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { WorkExp } from 'src/app/models/work-exp.model';
import { Education } from 'src/app/models/education';
import { Training } from 'src/app/models/training';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { SyncronizationService } from 'src/app/services/syncronization.service';
import { ApiResponse } from 'src/app/models/response';
import { NetworkConnectionService } from 'src/app/services/network-connection.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  private subscription: Subscription

  user: User
  workExps: Array<WorkExp>
  educations: Array<Education>
  trainings: Array<Training>

  constructor(
    private userService: UserService,
    private router: Router,
    private syncService: SyncronizationService,
    private connection: NetworkConnectionService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.onEnter();

    this.subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/tabs/tab2') {
            this.onEnter();
        }
    });
  }
  
  onEnter() {
    this.getUser()
  }
  
  getUser() {
    this.user = this.userService.getUser()
    this.assignArrays()
  }

  assignArrays() {
    this.workExps = []
    this.educations = []
    this.trainings = []
    
    for(let i = 0; i < 2; i++) {
      if(this.user.workExps[i] && !this.workExps[i]){
        this.workExps[i] = this.user.workExps[i]
      }

      if(this.user.educations[i] && !this.educations[i]){
        this.educations[i] = this.user.educations[i]
      }

      if(this.user.trainings[i] && !this.trainings[i]){
        this.trainings[i] = this.user.trainings[i]
      }
    }
  }

  async doRefresh(event) {
    let connected = await this.connection.connectionDetector()
    if (connected) {
      this.syncService.updateUser().subscribe(
        (res: ApiResponse) => {
          console.log(res.message)
          this.userService.saveUserFrmAPI(res.body)
          this.getUser()
          event.target.complete()
        },
        err => {
          console.error(err.error.message)
          this.getUser()
          event.target.complete()
        }
      )
    }else{
      this.getUser()
      event.target.complete()
    }
  }
}