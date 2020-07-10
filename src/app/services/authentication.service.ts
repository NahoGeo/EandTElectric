import { Injectable } from '@angular/core';
import { set, get } from './storage'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //http://localhost:3000/api/sign-up/confirm-email
  private httpLink = 'http://localhost:3000/api'
  private isLogIn: boolean

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private http: HttpClient
    ) {
  }

  confirmEmail(email) {
    return this.http.post(`${this.httpLink}/sign-up/confirm-email`, {email})
  }

  signUp(email, password) {
    return this.http.post(`${this.httpLink}/sign-up`,{email, password})
  }

  signIn(email, password) {
    return this.http.post(`${this.httpLink}/sign-in`,{email, password})
  }

  restorePasswordSendEmail(email) {
    return this.http.post(`${this.httpLink}/restore-password/confirm-email`, {email})
  }

  restorePassword(email, password) {
    return this.http.post(`${this.httpLink}/restore-password`,{email, password})
  }

  /**
   * this function is called when opening the app
   * sets sign status in the storage
   */
  async setIfLogInOrOut() {
    const auth = await get('auth');
    if (!auth) {
      this.setLogOut()
    }else {
      this.setLogIn()
    }
  }

  /**
   * sets the isLogIn variable to false and set the status in the storage
   */
  setLogOut() {
    set('auth', false)
    this.isLogIn = false
  }

  /**
   * change the isLogIn variable to true and set the status in the storage
   */
  setLogIn() {
    set('auth', true)
    this.isLogIn = true
  }

  /**
   * get the status from the storage and sets it to the isLogIn variable
   */
  private async logged() {
    this.isLogIn = await get('auth')
  }

  /**
   * return the sign status
   * @returns boolean
   */
  isLogged() {
    this.logged()
    return this.isLogIn
  }
}
