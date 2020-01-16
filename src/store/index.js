import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import {composeWithDevTools} from 'redux-devtools-extension';

const saga = createSagaMiddleware();

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(
        // thunk,
        saga,
        logger
    )));


saga.run(rootSaga);

export default store;
