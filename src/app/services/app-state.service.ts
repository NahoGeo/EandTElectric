import { Injectable, ViewChild } from '@angular/core';
import { IonRouterOutlet, AlertController, LoadingController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'
import { Plugins, AppState, Motion } from '@capacitor/core';
import { SyncronizationService } from './syncronization.service';
const { App } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  @ViewChild(IonRouterOutlet, {static: false}) private routerOutlet: IonRouterOutlet

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private screenOrientation: ScreenOrientation,
    private plt: Platform,
    private syncDB: SyncronizationService
  ) { }

  appState() {
    App.addListener('appStateChange', async (state: AppState) => {
      let waiter = await this.loadingCtrl.create({
        backdropDismiss: false,
        message: 'Waiting',
        duration: 2000
      })
      if (state.isActive) {
        this.syncDB.updateUserPerDay()
        return waiter.present()
      }
    })
  }

  closeApp() {
    App.exitApp()
  }

  backButton() {
    App.addListener('backButton', async ()=> {
      let counter = 0
      if(this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop()
      } else {
        if (counter === 0) {
          if(this.router.url === '/tabs/tab1' || this.router.url === '/tabs/tab2' || this.router.url === '/tabs/tab3' || this.router.url === '/login') {
            counter ++
            const outAlert = await this.alertCtrl.create({
              header: 'Exit',
              message: 'Do you really want to close the app?',
              backdropDismiss: false,
              buttons: [{
                text: 'Cancel',
                role: 'cancel'
              },{
                text: 'Yes',
                handler: () =>{
                  this.closeApp()
                }
              }]
            })
            return outAlert.present()
          }
        }
      }
    })
  }

  orientationPORTRAIT() {
    if(this.plt.is('hybrid')){
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT)
    }
  }
}
