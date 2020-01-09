import {createAction} from 'redux-actions'

export const change = createAction("CHANGE", newCondition => newCondition);

// export const actionTypes = {
//     change: Symbol("change")
// }

/**
 * 根据新的查询条件创建action
 * @param {*} newCondition
 */
// export function change(newCondition) {
//     return {
//         type: actionTypes.change,
//         payload: newCondition
//     }
// }
