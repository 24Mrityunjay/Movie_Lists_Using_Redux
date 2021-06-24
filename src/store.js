import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './reducers';
import allSaga from './sagas/index';

const sagaMiddleWare = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)(rootReducer);
sagaMiddleWare.run(allSaga);

export default store;

