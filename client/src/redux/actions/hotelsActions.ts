import { HotelsActionsType, HotelType } from 'src/types';

export const getHotelsRequested = (destination: string) => ({
  type: HotelsActionsType.HOTELS_FETCH_REQUESTED,
  payload: destination,
});

export const getHotelsSucceeded = (hotels: HotelType[]) => ({
  type: HotelsActionsType.HOTELS_FETCH_SUCCEEDED,
  payload: hotels,
});

export const getHotelsFailed = (error: string) => ({
  type: HotelsActionsType.HOTELS_FETCH_FAILED,
  payload: error,
});

export const setHotels = (hotels: HotelType[]) => ({
  type: HotelsActionsType.HOTELS_SET,
  payload: hotels,
});
