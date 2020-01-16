import React, {Component} from 'react'
import './index.css'

export default class StudentSearchBar extends Component {
    state = {
        search: this.props.defaultValue.search,
        sex: this.props.defaultValue.sex
    }
    handleSearchChange = e => {
        this.setState({
            search: e.target.value
        })
    }
    handleRadioChange = e => {
        this.setState({
            sex: +e.target.value
        })
    }
    //点击查询
    handleClick = () => {
        this.props.searchEvent(this.state);
    }

    render() {
        return (
            < div
        className = "search-bar" >
            < label >
            关键字
    :
    <
        input
        type = "text"
        name = "search"
        value = {this.state.search}
        onChange = {this.handleSearchChange}
        />
        < /label>
        < label >
        性别：
    <
        input
        type = "radio"
        name = "sex"
        value = { - 1
    }
        checked = {this.state.sex === -1}
        onChange = {this.handleRadioChange}
        />不限
        < input
        type = "radio"
        name = "sex"
        value = {0}
        checked = {this.state.sex === 0}
        onChange = {this.handleRadioChange}
        />男
        < input
        type = "radio"
        name = "sex"
        value = {1}
        checked = {this.state.sex === 1}
        onChange = {this.handleRadioChange}
        />女
        < /label>
        < button
        onClick = {this.handleClick} > 查询 < /button>
            < /div>
    )
    }
}
