import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { set, get } from 'src/app/services/storage';

@Component({
  selector: 'app-job-oportunity',
  templateUrl: './job-oportunity.page.html',
  styleUrls: ['./job-oportunity.page.scss'],
})
export class JobOportunityPage implements OnInit {

  alldisabled: boolean

  options = [
    {
      option: 'Apprentice 1st year',
      icon: 'business',
      path: ''
    },
    {
      option: 'Apprentice 2nd year',
      icon: 'business',
      path: ''
    },
    {
      option: 'Apprentice 3th year',
      icon: 'business',
      path: ''
    },
    {
      option: 'Apprentice 4th year',
      icon: 'business',
      path: ''
    },
    {
      option: 'Journeyman',
      icon: 'business',
      path: ''
    },
    {
      option: 'Master Electrician',
      icon: 'business',
      path: ''
    },
    {
      option: 'Electrician Estimator/Proyect Manager',
      icon: 'business',
      path: ''
    }
  ]

  constructor(private alertCtrl: AlertController) {
    this.setInProcess()
  }

  ngOnInit() {
  }
  
  async setInProcess() {
    const value = await get('inProcess')
    
    if (!value) {
      this.showNote()
      this.setAllDisableOff()
    }else {
      const position = await get('positionSelected')
      set('inProcess', true)
      this.alldisabled = true
      this.applicationInProcess(position)
    }
  }

  setAllDisableOn(position: string) {
    set('inProcess', true)
    set('positionSelected', `${position}`)
    this.alldisabled = true
  }

  setAllDisableOff() {
    set('inProcess', false)
    this.alldisabled = false
  }

  async showNote() {
    let note = await this.alertCtrl.create({
      header: 'Note:',
      message: 'We present a list of position options to you.<br>You can select only one of them.',
      buttons: [{
        text: 'ok',
        role: 'cancel'
      }]
    })
    return note.present()
  }

  blockSelectOption(position: string) {
    this.selectionMessage(position)
    this.setAllDisableOn(position)
  }

  async selectionMessage(position: string) {
    let note = await this.alertCtrl.create({
      header: 'What is next?:',
      message: `We will send your profile to our HHRR department with the position "${position}" that you selected.`,
      buttons: [{
        text: 'ok',
        role: 'cancel'
      }]
    })
    return note.present()
  }

  async applicationInProcess(position) {
    let note = await this.alertCtrl.create({
      header: 'What is next?:',
      message: `You have already applied for the position "${position}"<br>Please wait and we will contact you as soon as posible.`,
      buttons: [{
        text: 'ok',
        role: 'cancel'
      }]
    })
    return note.present()
  }

}
