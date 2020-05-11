import { Component, OnInit } from '@angular/core';
import { MotorCalculatorService } from '../../services/motor-calculator.service';

@Component({
  selector: 'app-motor-calculator',
  templateUrl: './motor-calculator.page.html',
  styleUrls: ['./motor-calculator.page.scss'],
})
export class MotorCalculatorPage implements OnInit {

  voltages=[]
  threeHorses=[]
  singleHorses=[]
  threePhaseValues = []

  voltageVal:string
  threePhaseHorse:string
  singlePhaseHorse:string

  threePhase: boolean = false
  singlePhase: boolean = false

  constructor(private motorService: MotorCalculatorService) { }

  ngOnInit() {
    this.voltages = this.motorService.getVoltages()
    this.threeHorses = this.motorService.getThreeHorses()
    this.singleHorses = this.motorService.getsingleHorses()
  }

  showThree() {
    switch (this.threePhase){
      case false:
        this.threePhase = true
        if (this.singlePhase) {
          this.singlePhase = false
        }
        break
      case true:
        this.threePhase = false
        break
      default:
        alert('error')
        break
    }
  }

  showSingle() {
    switch (this.singlePhase){
      case false:
         this.singlePhase= true
        if (this.threePhase) {
          this.threePhase = false
        }
        break
      case true:
        this.singlePhase = false
        break
      default:
        alert('error')
        break
    }
  }

  loadThreePhaseValues() {
    if(this.voltageVal && this.threePhaseHorse) {
      this.threePhaseValues = this.motorService.getThreePhaseValues(`${this.voltageVal}${this.threePhaseHorse}`)
    }
  }
}