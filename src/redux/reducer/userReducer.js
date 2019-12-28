import * as action from '../action/userAction'
import uuid from 'uuid'

const initialState = [{
    id: uuid(),
    no: 1,
    name: 'user1'
}, {
    id: uuid(),
    no: 2,
    name: 'user2'
}];


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case action.ADDUSERACTION:
            return [...state, payload]
        case action.DELETEUSERACTION:
            return state.filter(it => it.no !== payload)
        case action.UPDATEUSERACTION:
            return state.map(it => it.no === payload.no ? {...it, ...payload} : it);
        default:
            return state
    }
}
