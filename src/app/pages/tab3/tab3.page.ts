import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  darkMode: boolean

  constructor(private router: Router, private darkOption: DarkModeService) {
    let status = darkOption.getStatus()
    this.darkMode = status
  }

  logOut() {
    this.router.navigate(['login'])
  }

  changeDarkMode() {
    this.darkMode = this.darkOption.changeModeSwitch()
  }

}
