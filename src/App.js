import store from './store'
import Counter from './components/Counter'
import {Provider} from 'react-redux'
import React from 'react'
import StudentSearch from './components/StudentSearch'

export default function App() {
    return (
        < >
        < Provider
    store = {store} >
        < StudentSearch / >
        < /Provider>
        < />
)
}
