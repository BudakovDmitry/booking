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
    destination: string
    checkIn?: string
    checkOut?: string
    adults?: string
    children?: string
}

export type FormErrorsType = FormValuesType

export enum DestinationsActionsType {
    DESTINATIONS_FETCH_REQUESTED = 'DESTINATIONS_FETCH_REQUESTED',
    DESTINATIONS_FETCH_SUCCEEDED = 'DESTINATIONS_FETCH_SUCCEEDED',
    DESTINATIONS_FETCH_FAILED = 'DESTINATIONS_FETCH_FAILED',
}

export type GetDestinationsRequested = {
    type: DestinationsActionsType.DESTINATIONS_FETCH_REQUESTED
}

export type GetDestinationsSucceeded = {
    type: DestinationsActionsType.DESTINATIONS_FETCH_SUCCEEDED
    payload: DestinationType[]
}

export type GetDestnationsFailed = {
    type: DestinationsActionsType.DESTINATIONS_FETCH_FAILED
    payload: string
}

export type DestinationsAction = GetDestinationsRequested | GetDestinationsSucceeded | GetDestnationsFailed

export enum HotelsActionsType {
    HOTELS_FETCH_REQUESTED = 'HOTELS_FETCH_REQUESTED',
    HOTELS_FETCH_SUCCEEDED = 'HOTELS_FETCH_SUCCEEDED',
    HOTELS_FETCH_FAILED = 'HOTELS_FETCH_FAILED',
    HOTELS_SET = 'HOTELS_SET'
}

export type GetHotelsRequested = {
    type: HotelsActionsType.HOTELS_FETCH_REQUESTED
    payload: string
}

export type GetHotelsSucceeded = {
    type: HotelsActionsType.HOTELS_FETCH_SUCCEEDED
    payload: HotelType[]
}

export type GetHotelsFailed = {
    type: HotelsActionsType.HOTELS_FETCH_FAILED
    payload: string
}

export type SetHotels = {
    type: HotelsActionsType.HOTELS_SET
    payload: string
}

export type HotelsAction = GetHotelsRequested | GetHotelsSucceeded | GetHotelsFailed | SetHotels