import {combineReducers} from 'redux'
import loginUserReducer from './loginUserReducer'
import userReducer from './userReducer'

// export default (state={}, action) => {
//     const newState = {
//         loginUser: loginUserReducer(state.loginUser, action),
//         user: userReducer(state.user, action)
//     };
//     return newState;
// }

export default combineReducers({
    loginUserReducer,
    userReducer
});
