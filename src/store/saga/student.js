import {takeEvery, take, put, call, select} from 'redux-saga/effects'
import {setIsLoading, fetchStudents, setDatasAndTotal} from '../action/student/searchResult'
import {searchStudents} from '../../services/student'

function* getFetchStudents() {
    console.log("getFetchStudents触发了");
    yield put(setIsLoading(true));
    const condition = yield select(state => state.students.condition);
    const resp = yield call(searchStudents, condition);
    yield put(setDatasAndTotal(resp.datas, resp.cont));
    yield put(setIsLoading(false));
}

/**
 * takeEvery指令
 */
export default function* () {
    yield takeEvery(fetchStudents, getFetchStudents)
    console.log("正在监听fetchStudents");
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
