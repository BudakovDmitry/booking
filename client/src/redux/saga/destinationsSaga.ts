import { put, takeEvery, call } from 'redux-saga/effects'
import { getDestinationsSucceeded, getDestinationsFailed } from 'src/redux/actions/destinationsActions'
import { DestinationsActionsType } from 'src/types'
import { Endpoints } from 'src/utils/endpoints'
import { get } from 'src/api'

function* fetchDestinationsWorker() {
    try {
        const response = yield call(get, Endpoints.DESTINATIONS)
        yield put(getDestinationsSucceeded(response.data))
    } catch (e: any) {
        yield put(getDestinationsFailed(e.message))
    }
}

export function* destinationsWatcher() {
    yield takeEvery(DestinationsActionsType.DESTINATIONS_FETCH_REQUESTED, fetchDestinationsWorker)
}