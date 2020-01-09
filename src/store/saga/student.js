import {takeEvery, take} from 'redux-saga/effects'
import {setIsLoading} from '../action/student/searchResult'

function* asyncIsLoading() {
    console.log("asyncIsLoading触发了")
}

/**
 * takeEvery指令
 */
export default function* () {
    yield takeEvery(setIsLoading, asyncIsLoading)
    console.log("正在监听asyncIsLoading")
}

/**
 * take指令
 */
// export default function* () {
//     while(true) {
//         console.log("正在监听asyncIsLoading")
//         const action = yield take(actionTypes.setIsLoading)
//         console.log("asyncIsLoading触发了", action);
//     }
// }
