import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Education } from '../models/education';
import { Training } from '../models/training';
import { Position } from '../models/position';
import { WorkExp } from '../models/work-exp.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User= {
    profileImage: 'https://media-exp1.licdn.com/dms/image/C5603AQHhwWLkhiUPcA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=nohSlBQ9Qd93Y8XxQTaFA_1ADJpcm_Ms6IMwzMmJzh4',
    firstName: 'Oscar',
    lastName: 'Bonilla',
    email: 'oscargbc2012@gmail.com',
    phoneNumber: '',
    celphoneNumber: '32502753',
    address: {
      street: '8 avenida',
      city: 'San Pedro Sula',
      state: 'Cortes',
      zipCode: '21101',
      country: 'Honduras'
    },
    educations: [
      {
        id: '1',
        institute:'Ceutec',
        startDate: new Date('01/17/2019').toDateString(),
        endDate: new Date().toDateString(),
        degree: 'Diseño y Desarrollo Web',
        current: true
      },
      {
        id: '2',
        institute: 'INTUR',
        startDate: new Date('02/16/2011').toDateString(),
        endDate: new Date('11/15/2011').toDateString(),
        degree: 'Bachiller en Ciencias y Letras',
        current: false
      }
    ],
    workExps: [
      {
        id: '1',
        name: 'Engineer and Sistems of America',
        positions: [
          {
            id: '1',
            position: 'Web Developer',
            startDate: new Date('04/20/2020').toDateString(),
            endDate: new Date('').toDateString(),
            description: 'Free Lancer Developer',
            current: true
          }
        ]
      },
      {
        id: '2',
        name: 'Marcas Mundiales de Honduras',
        positions: [
          {
            id: '1',
            position: 'Ejecutivo de Cuentas y Logistica',
            startDate: new Date('06/20/2019').toDateString(),
            endDate: new Date('08/30/2019').toDateString(),
            description: 'Reporte de Ventas y Cobros',
            current: false
          }
        ]
      }
    ],
    trainings: [
      {
        id: '1',
        title: 'let\'s git good',
        awardedBy: 'Centro Universitario tecnologico',
        recognitionDate: new Date('03/13/2020').toDateString(),
        description: ''
      },
      {
        id: '2',
        title: 'Dedicate a ser mejor',
        awardedBy: 'Hub de emprendimiento de la Universidad Tecnologica Centroamericana',
        recognitionDate: new Date('11/14/2019').toDateString(),
        description: ''
      }
    ]
  }

  constructor() { }

  private oldId: number

  private lastId(data: any) {
    for (let i = 0; i < data.length; i++) {
      if (i == data.length - 1) {
        this.oldId= Number(data[i].id)
      }
    }
  }

  private id() {
    return this.oldId + 1
  }

  getUser() {
    return this.user
  }

  getEducationById(id: string) {
    return this.user.educations.find(education => {return education.id === id})
  }

  getTrainingById(id: string) {
    return this.user.trainings.find(training => {return training.id === id})
  }

  getWorkExpById(id: string) {
    return this.user.workExps.find(workExp => {return workExp.id === id})
  }

  editUserProfile(data: any) {
    this.user.firstName = data.firstName
    this.user.lastName = data.lastName
    this.user.email = data.email
    this.user.phoneNumber = data.phoneNumber
    this.user.celphoneNumber = data.celphoneNumber
    this.user.address.street = data.address.street
    this.user.address.city = data.address.city
    this.user.address.state = data.address.state
    this.user.address.zipCode = data.address.zipCode
    this.user.address.country = data.address.country
  }

  editEducation(id: string, data: Education) {

    this.user.educations.forEach(education => {
      if(education.id === id){
        education.institute = data.institute
        education.degree = data.degree
        education.startDate = data.startDate
        education.endDate = data.endDate
        education.current = data.current
      }
    })
  }

  editTraining(id: string, data: Training) {
    this.user.trainings.forEach(training => {
      if(training.id === id){
        training.title = data.title
        training.awardedBy = data.awardedBy
        training.recognitionDate = data.recognitionDate
        training.description = data.description
      }
    })
  }

  editWorkExp(id: string, data: WorkExp) {
    this.user.workExps.forEach(workExp => {
      if(workExp.id === id){
        workExp.name = data.name
      }
    })
  }

  editPosition(idWE: string, idP: string, data: Position) {
    this.user.workExps.forEach(workExp => {
      if(workExp.id === idWE) {
        workExp.positions.forEach(position => {
          if(position.id === idP) {
            position.position = data.position
            position.startDate = data.startDate
            position.current = data.current
            position.endDate = data.endDate
            position.description = data.description
          }
        })
      }
    })
  }

  addEducation(data: Education) {

    this.lastId(this.user.educations)

    setTimeout(()=>{
      this.user.educations.push(
        {
          id: `${this.id()}`,
          institute: data.institute,
          degree: data.degree,
          startDate: data.startDate,
          endDate: data.endDate,
          current: data.current
        }
      )
    }, 300)
  }

  addTraining(data: Training) {

    this.lastId(this.user.trainings)

    setTimeout(()=>{
      this.user.trainings.push(
        {
          id: `${this.id()}`,
          title: data.title,
          awardedBy: data.awardedBy,
          recognitionDate: data.recognitionDate,
          description: data.description
        }
      )
    }, 300)
  }

  addWorkExp(data: WorkExp) {
    
    this.lastId(this.user.workExps)

    setTimeout(()=>{
      this.user.workExps.push(
        {
          id: `${this.id()}`,
          name: data.name,
          positions: data.positions
        }
      )
    }, 300)
  }

  addPosition(id:string, data: Position) {
    for(let i = 0; i < this.user.workExps.length; i++) {
      if(this.user.workExps[i].id === id) {
        this.lastId(this.user.workExps[i].positions)
      }
    }

    setTimeout(()=>{
      for(let i = 0; i < this.user.workExps.length; i++) {
        if(this.user.workExps[i].id === id) {
          this.user.workExps[i].positions.push(
            {
              id: `${this.id()}`,
              position: data.position,
              startDate: data.startDate,
              current: data.current,
              endDate: data.endDate,
              description: data.description
            }
          )
        }
      }
    }, 300)
  }

}



/* oldId: number = 3

  lastId() {
    for (let i = 0; i < this.places.length; i++) {
      if (i == this.places.length - 1) {
        this.oldId= Number(this.places[i].id)
      }
    }
  }

  id() {
    return this.oldId + 1
  } */


/* addPlace(title: string, image: string){

    this.places.push({
      id : `${this.id()}`,
      title,
      image,
      comments:[]
    })
    setTimeout(()=>{
      this.lastId()
    }, 500)

} */