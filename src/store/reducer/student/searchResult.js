// import { actionTypes } from '../../action/student/searchResult'
import {handleActions} from 'redux-actions'

const initState = {
    datas: [],
    total: 0,
    isLoading: false
}

const reducer = handleActions({
    SET_DATAS_AND_TOTAL: (state, {payload}) => ({
        ...state,
        ...payload
    }),
    SET_IS_LOADING: (state, {payload}) => ({
        ...state,
        isLoading: payload
    })
}, initState);

export default reducer;

// export default function (state = initState, { type, payload }) {
//     switch (type) {
//         case actionTypes.setDatasAndTotal:
//             return {
//                 ...state,
//                 ...payload
//             }

//         case actionTypes.setIsLoading:
//             return {
//                 ...state,
//                 isLoading: payload
//             }

//         default:
//             return state
//     }
// }
