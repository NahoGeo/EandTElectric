import { Injectable } from '@angular/core';
import { get, set } from 'src/app/services/storage'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: boolean

  constructor() {}

  /**
   * this function is called when opening the app
   * sets the dark mode in the storage
   */
  async setStatus() {
    const value = await get('darkMode')
    
    if (value) {
      this.setDarkModeOn()
    }else {
      this.setDarkModeOff()
    }
  }

  /**
   * sets the dark mode status to true
   * and adds the dark propierty to the body tag
   */
  private setDarkModeOn() {
    set('darkMode', true)
    this.darkMode = true
    document.body.classList.add('dark')
  }

  /**
   * sets the dark mode status to false
   * and removes the dark propierty from the body tag
   */
  private setDarkModeOff() {
    set('darkMode', false)
    this.darkMode = false
    document.body.classList.remove('dark')
  }

  /**
   * @returns the dark mode status
   */
  getStatus() {
    return this.darkMode
  }

  /**
   * change the dark mode status
   * @returns the new dark mode status
   */
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