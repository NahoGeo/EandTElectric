import { Component, ViewChild } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from 'src/app/services/user.service'
import { DarkModeService } from 'src/app/services/dark-mode.service'
import { AuthenticationService } from './services/authentication.service';
import { AppStateService } from './services/app-state.service';
import { JobOpportunityService } from './services/job-opportunity.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private darkMode: DarkModeService,
    private auth: AuthenticationService,
    private appState: AppStateService,
    private JOService: JobOpportunityService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.userService.setUser()
      this.darkMode.setStatus()
      this.auth.setIfLogInOrOut()
      this.JOService.setPositionsAplyed()
    });
    this.appState.appState()
    this.appState.backButton()
    this.appState.orientationPORTRAIT()
  }
}
