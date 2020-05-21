import { Injectable } from '@angular/core';
import { get, set } from 'src/app/services/storage'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: boolean

  constructor() {}

  async setStatus() {
    const value = await get('darkMode')
    
    if (!value) {
      this.setDarkModeOff()
    }else {
      this.setDarkModeOn()
    }
  }

  setDarkModeOn() {
    set('darkMode', true)
    this.darkMode = true
    document.body.classList.add('dark')
  }

  setDarkModeOff() {
    set('darkMode', false)
    this.darkMode = false
    document.body.classList.remove('dark')
  }

  getStatus() {
    return this.darkMode
  }

  changeModeSwitch() {

    switch (this.darkMode) {
      case false:
        this.setDarkModeOn()
        break

      case true:
        this.setDarkModeOff()
        break

      default:
        console.log('Error: ' + this.darkMode)
        break;
    }
    return this.darkMode
  }
}