import { HotelsActionsType, HotelType } from 'src/types'

export const setHotels = (hotels: HotelType[]) => {
  return {
    type: HotelsActionsType.SET_HOTELS,
    payload: hotels,
  }
}

export const fetchHotels = () => {
  return {
    type: HotelsActionsType.FETCH_HOTELS
  }
}

export const hotelsFail = (payload: string) => {
  return {
    type: HotelsActionsType.HOTELS_FAIL,
    payload,
  }
};