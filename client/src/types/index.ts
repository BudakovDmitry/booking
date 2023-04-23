export type DestinationType = {
    id: number
    value: number
    label: string
}

export type HotelType = {
    id: number
    name: string
    address: string
    city: string
    state: string | null
    country_code: string
    hotel_rating: number | null
    phone_number: string | null
    website: string | null
}


export enum FormErrors {
    REQUIRED = 'Required'
}

export type FormValuesType = {
    destination?: string
    checkIn?: string
    checkOut?: string
    adults?: string
    children?: string
}

export type FormErrorsType = FormValuesType
