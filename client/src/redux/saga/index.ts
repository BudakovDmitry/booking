import { all } from 'redux-saga/effects'
import { destinationsWatcher } from 'src/redux/saga/destinationsSaga'
import { hotelsWatcher } from 'src/redux/saga/hotelsSaga'

export function* rootWatcher() {
    yield all([destinationsWatcher(), hotelsWatcher()])
}