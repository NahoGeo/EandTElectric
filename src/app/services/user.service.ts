import { Injectable } from '@angular/core';
import { set, get } from 'src/app/services/storage'
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
    profileImage: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    celphoneNumber: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    educations: [],
    workExps: [],
    trainings: []
  }


  constructor() {
  }

  async setUser() {
    const user = await get('user');
    if (!user) {
      this.saveUser()
    }
    this.setUserValues()
  }

  saveUser() {
    set('user', this.user)
  }

  async setUserValues() {
    this.user = await get('user')
  }

  private oldId: number = 0

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

  newSignInUser(data: any) {
    this.user.email = data.email
    this.user.password = data.password
    
    this.saveUser()
  }

  getUser() {
    return this.user
  }

  getEducationById(id: string) {
    this.setUserValues()
    return this.user.educations.find(education => {return education.id === id})
  }

  getTrainingById(id: string) {
    this.setUserValues()
    return this.user.trainings.find(training => {return training.id === id})
  }

  getWorkExpById(id: string) {
    this.setUserValues()
    return this.user.workExps.find(workExp => {return workExp.id === id})
  }

  editUserProfile(data: any) {
    this.user.profileImage = data.profileImage
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

    this.saveUser()
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

    this.saveUser()
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

    this.saveUser()
  }

  editWorkExp(id: string, data: WorkExp) {
    this.user.workExps.forEach(workExp => {
      if(workExp.id === id){
        workExp.name = data.name
      }
    })

    this.saveUser()
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

    this.saveUser()
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
          current: data.current,
          endDate: data.endDate
        }
      )
      this.saveUser()
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
      this.saveUser()
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
      this.saveUser()
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
          this.saveUser()
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