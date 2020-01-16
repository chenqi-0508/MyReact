import React, {Component} from 'react'
import './Test.css'
import Modal from './modal'

export default class Test extends Component {
    state = {
        modalShow: false
    }
    hideModal = () => {
        this.setState({
            modalShow: false
        })
    }

    render() {
        return (
            < div
        className = "wrapper" >
            < img
        src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573663282389&di=245026594f70f824af9ceecc5d7d371a&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-38bdac71902e51febd1ab576a32c0616_1200x500.jpg"
        alt = "" / >
            {/**添加蒙层 */}
        {
            this.state.modalShow ?
        <
            Modal
            hideModal = {this.hideModal}
            /> : null}
            < button
            onClick = {()
        =>
            {
                this.setState({modalShow: true})
            }
        }>
            显示蒙层 < /button>
            < /div>
        )
    }
}



