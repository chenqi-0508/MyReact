import React from 'react'
import {Route} from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside.js'
import StudentList from './student/StudentList'
import StudentAdd from './student/StudentAdd'
import CourseList from './course/CourseList'
import CourseAdd from './course/CourseAdd'
import Welcome from './Welcome'
import StudentDetail from './student/StudentDetail'

export default function Admin() {
    return (
        <div>
            <Layout
                header={<Header/>}
                aside={<Aside
                />}>

                <Route path="/" exact component={Welcome}/>
                <Route path="/students" exact component={StudentList}/>
                <Route path="/students/add" exact component={StudentAdd}/>
                <Route path="/students/:sNo" component={StudentDetail}/>
                <Route path="/courses" exact component={CourseList}/>
                <Route path="/courses/add" exact component={CourseAdd}/>

            </Layout>
        </div>
    )
}
