import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: boolean = false

  constructor() {
    this.setStatus()
    this.getStatus().then(
      value => {
        this.darkMode = value
      }
    )
    this.setDarkMode()
  }

  async setStatus() {
    const { value } = await Storage.get({key:'darkMode'})
    
    if (!value) {
      this.saveStatus()
    }
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

  async saveStatus() {
    await Storage.set({key: 'darkMode', value: `${this.darkMode}`})
  }

  async getStatus() {
    let status: boolean
    let {value} = await Storage.get({key:'darkMode'})

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
