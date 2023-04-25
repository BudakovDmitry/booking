import { put, takeEvery, call } from 'redux-saga/effects'
import { setDestinations, destinationsFail } from 'src/redux/actions/destinationsActions'
import { DestinationsActionsType } from 'src/types'
import { Endpoints } from 'src/utils/endpoints'
import { get } from 'src/api'

function* fetchDestinationsWorker() {
    try {
        const response = yield call(get, Endpoints.DESTINATIONS)
        yield put(setDestinations(response.data))
    } catch (e: any) {
        yield put(destinationsFail(e.message))
    }

}

export function* destinationsWatcher() {
    yield takeEvery(DestinationsActionsType.FETCH_DESTINATIONS, fetchDestinationsWorker)
}