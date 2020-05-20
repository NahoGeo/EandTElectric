import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user: User

  constructor(private userService: UserService, private loadingCtrl: LoadingController) {
  }

  ngOnInit(){
    this.getUser()
  }
  
  getUser() {
    this.user =this.userService.getUser()
  }
  
  ionViewWillEnter() {
    this.getUser()
  }

  /* async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!', role, data);
  } */
}