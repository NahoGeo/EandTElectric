import { Injectable } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

const { Network } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class NetworkConnectionService {

  networkStatus: NetworkStatus
  networkListener: PluginListenerHandle

  constructor(private alertCtrl: AlertController, private router: Router) {
  }

  async connectionDetector() {
    this.networkListener = Network.addListener(
      'networkStatusChange',
      (status) => {
      this.networkStatus = status
    });
  
    this.networkStatus = await Network.getStatus()
    return this.networkStatus.connected
  }

  async AlertSatusConection() {
    const alertMessage = await this.alertCtrl.create({
      
      header: 'Alert',
      message: "You need to be connected to get access",
      buttons: [
      {
        text: 'OK',
        role: 'cancel'
      }
    ]
    })

    return await alertMessage.present()
  }
}
