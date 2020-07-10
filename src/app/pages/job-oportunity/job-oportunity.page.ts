import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { set, get } from 'src/app/services/storage';
import { JobOpportunityService } from 'src/app/services/job-opportunity.service';

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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Apprentice 2nd year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Apprentice 3th year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Apprentice 4th year',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Journeyman',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Master Electrician',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Electrician Estimator',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    },
    {
      option: 'Proyect Manager',
      icon: 'business',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis incidunt voluptatum libero quo recusandae quaerat eligendi error laborum obcaecati facilis, qui eaque velit similique commodi veritatis laudantium hic officia asperiores?',
      selected: false
    }
  ]

  positionsObject = {
    positionsSelected: []
  }

  constructor(
    private alertCtrl: AlertController,
    private JOService: JobOpportunityService
    ) {
  }

  ngOnInit() {
    this.showNote()
    this.getPositionsAplyed()
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

  getPositionsAplyed() {
    let positionsObject = this.JOService.getPositionsAplyed()
    this.positionsObject = positionsObject
    for(let positionSelect of this.positionsObject.positionsSelected) {
      for(let option of this.options) {
        if(positionSelect.position === option.option) {
          option.selected = true
        }
      }
    }
  }

  async positionSelected(position: string) {
    let description: string
    this.options.forEach(option => {
      if (position === option.option) {
        description = option.description
      }
    });
    let note = await this.alertCtrl.create({
      header: `${position}`,
      message: `Description: <br>${description}`,
      backdropDismiss: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Apply',
        handler: ()=> {
          this.apply(position)
        }
      }]
    })
    return note.present()
  }

  async apply(position: string) {
    this.positionsObject.positionsSelected.push({position})
    this.JOService.updatePositions(this.positionsObject)
    this.selectionMessage(position)
  }

  async selectionMessage(position: string) {
    let note = await this.alertCtrl.create({
      header: 'What is next?:',
      message: `We will send your profile to our HHRR department with the position "${position}" that you selected.<br>We will contact you as soon as posible`,
      buttons: [{
        text: 'ok',
        handler: ()=> {
          this.getPositionsAplyed()
        }
      }]
    })
    return note.present()
  }

}
