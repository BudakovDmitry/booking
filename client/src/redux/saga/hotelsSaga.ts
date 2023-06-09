import { put, takeEvery, call } from 'redux-saga/effects';
import { Endpoints } from 'src/utils/endpoints';
import { getHotelsSucceeded, getHotelsFailed } from 'src/redux/actions/hotelsActions';
import { HotelsAction, HotelsActionsType } from 'src/types';
import { get } from 'src/api';

function* fetchHotelsWorker(action: HotelsAction) {
  try {
    const response = yield call(get, Endpoints.HOTELS, `?destination=${action.payload}`);
    yield put(getHotelsSucceeded(response.data));
  } catch (e: any) {
    yield put(getHotelsFailed(e.message));
  }
}

export function* hotelsWatcher() {
  yield takeEvery(HotelsActionsType.HOTELS_FETCH_REQUESTED, fetchHotelsWorker);
}
