import { applyMiddleware, combineReducers, createStore } from 'redux';
import destinationsReducer from 'src/redux/reducer/destinationsReducer';
import hotelsReducer from 'src/redux/reducer/hotelsReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from 'src/redux/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ destinationsReducer, hotelsReducer });

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;
