import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Position } from 'src/app/models/position';

@Component({
  selector: 'app-add-edit-position',
  templateUrl: './add-edit-position.component.html',
  styleUrls: ['./add-edit-position.component.scss'],
})
export class AddEditPositionComponent implements OnInit {

  @Input() position: Position
  @Output() newPosition = new EventEmitter<Position>()
  @Output() hide = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {}

  hidePosition() {
    this.hide.emit()
  }

  save() {
    this.newPosition.emit(this.position)
  }

}
