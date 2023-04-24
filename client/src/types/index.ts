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

export type DestinationsStateType = {
    destinations: DestinationType[]
    pending: boolean
    error: null
}

export type HotelsStateType = {
    hotels: HotelType[]
    pending: boolean
    error: string | null
}

export type RootStateType = {
    destinationsReducer: DestinationsStateType
    hotelsReducer: HotelsStateType
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

export enum DestinationsActionsType {
    SET_DESTINATIONS = 'SET_DESTINATIONS',
    FETCH_DESTINATIONS = 'FETCH_DESTINATIONS',
    DESTINATIONS_FAIL = 'DESTINATIONS_FAIL'
}

export type FetchDestinationsAction = {
    type: DestinationsActionsType.FETCH_DESTINATIONS
}

export type SetDestinationsAction = {
    type: DestinationsActionsType.SET_DESTINATIONS
    payload: DestinationType[]
}

export type FailDestinationsAction = {
    type: DestinationsActionsType.DESTINATIONS_FAIL
    payload: string
}

export type DestinationsAction = FetchDestinationsAction | SetDestinationsAction | FailDestinationsAction

export enum HotelsActionsType {
    SET_HOTELS = 'SET_HOTELS',
    FETCH_HOTELS = 'FETCH_HOTELS',
    HOTELS_FAIL = 'HOTELS_FAIL'
}

export type FetchHotelsAction = {
    type: HotelsActionsType.FETCH_HOTELS
}

export type SetHotelsAction = {
    type: HotelsActionsType.SET_HOTELS
    payload: HotelType[]
}

export type FailHotelsAction = {
    type: HotelsActionsType.HOTELS_FAIL
    payload: string
}

export type HotelsAction = FetchHotelsAction | SetHotelsAction | FailHotelsAction