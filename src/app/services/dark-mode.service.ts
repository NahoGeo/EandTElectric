import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  darkMode: boolean = false;

  constructor() {
    localStorage.setItem('darkMode', `${this.darkMode}`)
    /* this.setStatus() */
    this.darkMode = this.getStatus()
  }

  /* setStatus() {
    if (!localStorage.getItem('darkMode')) {
      localStorage.setItem('darkMode', `${this.darkMode}`)
    }
  } */

  getStatus() {
    let status = ()=>{
      if (localStorage.getItem('darkMode') === 'false') {
        return false
      }else {
        return true
      }
    }

    return status()
  }

  changeModeSwitch() {
    try {
      switch (localStorage.getItem('darkMode')) {
        case 'false':
          localStorage.setItem('darkMode', 'true')
          document.body.classList.add('dark')
          break

        case 'true':
          localStorage.setItem('darkMode', 'false')
          document.body.classList.remove('dark')
          break

        default:
          console.log('Error: ' + localStorage.getItem('darkMode'))
          break;
      }
      return this.getStatus()
    } catch {
      alert('Dark Mode Fail')
    }
  }
}
