// import { createStore, bindActionCreators } from 'redux'
import {createStore, bindActionCreators} from './sourceCode'
import reducer from './reducer'
import * as userAction from './action/userAction'
import uuid from 'uuid'

const store = createStore(reducer);

//监听器
const unListen1 = store.subscribe(() => {
    console.log(store.getState());
});

const actions = {
    addUser: userAction.addUserAction,
    deleteUser: userAction.deleteUserAction
}
const newActions = bindActionCreators(actions, store.dispatch);
// const addUser = bindActionCreators(userAction.addUserAction, store.dispatch);

// addUser({
//     id: uuid(),
//     no: 3,
//     name: 'chen3'
// });

newActions.addUser({
    id: uuid(),
    no: 3,
    name: 'chen3'
});
newActions.deleteUser(2);


//新增user
// store.dispatch(userAction.addUserAction({
//     id: uuid(),
//     no: 3,
//     name: 'chen3'
// }));


//删除user
// store.dispatch(userAction.deleteUserAction(2));

//取消监听
unListen1();

//更新user
// store.dispatch(userAction.updateUserAction({
//     id: uuid(),
//     no: 1,
//     name: 'qu1',
//     sex: 0
// }));
