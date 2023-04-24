import { put, takeEvery, call} from 'redux-saga/effects'
import { API } from 'src/constants'
import { Endpoints } from 'src/utils/endpoints'
import { hotelsFail, setHotels } from 'src/redux/actions/hotelsActions'
import { HotelsActionsType } from 'src/types'

const axios = require('axios').default;

const fetchHotelsFromApi = () => axios.get(`${API}${Endpoints.HOTELS}`)

function* fetchHotelsWorker() {
    try {
        const response = yield call(fetchHotelsFromApi)

        yield put(setHotels(response.data))
    } catch (e: any) {
        yield put(hotelsFail(e.message))
    }

}

export function* hotelsWatcher() {
    yield takeEvery(HotelsActionsType.FETCH_HOTELS, fetchHotelsWorker)
}