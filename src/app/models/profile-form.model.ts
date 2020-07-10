import { Address } from './address';

export interface Profile {
    id?: number
    profileImage?: any
    firstName?: string
    lastName?: string
    email: string
    phoneNumber?: string
    cellphoneNumber?: string
    address?: string
    city?: string
    state?: string
    zipCode?: string
}