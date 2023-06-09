import { HotelsActionsType, HotelsStateType, HotelsAction } from 'src/types';

const initialState: HotelsStateType = {
  hotels: [],
  pending: false,
  error: null,
  succeeded: false,
};

const hotelsReducer = (state: HotelsStateType = initialState, action: HotelsAction) => {
  switch (action.type) {
    case HotelsActionsType.HOTELS_FETCH_REQUESTED:
      return {
        ...state,
        pending: true,
        succeeded: false,
      };
    case HotelsActionsType.HOTELS_FETCH_SUCCEEDED:
      return {
        ...state,
        pending: false,
        hotels: action.payload,
        error: null,
        succeeded: true,
      };
    case HotelsActionsType.HOTELS_FETCH_FAILED:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case HotelsActionsType.HOTELS_SET:
      return {
        ...state,
        hotels: action.payload,
        succeeded: false,
      };
    default:
      return state;
  }
};

export default hotelsReducer;
