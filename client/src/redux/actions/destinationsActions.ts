import { DestinationsActionsType, DestinationType } from 'src/types';

export const getDestinationsRequested = () => ({
  type: DestinationsActionsType.DESTINATIONS_FETCH_REQUESTED,
});

export const getDestinationsSucceeded = (destinations: DestinationType[]) => ({
  type: DestinationsActionsType.DESTINATIONS_FETCH_SUCCEEDED,
  payload: destinations,
});

export const getDestinationsFailed = (error: string) => ({
  type: DestinationsActionsType.DESTINATIONS_FETCH_FAILED,
  payload: error,
});
