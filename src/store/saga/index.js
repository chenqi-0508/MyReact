import {all} from 'redux-saga/effects'
import studentTask from './student'

export default function* () {
    yield all([studentTask()])
    console.log("saga完成")
}
