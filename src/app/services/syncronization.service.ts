import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { get, set } from './storage';
import { UserService } from './user.service';
import { ApiResponse } from '../models/response';
import { JobOpportunityService } from './job-opportunity.service';

@Injectable({
  providedIn: 'root'
})
export class SyncronizationService {
  //http://localhost:3000/api/user/update/20
  httpLink = 'http://localhost:3000/api'

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private JOService: JobOpportunityService
    ) {}
  private setLastUpdate() {
    let currentDate = new Date()
    set('lastUpdate', currentDate)
  }

  async getUser() {
    let user: User = await this.userService.getUser()
    return this.http.get<ApiResponse>(`${this.httpLink}/user/${user.id}`)
  }

  async updateUserPerDay() {
    let lastUpdate = await get('lastUpdate')

    if(lastUpdate) {
      console.log(lastUpdate)
      let dateToCopare = new Date(lastUpdate)
      let currentDate = new Date()
      
      if(dateToCopare.getDate() !== currentDate.getDate()) {
        this.updateUser().subscribe(
          (res: ApiResponse) => {
            console.log(res.message)
            this.userService.saveUserFrmAPI(res.body)
            this.setLastUpdate()
          },
          err => {
            console.error(err)
          }
        )
        this.updateApplications().subscribe(
          (res: ApiResponse) => {
            console.log(res.message, res.body)
            let positionsSelected = res.body
            this.JOService.savePositionsAplyedFrmApi(positionsSelected)
          },
          err => {
            console.error(err)
          }
        )
      }
    } else {
      this.setLastUpdate()
    }
  }

  updateUser() {
    let user: User = this.userService.getUser()
    return this.http.put<ApiResponse>(`${this.httpLink}/user/update/${user.id}`, user)
  }

  getApplications() {
    let user: User = this.userService.getUser()
    return this.http.get<ApiResponse>(`${this.httpLink}/job-application/${user.id}`)

  }

  updateApplications() {
    let user: User = this.userService.getUser()
    const positionsObject = this.JOService.getPositionsAplyed()
    console.log(positionsObject)
    return this.http.post<ApiResponse>(`${this.httpLink}/job-application/${user.id}`, positionsObject)
  }
}