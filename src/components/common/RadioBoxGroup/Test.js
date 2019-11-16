import React, { Component } from 'react'
import RadioBoxGroup from "./index"
// import { getAllStudents } from "../../../services/student"

export default class Test extends Component {
    state = {
        datas: [
            {value:"football", text:"足球"},
            {value:"basketball", text:"篮球"},
            {value:"movie", text:"电影"},
        ],
        value: ""
    }

    // async componentDidMount() {
    //     const stus = await getAllStudents();
    //     this.setState({
    //         datas: stus.map(it => ({ value: it.id.toString(), text: it.name }))
    //     })
    // }


    render() {
        return (
            <div>
                <RadioBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={val => {
                        this.setState({
                            value: val
                        })
                    }}
                />
            </div>
        )
    }
}