import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class ChooseBtn extends Component {
    static propTypes = {
        imgLen: PropTypes.number.isRequired,
        imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
        onClickEvent: PropTypes.func.isRequired
    }
    clickBtn = (e) => {
        console.log(e.target.id);
        this.props.onClickEvent(e.target.id);
    }
    // refs.btn = 
    render() {
        const btnList = this.props.imgs.map((item,index) => (<div className="choose-btn" id={index} key={index} onClick={this.clickBtn}></div>))
        return (
            <div className="choose-wrapper">
                {/* <div className="choose-btn"></div> */}
                {btnList}
            </div>
        )
    }
}
