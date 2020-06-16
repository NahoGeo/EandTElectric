import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-toolbox',
  templateUrl: './e-toolbox.page.html',
  styleUrls: ['./e-toolbox.page.scss'],
})
export class EToolboxPage implements OnInit {

  options = [
    {
      title: 'Motor Calculator',
      path: 'motor-calculator',
      img: '../../assets/img/motor-electrico.png'
    },
    {
      title: 'Wire & Conduit',
      path: 'wire-and-conduit',
      img: '../../assets/img/wires-and-conduit.png'
    },
    {
      title: 'Transformer',
      path: 'transformer',
      img: '../../assets/img/electric-transformer.png'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
