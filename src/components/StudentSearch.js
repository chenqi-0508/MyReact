import React, {Component} from 'react'
import store from '../store'
import StudentSearchBar from './StudentSearchBar'
import StudentTable from './StudentTable'
import Pager from './common/Pager/Pager'
import Loading from './common/Loading'
import {connect} from 'react-redux'
import {fetchStudents} from '../store/action/student/searchResult'
import {change} from '../store/action/student/searchCondition'

let mapStateToProps = state => {
    return {
        defaultValue: state.students.condition
    }
}
let mapDispatchToProps = dispatch => {
    return {
        searchEvent: condition => {
            dispatch(change({
                ...condition,
                page: 1
            }));
            dispatch(fetchStudents());
        }
    }
}

const StudentSearchBarWrapper = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar);


mapStateToProps = state => {
    return {
        stu: state.students.result.datas
    }
}

const StudentTableWrapper = connect(mapStateToProps)(StudentTable);


mapStateToProps = state => {
    return {
        total: state.students.result.total,
        size: state.students.condition.limit,
        current: state.students.condition.page,
        panel: 5
    }
}

mapDispatchToProps = dispatch => {
    return {
        onPageChange(page) {
            dispatch(change({
                page
            }));
            dispatch(fetchStudents());
        }
    }
}

const PagerWrapper = connect(mapStateToProps, mapDispatchToProps)(Pager);


mapStateToProps = state => {
    return {
        isLoading: state.students.result.isLoading
    }
}

const LoadingTemp = connect(mapStateToProps)(Loading);


export default class StudentSearch extends Component {
    componentDidMount() {
        store.dispatch(fetchStudents());
    }

    render() {
        return (
            < div >
            < StudentSearchBarWrapper / >
            < StudentTableWrapper / >
            < PagerWrapper / >
            < LoadingTemp / >
            < /div>
    )
    }
}
