import { put, takeEvery, call } from 'redux-saga/effects'
import { setDestinations, destinationsFail } from 'src/redux/actions/destinationsActions'
import { DestinationsActionsType } from 'src/types'
import { API } from 'src/constants'
import { Endpoints } from 'src/utils/endpoints'

const axios = require('axios').default;

const fetchDestinationsFromApi = () => axios.get(`${API}${Endpoints.DESTINATIONS}`)

function* fetchDestinationsWorker() {
    try {
        const response = yield call(fetchDestinationsFromApi)

        yield put(setDestinations(response.data))
    } catch (e: any) {
        yield put(destinationsFail(e.message))
    }

}

export function* destinationsWatcher() {
    yield takeEvery(DestinationsActionsType.FETCH_DESTINATIONS, fetchDestinationsWorker)
}