import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Training } from 'src/app/models/training';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-edit-training',
  templateUrl: './add-edit-training.component.html',
  styleUrls: ['./add-edit-training.component.scss'],
})
export class AddEditTrainingComponent implements OnInit {

  @Input() training: Training
  @Output() newTraining = new EventEmitter<Training>()

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async saveChanges() {
    this.training.title = this.training.title.trim()
    this.training.awardedBy = this.training.awardedBy.trim()
    this.training.description = this.training.description.trim()
    let errorMessage = ''

    if (!this.training.title) {
      errorMessage += `<p>Please write the title of the training</p>`
    }
    if (!this.training.awardedBy) {
      errorMessage += `<p>Please write who awarded you this title</p>`
    }
    if (!this.training.description) {
      errorMessage += `<p>Please describe this training</p>`
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

    this.newTraining.emit(this.training)
  }
  
}
