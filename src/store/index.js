import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const saga = createSagaMiddleware();

const store = createStore(reducer,
    applyMiddleware(
        // thunk,
        saga,
        logger
    ));


saga.run(rootSaga);

export default store;
