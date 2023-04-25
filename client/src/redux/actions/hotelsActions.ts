import { HotelsActionsType, HotelType } from 'src/types'



export const getHotelsRequested = (destination: string) => {
  return {
    type: HotelsActionsType.HOTELS_FETCH_REQUESTED,
    payload: destination,
  }
}

export const getHotelsSucceeded = (hotels: HotelType[]) => {
  return {
    type: HotelsActionsType.HOTELS_FETCH_SUCCEEDED,
    payload: hotels,
  }
}

export const getHotelsFailed = (error: string) => {
  return {
    type: HotelsActionsType.HOTELS_FETCH_FAILED,
    payload: error,
  }
}

export const setHotels = (hotels: HotelType[]) => {
  return {
    type: HotelsActionsType.HOTELS_SET,
    payload: hotels,
  }
}