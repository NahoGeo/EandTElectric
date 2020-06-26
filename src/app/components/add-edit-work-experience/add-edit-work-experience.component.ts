import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-work-experience',
  templateUrl: './add-edit-work-experience.component.html',
  styleUrls: ['./add-edit-work-experience.component.scss'],
})
export class AddEditWorkExperienceComponent implements OnInit {

  @Input() workExp: WorkExp
  @Input() workExps: Array<WorkExp>
  @Output() newWorkExp = new EventEmitter<WorkExp>()

  currentSetted: boolean = false

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.showCurrent()
  }

  ionViewWillEnter() {
    this.showCurrent()
  }

  showCurrent() {
    if(this.workExps.length > 0) {
      this.workExps.forEach(workExp => {
        if(workExp.current) {
          if(workExp.id !== this.workExp.id) {
            this.currentSetted = true
          }
        }
      });
    }
  }

  async saveChanges() {
    this.workExp.name = this.workExp.name.trim()
    this.workExp.position = this.workExp.position.trim()
    let errorMessage = ''
    
    let startDate = new Date(this.workExp.startDate)
    let endDate = new Date(this.workExp.endDate)
    let currentDate = new Date()

    if (!this.workExp.name) {
      errorMessage += `<p>Please write the Company's name</p>`
    }
    if (!this.workExp.position) {
      errorMessage += `<p>Please add a position</p>`
    }
    if (startDate > currentDate) {
      errorMessage += `<p>Start date can not be a future date</p>`
    }
    if (!this.workExp.current) {
      if (startDate > endDate) {
        errorMessage += `<p>End date can't be older than start date</p>`
      }
      if (startDate.toDateString() === endDate.toDateString()) {
        errorMessage += `<p>End date can't be equal than start date</p>`
      }
      if (!endDate){
        errorMessage += `<p>If you are not studing this carier any more, plese select an end date, but if you keep studing this carier, check it as current</p>`
      }
      if (endDate > currentDate) {
        errorMessage += `<p>End date can not be a future date</p>`
      }
    }else {
      this.workExp.endDate = ''
    }
    if (!this.workExp.description) {
      errorMessage += `<p>Please describe this position</p>`
    }
    if (errorMessage.length > 0) {
      const alertMessage = await this.alertCtrl.create({
        header: 'Instructions:',
        message: `${errorMessage}`,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
          }]
      })
      return await alertMessage.present()
    }

    this.workExp.startDate = startDate.toDateString()
    this.workExp.endDate = endDate.toDateString()

    this.newWorkExp.emit(this.workExp)
  }
}
