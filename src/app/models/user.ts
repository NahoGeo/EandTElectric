import { Address } from './address';
import { Education } from './education';
import { WorkExp } from './work-exp.model';
import { Training } from './training';

export interface User {
    id: Number
    profileImage: any
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    cellphoneNumber: string
    address: string
    city: string
    state: string
    zipCode: string
    educations: Array<Education>
    workExps: Array<WorkExp>
    trainings: Array<Training>
}
