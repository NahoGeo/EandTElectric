import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  darkMode: boolean
  isLogIn: boolean

  constructor(private router: Router, private darkOption: DarkModeService, private auth: AuthenticationService) {
    this.getStatus()
    this.isLogIn = this.auth.isLogged()
  }

  getStatus() {
    this.darkMode = this.darkOption.getStatus()
  }

  ionViewWillEnter() {
    this.isLogIn = this.auth.isLogged()
  }

  logIn() {
    this.router.navigate(['login'])
  }

  logOut() {
    this.auth.setLogOut()
    this.router.navigate(['login'])
  }

  changeDarkMode() {
    this.darkMode = this.darkOption.changeModeSwitch()
    console.log(this.darkMode)
  }

}
