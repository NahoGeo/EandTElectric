import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private alertCtrl: AlertController) { }

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
    let errorMessage = ''

    if (!this.workExp.name) {
      errorMessage += `<p>Please write the Company's name</p>`
    }
    if (!this.workExp.position) {
      errorMessage += `<p>Please add a position</p>`
    }
    if (!this.workExp.current) {
      if (this.workExp.startDate >= this.workExp.endDate) {
        errorMessage += `<p>End date can't be older or equal than start date</p>
                         <p>Note: If start date is equal to current date and end date is a future date, they both will be considerate as a same date.</p>`
      }
      if (!this.workExp.endDate){
        errorMessage += `<p>If you are not studing this carier any more, plese select an end date, but if you keep studing this carier, check it as current</p>`
      }
    }else {
      delete this.workExp.endDate
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

    this.newWorkExp.emit(this.workExp)
    setTimeout(() => {
      this.router.navigate(['/work-experience'])
    }, 500);
  }
}
