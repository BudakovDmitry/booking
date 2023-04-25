import { HotelsActionsType, HotelsStateType, HotelsAction } from 'src/types'


const initialState: HotelsStateType = {
  hotels: [],
  pending: false,
  error: null,
}
  
const hotelsReducer = (state: HotelsStateType = initialState, action: HotelsAction) => {
  switch (action.type) {
    case HotelsActionsType.HOTELS_FETCH_REQUESTED:
      return {
        ...state,
        pending: true,
      };
    case HotelsActionsType.HOTELS_FETCH_SUCCEEDED:
      return {
        ...state,
        pending: false,
        hotels: action.payload,
        error: null
      };
    case HotelsActionsType.HOTELS_FETCH_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    case HotelsActionsType.HOTELS_SET:
      return {
        ...state,
        hotels: action.payload
      };
    default:
      return state
  }
}

export default hotelsReducer