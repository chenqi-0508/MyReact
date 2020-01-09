import {combineReducers} from 'redux'
import searchConditionReducer from './searchCondition'
import searchResultReducer from './searchResult'

export default combineReducers({
    condition: searchConditionReducer,
    result: searchResultReducer
})
