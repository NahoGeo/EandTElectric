import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { Position } from 'src/app/models/position';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-work-experience',
  templateUrl: './add-edit-work-experience.component.html',
  styleUrls: ['./add-edit-work-experience.component.scss'],
})
export class AddEditWorkExperienceComponent implements OnInit {

  @Input() workExp: WorkExp
  @Output() newWorkExp = new EventEmitter<WorkExp>()
  @Output() newPosition = new EventEmitter<Position>()

  addPosition: boolean = true

  showPositionForm = false

  position: Position = {
    id: '',
    position: '',
    startDate: new Date().toDateString(),
    endDate: new Date().toDateString(),
    current: false,
    description: ''
  }

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.showNote()
  }
  
  async showNote() {
    const alert = await this.alertCtrl.create({
      header: 'Notes:',
      message: `<p>Please add your work experience from newer to older, at the same way with your positions in each experience</p>
                <p>Only a maximun of five fields</p>`,
      buttons: ['OK']
    });

    await alert.present();
  }

  changeAddPosition() {
    if (this.workExp.positions.length >= 4) {
      this.addPosition = false
    }else{
      if(this.showPositionForm) {
        this.addPosition = false
      }else{
        this.addPosition = true
      }
    }
  }

  editPosition(id: string) {
    for(let i = 0; i < this.workExp.positions.length; i++) {
      if(this.workExp.positions[i].id === id) {
        this.position = this.workExp.positions[i]
        this.showPositionForm = true
        this.changeAddPosition()
      }
    }
  }

  PositionShowHide() {
    if(this.showPositionForm){
      this.showPositionForm = false
      this.changeAddPosition()
    }else{
      this.position = {
        id: '',
        position: '',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        current: false,
        description: ''
      }
      this.showPositionForm = true
      this.changeAddPosition()
    }
  }

  async savePosition(data: Position) {
    data.position = data.position.trim()
    data.description = data.description.trim()
    let errorMessage = ''

    if (!data.position) {
      errorMessage += `<p>Please write a position's name</p>`
    }
    if (!data.current) {
      if (data.startDate >= data.endDate) {
        errorMessage += `<p>End date can't be older or equal than start date</p>
                         <p>Note: If start date is equal to current date and end date is a future date, they both will be considerate as a same date.</p>`
      }
    }else {
      delete data.endDate
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

    if(this.workExp.id === '') {
        if(data.id !== '') {
          this.workExp.positions.forEach(position => {
            if(position.id === data.id) {
              position.position = data.position
              position.startDate = data.startDate
              position.current = data.current
              position.endDate = data.endDate
              position.description = data.description
            }
          });
        }else{
          data.id = `${this.workExp.positions.length + 1}`
          this.workExp.positions.push(data)
        }
    }else{
      this.newPosition.emit(data)
    }
    this.showPositionForm = false
    this.changeAddPosition()
  }

  async saveChanges() {
    this.workExp.name = this.workExp.name.trim()
    let errorMessage = ''

    if (!this.workExp.name) {
      errorMessage += `<p>Please write the Company's name</p>`
    }
    if (this.workExp.positions.length === 0) {
      errorMessage += `<p>Please add a position</p>`
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

    this.newWorkExp.emit(this.workExp)
    setTimeout(() => {
      this.router.navigate(['/work-experience'])
    }, 500);
  }
}
