import { DestinationsActionsType, DestinationsStateType, DestinationsAction } from 'src/types';

const initialState: DestinationsStateType = {
  destinations: [],
  pending: false,
  error: null,
};

const destinationsReducer = (
  state: DestinationsStateType = initialState,
  action: DestinationsAction,
) => {
  switch (action.type) {
    case DestinationsActionsType.DESTINATIONS_FETCH_REQUESTED:
      return {
        ...state,
        pending: true,
      };
    case DestinationsActionsType.DESTINATIONS_FETCH_SUCCEEDED:
      return {
        ...state,
        pending: false,
        destinations: action.payload,
        error: null,
      };
    case DestinationsActionsType.DESTINATIONS_FETCH_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default destinationsReducer;
