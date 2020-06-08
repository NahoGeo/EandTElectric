import { Injectable } from '@angular/core';
import { Plugins, AppState, AppUrlOpen } from '@capacitor/core';

const { App } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  appState() {
    App.addListener('appStateChange', (state: AppState) => {
      console.log(state.isActive)
    });
  }

  backButton() {
    App.addListener('backButton', (data: AppUrlOpen)=> {
      console.log(data.url);
    })
  }
}
