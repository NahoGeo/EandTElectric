import { Injectable } from '@angular/core';
import { WireSize } from '../models/wire-and-conduit.model';

@Injectable({
  providedIn: 'root'
})
export class WireAndConduitService {

  private wireSizes: WireSize[] = [
    {
      id : "1",
      val : "#14"
    },{
      id : "2",
      val : "#12"
    },{
      id : "3",
      val : "#10"
    },{
      id : "4",
      val : "#8"
    },{
      id : "5",
      val : "#6"
    },{
      id : "6",
      val : "#4"
    },{
      id : "7",
      val : "#3"
    },{
      id : "8",
      val : "#2"
    },{
      id : "9",
      val : "#1"
    },{
      id : "10",
      val : "1/0"
    },{
      id : "11",
      val : "2/0"
    },{
      id : "12",
      val : "3/0"
    },{
      id : "13",
      val : "4/0"
    },{
      id : "14",
      val : "250"
    },{
      id : "15",
      val : "300"
    },{
      id : "16",
      val : "350"
    },{
      id : "17",
      val : "400"
    },{
      id : "18",
      val : "500"
    },{
      id : "19",
      val : "600"
    },{
      id : "20",
      val : "700"
    },{
      id : "21",
      val : "750"
    },{
      id : "22",
      val : "800"
    },{
      id : "23",
      val : "900"
    },{
      id : "24",
      val : "1000"
    }
  ]

  notes = [
    'Ampacity of conductors based on 30 C ambient.',
    'Conduit sizes for aluminum based on the use of compact conductors, where a major portion of the load consists of nonlinear loads, the neutral is considered to be current carrying.',
    'On 4-wire applications, derate the ampacity to 80% per note 8 and note 10© of the NEC ampacity tables.'
  ]

  private wireType = [
    'COPPER',
    'ALUMINUM'
  ]

  constructor() { }

  getWireSizes() {
    return [...this.wireSizes]
  }

  getWireTypes() {
    return [...this.wireType]
  }

  getNotes() {
    return [...this.notes]
  }

}
