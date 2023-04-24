import { DestinationsActionsType, DestinationType } from 'src/types'

export const setDestinations = (destinations: DestinationType[]) => {
    return {
        type: DestinationsActionsType.SET_DESTINATIONS,
        payload: destinations,
      }
}

export const fetchDestinations = () => {
    return {
        type: DestinationsActionsType.FETCH_DESTINATIONS,
      }
}

export const destinationsFail = (payload: string) => {
  return {
    type: DestinationsActionsType.DESTINATIONS_FAIL,
    payload,
  }
};