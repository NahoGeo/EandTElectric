import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkExp } from 'src/app/models/work-exp.model';
import { Position } from 'src/app/models/position';
import { Router } from '@angular/router';

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
    startDate: new Date('').toDateString(),
    endDate: new Date('').toDateString(),
    current: false,
    description: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
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
        startDate: new Date('').toDateString(),
        endDate: new Date('').toDateString(),
        current: false,
        description: ''
      }
      this.showPositionForm = true
      this.changeAddPosition()
    }
  }

  savePosition(data: Position) {
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
          /* this.workExp.positions.find(position => {
            if(position.id === data.id) {
              position.position = data.position
              position.startDate = data.startDate
              position.current = data.current
              position.endDate = data.endDate
              position.description = data.description
            }
          }) */
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

  saveChanges() {
    this.newWorkExp.emit(this.workExp)
    setTimeout(() => {
      this.router.navigate(['/work-experience'])
    }, 500);
  }
}
