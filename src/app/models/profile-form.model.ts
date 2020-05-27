import { Address } from './address';

export interface Profile {
    profileImage?: any
    firstName?: string
    lastName?: string
    email: string
    password?: string
    phoneNumber?: string
    cellphoneNumber?: string
    address?: string
    city?: string
    state?: string
    zipCode?: string
}