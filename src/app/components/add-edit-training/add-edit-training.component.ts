import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-add-edit-training',
  templateUrl: './add-edit-training.component.html',
  styleUrls: ['./add-edit-training.component.scss'],
})
export class AddEditTrainingComponent implements OnInit {

  @Input() training: Training
  @Output() newTraining = new EventEmitter<Training>()

  constructor() { }

  ngOnInit() {
  }

  saveChanges() {
    this.newTraining.emit(this.training)
  }
  
}
