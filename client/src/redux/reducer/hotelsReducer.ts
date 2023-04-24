import { HotelsActionsType, HotelsStateType, HotelsAction } from 'src/types'


const initialState: HotelsStateType = {
  hotels: [],
  pending: false,
  error: null,
}
  
const hotelsReducer = (state: HotelsStateType = initialState, action: HotelsAction) => {
  switch (action.type) {
    case HotelsActionsType.FETCH_HOTELS:
      return {
        ...state,
        pending: true,
      };
    case HotelsActionsType.SET_HOTELS:
      return {
        ...state, 
        hotels: action.payload
      }
    case HotelsActionsType.HOTELS_FAIL:
      return {
        ...state,
        pending: false,
        hotels: [],
        error: action.payload,
      };
    default:
      return state
  }
}

export default hotelsReducer