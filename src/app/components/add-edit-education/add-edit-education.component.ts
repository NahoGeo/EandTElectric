import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/app/models/education';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-education',
  templateUrl: './add-edit-education.component.html',
  styleUrls: ['./add-edit-education.component.scss'],
})
export class AddEditEducationComponent implements OnInit {

  @Input() education: Education
  @Input() educations: Array<Education>
  @Output() newEducation = new EventEmitter<Education>()

  currentSetted: boolean = false

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.showCurrent()
  }

  ionViewWillEnter() {
    this.showCurrent()
  }

  showCurrent() {
    if(this.educations.length > 0) {
      this.educations.forEach(education => {
        if(education.current) {
          if(education.id !== this.education.id) {
            this.currentSetted = true
          }
        }
      });
    }
  }

  async saveChanges() {
    this.education.institute = this.education.institute.trim()
    this.education.degree = this.education.degree.trim()
    let errorMessage = ''
    
    let startDate = new Date(this.education.startDate)
    let endDate = new Date(this.education.endDate)
    let currentDate = new Date()
    
    if (!this.education.institute) {
      errorMessage += `<p>Please write the institute's name</p>`
    }
    if (!this.education.degree) {
      errorMessage += `<p>Please write your degree</p>`
    }
    if (startDate > currentDate) {
      errorMessage += `<p>Start date can not be a future date</p>`
    }
    if (!this.education.current) {
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
      this.education.endDate = ''
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
    
    this.education.startDate = startDate.toDateString()
    this.education.endDate = endDate.toDateString()

    this.newEducation.emit(this.education)
  }
}
