import * as action from '../action/loginUserAction'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {

        case action.GETLOGINUSERACTION:
            return {...state, ...payload}

        default:
            return state
    }
}
