import {handleActions, combineActions} from 'redux-actions'
import {increase, decrease, add} from '../../action/counter'

const fn = combineActions(increase, decrease, add);

const reducer = handleActions({
    [fn]: (state, {payload}) => state + payload
}, 10);

// const reducer = handleActions({
//     INCREASE: (state, { payload }) => state + payload,
//     DECREASE: (state, { payload }) => state + payload,
//     ADD: (state, { payload }) => state + payload
// },10);

export default reducer;
