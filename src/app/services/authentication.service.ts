import { Injectable } from '@angular/core';
import { set, get } from './storage'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private isLogIn: boolean

  constructor() {
  }

  async setIfLogInOrOut() {
    const auth = await get('auth');
    if (!auth) {
      this.setLogOut()
    }else {
      this.setLogIn()
    }
  }

  setLogOut() {
    set('auth', false)
    this.isLogIn = false
  }

  setLogIn() {
    set('auth', true)
    this.isLogIn = true
  }

  private async logged() {
    this.isLogIn = await get('auth')
  }

  isLogged() {
    this.logged()
    return this.isLogIn
  }
}
