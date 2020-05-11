import { Component, OnInit } from '@angular/core';
import { WireAndConduitService } from '../../services/wire-and-conduit.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-wire-and-conduit',
  templateUrl: './wire-and-conduit.page.html',
  styleUrls: ['./wire-and-conduit.page.scss'],
})
export class WireAndConduitPage implements OnInit {

  wireSizes = []
  wireTypes = []
  notes = []
  
  constructor(private wireService: WireAndConduitService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.wireSizes = this.wireService.getWireSizes()
    this.wireTypes = this.wireService.getWireTypes()
    this.notes = this.wireService.getNotes()
    this.showNotes()
  }

  async showNotes() {

    let note = ()=>{
      let note = ''
      for(let i = 0; i < this.notes.length; i++) {
        note += `<p>-${this.notes[i]}</p>`
      }
      return note
    }

    const alert = await this.alertCtrl.create({
      header: 'Notes:',
      message: `${note()}`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
