import { Injectable } from '@angular/core';
import { set, get, remove } from 'src/app/services/storage'
import { User } from '../models/user';
import { Education } from '../models/education';
import { Training } from '../models/training';
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
    cellphoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
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

  deleteOldProfile() {
    if (this.user.email){
      remove('user')
      this.user = {
        profileImage: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        cellphoneNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        educations: [],
        workExps: [],
        trainings: []
      }
      this.saveUser()
    }
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
    this.user.cellphoneNumber = data.cellphoneNumber
    this.user.address = data.address
    this.user.city = data.city
    this.user.state = data.state
    this.user.zipCode = data.zipCode

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
        workExp.name = data.name,
        workExp.position = data.position,
        workExp.startDate = data.startDate,
        workExp.endDate = data.endDate,
        workExp.current = data.current,
        workExp.description = data.description
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
          position: data.position,
          startDate: data.startDate,
          endDate: data.endDate,
          current: data.current,
          description: data.description
        }
      )
      this.saveUser()
    }, 300)
  }
}