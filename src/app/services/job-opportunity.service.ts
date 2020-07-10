import { Injectable } from '@angular/core';
import { get, set } from './storage';

@Injectable({
  providedIn: 'root'
})
export class JobOpportunityService {

  private positionsObject: PositionsObject = {
    positionsSelected: []
  }

  constructor() { }

  async setPositionsAplyed() {
    let positionsObject = await get('positionsObject')
    if(positionsObject) {
      this.setPositions()
    } else {
      this.savePositionsAplyed()
    }
  }

  async setPositions() {
    this.positionsObject = await get('positionsObject')
  }

  savePositionsAplyed() {
    set('positionsObject', this.positionsObject)
  }

  savePositionsAplyedFrmApi(positionsSelected) {
    this.positionsObject.positionsSelected = positionsSelected
    set('positionsObject', this.positionsObject)
  }
  
  getPositionsAplyed() {
    return {...this.positionsObject}
  }

  updatePositions(positions) {
    this.positionsObject = positions
    this.savePositionsAplyed()
  }
}

interface PositionsObject {
  positionsSelected: Array<object>
}
