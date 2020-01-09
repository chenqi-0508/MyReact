import {searchStudents} from '../../../services/student'
import {createActions} from 'redux-actions'

const actions = createActions({
    SET_DATAS_AND_TOTAL: (datas, total) => ({
        datas,
        total
    }),
    SET_IS_LOADING: isLoading => isLoading
});

export function fetchStudent() {
    return async function (dispatch, getState) {
        dispatch(setIsLoading(true));
        const condition = getState().students.condition;
        const resp = await searchStudents(condition)
        dispatch(setDatasAndTotal(resp.datas, resp.cont));
        dispatch(setIsLoading(false));
    }
}

export const {setDatasAndTotal, setIsLoading} = actions;

// export const actionTypes = {
//     setDatasAndTotal: Symbol("setDatasAndTotal"),
//     setIsLoading: Symbol("setIsLoading")
// }

// export function setDatasAndTotal(datas, total) {
//     return {
//         type: actionTypes.setDatasAndTotal,
//         payload: {
//             datas,
//             total
//         }
//     }
// }

// export function setIsLoading(isLoading) {
//     return {
//         type: actionTypes.setIsLoading,
//         payload: isLoading
//     }
// }

// export function fetchStudent() {
//     return async function (dispatch, getState) {
//         dispatch(setIsLoading(true));
//         const condition = getState().students.condition;
//         const resp = await searchStudents(condition)
//         dispatch(setDatasAndTotal(resp.datas, resp.cont));
//         dispatch(setIsLoading(false));
//     }
// }
