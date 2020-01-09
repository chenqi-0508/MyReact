// import { actionTypes } from '../../action/student/searchCondition'
import {handleActions} from 'redux-actions'

const initState = {
    search: "",
    sex: -1,
    page: 1,
    limit: 10
}

const reducer = handleActions({
    CHANGE: (state, {payload}) => ({...state, ...payload})
}, initState)

export default reducer;

// export default function (state = initState, { type, payload }) {
//     switch (type) {
//         case actionTypes.change:
//             return {
//                 ...state,
//                 ...payload
//             }

//         default:
//             return state
//     }
// }
