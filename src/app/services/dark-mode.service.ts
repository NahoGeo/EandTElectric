import { Injectable } from '@angular/core';
import { get, set } from 'src/app/services/storage'

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: boolean = false

  constructor() {
  }

  async setStatus() {
    const value = await get('darkMode')
    
    if (!value) {
      this.saveStatus()
    }

    this.darkMode = await this.getStatus()

    this.setDarkMode()
  }

  setDarkMode() {
    this.getStatus().then(
      status => {
        if (status === true) {
          document.body.classList.add('dark')
        }else {
          document.body.classList.remove('dark')
        }
      }
    )
  }

  saveStatus() {
    set('darkMode', `${this.darkMode}`)
  }

  async getStatus() {
    let status: boolean
    let value = await get('darkMode')

    if ( value == 'true') {
      status = true
    }
    if ( value == 'false') {
      status = false
    }
    
    return status
  }

  async changeModeSwitch() {
    return this.getStatus().then(
      async status=>{
        switch (status) {
          case false:
            document.body.classList.add('dark')
            this.darkMode = true
            this.saveStatus()
            break
    
          case true:
            document.body.classList.remove('dark')
            this.darkMode = false
            this.saveStatus()
            break
    
          default:
            console.log('Error: ' + status)
            break;
        }
        return await this.getStatus()
      }
    )
  }
}
