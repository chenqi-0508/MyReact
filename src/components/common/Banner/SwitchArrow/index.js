import React, { Component } from 'react'
import './index.css'

export default class SwitchArrow extends Component {
    handleClick = e => {
        const index = e.currentTarget.id;
        this.props.onClickEvent(index);
    }
    render() {
        return (
            <div className="arrow-wrapper">
                <div className="arrow left-wrapper" onClick={this.handleClick} id="left">
                    <span className="left">&lt;</span>
                </div>
                <div className="arrow right-wrapper" onClick={this.handleClick} id="right">
                    <span className="right">&gt;</span>
                </div>
            </div>
        )
    }
}
