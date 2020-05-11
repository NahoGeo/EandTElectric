import { Address } from './address';
import { Education } from './education';
import { WorkExp } from './work-exp.model';
import { Training } from './training';

export interface User {
    profileImage: any
    firstName: string
    lastName: string
    email: string,
    phoneNumber: string,
    celphoneNumber: string,
    address: Address
    educations: Array<Education>
    workExps: Array<WorkExp>
    trainings: Array<Training>
}
