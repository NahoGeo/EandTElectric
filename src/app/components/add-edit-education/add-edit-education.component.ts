import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-add-edit-education',
  templateUrl: './add-edit-education.component.html',
  styleUrls: ['./add-edit-education.component.scss'],
})
export class AddEditEducationComponent implements OnInit {

  @Input() education: Education
  @Output() newEducation = new EventEmitter<Education>()

  constructor() { }

  ngOnInit() {  
  }

  saveChanges() {
    this.newEducation.emit(this.education)
  }

}
