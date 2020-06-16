import { Component, OnInit } from '@angular/core';
import { TransformerService } from 'src/app/services/transformer.service';

@Component({
  selector: 'app-transformer',
  templateUrl: './transformer.page.html',
  styleUrls: ['./transformer.page.scss'],
})
export class TransformerPage implements OnInit {

  threeVoltages = []
  singleVoltages = []
  threePhaseValues: {}
  singlePhaseValues: {}

  threeVoltageVal:string
  singleVoltageVal:string

  threePhase: boolean = false
  singlePhase: boolean = false

  constructor(private transforService: TransformerService) { }

  ngOnInit() {
    this.threeVoltages = this.transforService.getVoltages('three')
    this.singleVoltages = this.transforService.getVoltages('single')
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
        console.log('error')
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

  loadData(phase: string) {
    if(phase === 'three') {
      this.threePhaseValues = this.transforService.getData(phase, `${this.threeVoltageVal}`)
    }
    if(phase === 'single') {
      this.singlePhaseValues = this.transforService.getData(phase, `${this.singleVoltageVal}`)
    }
  }
}