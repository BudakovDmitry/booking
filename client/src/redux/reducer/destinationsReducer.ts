import { DestinationsActionsType, DestinationsStateType, DestinationsAction } from 'src/types'

const initialState: DestinationsStateType = {
  destinations: [],
  pending: false,
  error: null,
}
  
const destinationsReducer = (state: DestinationsStateType = initialState, action: DestinationsAction) => {
  switch (action.type) {
    case DestinationsActionsType.FETCH_DESTINATIONS:
      return {
        ...state,
        pending: true,
      };
    case DestinationsActionsType.SET_DESTINATIONS:
      return {
        ...state,
        pending: false,
        destinations: action.payload,
        error: null
      }
    case DestinationsActionsType.DESTINATIONS_FAIL:
      return {
        ...state,
        pending: false,
        destinations: [],
        error: action.payload,
      };
    default:
      return state
  }
}

export default destinationsReducer