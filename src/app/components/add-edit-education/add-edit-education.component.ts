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
  @Output() newEducation = new EventEmitter<Education>()

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.showNote()
  }

  async showNote() {
    const alert = await this.alertCtrl.create({
      header: 'Notes:',
      message: `<p>Please add your education history from newer to older</p>
                <p>Only a maximun of five fields</p>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async saveChanges() {
    this.education.institute = this.education.institute.trim()
    this.education.degree = this.education.degree.trim()
    let errorMessage = ''

    if (!this.education.institute) {
      errorMessage += `<p>Please write the institute's name</p>`
    }
    if (!this.education.degree) {
      errorMessage += `<p>Please write your degree</p>`
    }
    if (!this.education.current) {
      if (this.education.startDate >= this.education.endDate) {
        errorMessage += `<p>End date can't be older or equal than start date</p>
                         <p>Note: If start date is equal to current date and end date is a future date, they both will be considerate as a same date.</p>`
      }
    }else {
      delete this.education.endDate
    }
    if (errorMessage.length > 0) {
      const alertMessage = await this.alertCtrl.create({
        header: 'Sign up Error',
        message: `${errorMessage}`,
        buttons: [{
          text: 'Ok',
          role: 'cancel'
          }]
      })
      return await alertMessage.present()
    }

    this.newEducation.emit(this.education)
  }

}
