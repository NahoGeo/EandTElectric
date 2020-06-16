import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { set, get } from 'src/app/services/storage';

@Component({
  selector: 'app-job-oportunity',
  templateUrl: './job-oportunity.page.html',
  styleUrls: ['./job-oportunity.page.scss'],
})
export class JobOportunityPage implements OnInit {

  options = [
    {
      option: 'Apprentice 1st year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Apprentice 2nd year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Apprentice 3th year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Apprentice 4th year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Journeyman',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Master Electrician',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Electrician Estimator',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    },
    {
      option: 'Proyect Manager',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?'
    }
  ]

  positionsSelected: string[] = []

  constructor(private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.showNote()
  }

  async showNote() {
    let note = await this.alertCtrl.create({
      header: 'Note:',
      message: 'We present a list of position options to you.<br>You can apply to many positions as you want only once.',
      backdropDismiss: false,
      buttons: [{
        text: 'ok',
        role: 'cancel'
      }]
    })
    return note.present()
  }

  async positionSelected(positionaplyed: string) {
    let description: string
    this.options.forEach(option => {
      if (positionaplyed === option.option) {
        description = option.description
      }
    });
    let note = await this.alertCtrl.create({
      header: `${positionaplyed}`,
      message: `Description: <br>${description}`,
      backdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Apply',
        handler: ()=> {
          this.positionApplication(positionaplyed)
        }
      }]
    })
    return note.present()
  }

  async positionApplication(positionaplyed: string) {
    let positions = await get('positionsSelected')
    if(positions) {
      let positionAlreadyExist: string = ''
      positions.forEach((position: string) => {
        if(positionaplyed === position) {
          positionAlreadyExist = position
        }
      })
      if(positionAlreadyExist){
      this.applicationInProcess(positionAlreadyExist)
      }else{
        this.apply(positionaplyed)
      }
    }
    if(!positions) {
      this.apply(positionaplyed)
    }
  }

  apply(positionaplyed: string) {
    this.positionsSelected.push(positionaplyed)
    set('positionsSelected', this.positionsSelected)
    this.selectionMessage(positionaplyed)
  }

  async selectionMessage(position: string) {
    let note = await this.alertCtrl.create({
      header: 'What is next?:',
      message: `We will send your profile to our HHRR department with the position "${position}" that you selected.<br>We will contact you as soon as posible`,
      buttons: [{
        text: 'ok',
        role: 'cancel'
      }]
    })
    return note.present()
  }

  async applicationInProcess(position: string) {
    let note = await this.alertCtrl.create({
      header: 'What is next?:',
      message: `You have already applied for the position "${position}"<br>Please wait and we will contact you as soon as posible.`,
      buttons: [{
        text: 'ok',
        role: 'cancel'
      }]
    })
    return note.present()
  }

}
