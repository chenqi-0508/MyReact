import React, {Component} from 'react'
import './index.css'

export default class Modal extends Component {
    render() {
        return (
            // <div className="modal" onClick={(e) => {this.fn(e)}}>
            < div
        className = "modal" >
            < div
        className = "modal-content" >
            < h2 > Loading
    ...<
        /h2>
        {/* <button className="modal-btn" onClick={this.props.hideModal}>隐藏蒙层</button> */
        }
    <
        /div>
        < /div >
    )
    }

    // fn = (e) => {
    //     if (e.target.className === "modal") {
    //         this.props.hideModal();
    //     }
    // }
}
