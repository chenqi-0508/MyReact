import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BannerImg extends Component {
    static defaultProps = {
        imgWidth: 520,
        imgHeight: 280,
        imgs: [],
        duration: 500
    }
    static propTypes = {
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.number
    }
    state = {
        cur: 0,
        marginLeft: 0
    }
    //获取imgwrpaaer的ref
    getRef = el => {
        this.imgWrapperRef = el;
    }
    //定时器
    timer = null;

    //跳转到指定图片
    switchTo = (index) => {
        let targetWidth = -this.props.imgWidth * index;
        let curWidth = parseFloat( window.getComputedStyle(this.imgWrapperRef).marginLeft );
        //需要移动的距离
        let distence = targetWidth - curWidth;
        //需要移动的次数
        let moveCount = Math.floor( this.props.duration / 16 );
        //每次移动的距离
        let dis = Math.floor( distence / moveCount );
        //计数器
        let moveNum = 0;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curWidth = curWidth + dis;
            this.imgWrapperRef.style.marginLeft = curWidth + 'px';
            moveNum ++;
            if(moveNum === moveCount) {
                clearInterval(this.timer);
                this.setState({
                    marginLeft: targetWidth
                })
            }
        }, 16);
        this.setState({
            cur: index
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    
    render() {
        const imgLen = this.props.imgs.length;//图片张数
        const imgList = this.props.imgs.map((item,index) => (
            <img key={index} src={item} alt="" 
                style={{
                    width: this.props.imgWidth,
                    height: this.props.imgHeight
                }}/>)
            )
        
        

        return (
            <div className="img-wrapper" ref={this.getRef} style={{
                width: this.props.imgWidth * imgLen,
                height: this.props.imgHeight,
                marginLeft: this.state.marginLeft
            }}>
                {imgList}
            </div>
        )
    }
}
