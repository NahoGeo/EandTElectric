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

  /**
   * this function is called when opening the app
   * sets a new user in the storage
   */
  async setUser() {
    const user = await get('user');
    if (!user) {
      this.saveUser()
    }
    this.setUserValues()
  }

  /**
   * it sets the user object in the storage
   */
  private saveUser() {
    set('user', this.user)
  }

  /**
   * get the user object stored and assigns it to the user object variable
   */
  async setUserValues() {
    this.user = await get('user')
  }

  /**
   * this function is called when another user is trying to create a new account
   * it sets all the user object's propierties to blank
   */
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

  /**
   * it receives an array to get the last object id of this one
   * and it is assigned to the oldId variable
   * @param data
   */
  private lastId(data: any) {
    for (let i = 0; i < data.length; i++) {
      if (i == data.length - 1) {
        this.oldId= Number(data[i].id)
      }
    }
  }

  /**
   * this function returns a new id number for the next object
   * @returns a new id
   */
  private id() {
    return this.oldId + 1
  }

  /**
   * this function is execute when a new user is creatin a new account
   * its recive an object with an email and a password and assign those to the user object variable
   * @param data object
   */
  newSignInUser(data: any) {
    this.user.email = data.email
    this.user.password = data.password
    
    this.saveUser()
  }

  /**
   * return all the user object varible
   */
  getUser() {
    return this.user
  }

  /**
   * receives a number id from a selected education object
   * and return the object who contain this number id
   * @param {string} id
   * @returns the education object selected
   */
  getEducationById(id: string) {
    this.setUserValues()
    return this.user.educations.find(education => {return education.id === id})
  }

  /**
   * receives a number id from a selected training object
   * and return the object who contain this number id
   * @param {string} id
   * @returns the training object selected
   */
  getTrainingById(id: string) {
    this.setUserValues()
    return this.user.trainings.find(training => {return training.id === id})
  }

  /**
   * receives a number id from a selected work experience object
   * and return the object who contain this number id
   * @param {string} id
   * @returns the work experience object selected
   */
  getWorkExpById(id: string) {
    this.setUserValues()
    return this.user.workExps.find(workExp => {return workExp.id === id})
  }

  /**
   * receives the profile user data object as a param
   * and sets the param's propierties to the user object variable,
   * then save the user object variable to the storage
   * @param data profile object
   */
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

  /**
   * edits a specific education object by its own id
   * and sets the data's properties to the user's education object,
   * then save the user object variable to the storage
   * @param id education object id
   * @param data education object data
   */
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

  /**
   * edits a specific training object by its own id
   * and sets the data's properties to the user's training object,
   * then save the user object variable to the storage
   * @param id training object id
   * @param data training object data
   */
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

  /**
   * edits a specific work experience object by its own id
   * and sets the data's properties to an existing user's work experience object,
   * then save the user object variable to the storage
   * @param id work experience object id
   * @param data work experience object data
   */
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

  /**
   * sets the data's properties to a new user's education object,
   * then save the user object variable to the storage
   * @param {Education} data education object
   */
  addEducation(data: Education) {

    this.lastId(this.user.educations)

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
  }

  /**
   * sets the data's properties to a new user's training object,
   * then save the user object variable to the storage
   * @param {Training} data training object
   */
  addTraining(data: Training) {

    this.lastId(this.user.trainings)

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
  }

  /**
   * sets the data's properties to a new user's work experience object,
   * then save the user object variable to the storage
   * @param {WorkExp} data work experience object
   */
  addWorkExp(data: WorkExp) {
    
    this.lastId(this.user.workExps)

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
  }
}