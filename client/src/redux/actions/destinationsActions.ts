import { DestinationsActionsType, DestinationType } from 'src/types'

export const getDestinationsRequested = () => {
  return {
    type: DestinationsActionsType.DESTINATIONS_FETCH_REQUESTED,
  }
}

export const getDestinationsSucceeded = (destinations: DestinationType[]) => {
  return {
    type: DestinationsActionsType.DESTINATIONS_FETCH_SUCCEEDED,
    payload: destinations,
  }
}

export const getDestinationsFailed = (error: string) => {
  return {
    type: DestinationsActionsType.DESTINATIONS_FETCH_FAILED,
    payload: error,
  }
}