import { put, takeEvery, call} from 'redux-saga/effects'
import { Endpoints } from 'src/utils/endpoints'
import { getHotelsSucceeded, getHotelsFailed } from 'src/redux/actions/hotelsActions'
import { HotelsActionsType, HotelsAction } from 'src/types'
import { get } from 'src/api'

function* fetchHotelsWorker(action: HotelsAction) {
    console.log('action worker', action)
    try {
        const response = yield call(get, Endpoints.HOTELS)
        console.log('response', response)
        yield put(getHotelsSucceeded(response.data))
    } catch (e: any) {
        yield put(getHotelsFailed(e.message))
    }

}

export function* hotelsWatcher() {
    yield takeEvery(HotelsActionsType.HOTELS_FETCH_REQUESTED, fetchHotelsWorker)
}