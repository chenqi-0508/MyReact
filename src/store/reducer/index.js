import {combineReducers} from 'redux'
import studentReducer from './student'
import counterReducer from './counter'

export default combineReducers({
    students: studentReducer,
    counter: counterReducer
})
