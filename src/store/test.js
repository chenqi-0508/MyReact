import {setDatasAndTotal, setIsLoading} from './action/student/searchResult'
import {change} from './action/student/searchCondition'
import {increase, decrease, add} from './action/counter'
import store from './index'

// store.dispatch(fetchStudent())

window.asncStudent = () => {
    store.dispatch(setIsLoading(true))
}
window.setDatasAndTotal = () => {
    store.dispatch(setDatasAndTotal([1, 2, 3], 888))
}

window.change = (condition) => {
    store.dispatch(change(condition))
}

window.increase = () => {
    store.dispatch(increase());
}
window.decrease = () => {
    store.dispatch(decrease());
}
window.add = (n) => {
    store.dispatch(add(n));
}
