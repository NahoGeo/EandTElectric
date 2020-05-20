import { Address } from './address';

export interface Profile {
    profileImage?: any
    firstName?: string
    lastName?: string
    email: string
    password?: string
    phoneNumber?: string
    celphoneNumber?: string
    address?: Address
}