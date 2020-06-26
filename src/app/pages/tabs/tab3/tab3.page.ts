import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  darkMode: boolean

  constructor(private router: Router, private darkOption: DarkModeService, private auth: AuthenticationService) {
  }

  ngOnInit(){
  }

  getStatus() {
    this.darkMode = this.darkOption.getStatus()
  }

  ionViewWillEnter() {
    this.getStatus()
  }

  logOut() {
    this.auth.setLogOut()
    this.router.navigate(['login'])
  }

  changeDarkMode() {
    this.darkMode = this.darkOption.changeModeSwitch()
  }

}
