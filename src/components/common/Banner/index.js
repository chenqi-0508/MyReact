import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'
import BannerImg from './BannerImg'
import ChooseBtn from './ChooseBtn'
import SwitchArrow from './SwitchArrow'

export default class Banner extends Component {
    static defaultProps = {
        width: 520,
        height: 280,
        imgs: [],
        duration: 500,//每次翻页时间
    }
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        imgs: PropTypes.arrayOf(PropTypes.string).isRequired
    }
    state = {
        curIndex: 0
    }
    //图片张数
    imgLen = this.props.imgs.length;
    //获取BannerImg对象
    getBannerImgRef = (el) => {
        this.bannerImgRef = el;
    }
    //处理箭头按钮事件
    handleArrowClick = (index) => {
        this.setState({
            curIndex: index
        })
        this.bannerImgRef.switchTo(index);
    }
    //处理dot按钮事件
    handleDotClick = (index) => {
        let cur = this.state.curIndex;
        if(index === "left") {
            cur = cur - 1;
            if(cur < 0) {
                cur = this.imgLen - 1;
            }
        }else if (index === "right") {
            cur = (cur + 1) % this.imgLen;
        }
        this.bannerImgRef.switchTo(cur);
        this.setState({
            curIndex: cur
        })
    }

    //自动播放图片
    autoTimer = null;
    autoSwitch = () => {
        clearInterval(this.autoTimer);
        this.autoTimer = setInterval(() => {
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.imgLen;
            if(cur > this.imgLen - 1) {
                cur = 0;
            }
            this.bannerImgRef.switchTo(cur);
            this.setState({
                curIndex: cur
            })
        }, 2000);
    }

    componentDidMount() {
        this.autoSwitch();
    }

    componentWillUnmount() {
        clearInterval(this.autoTimer);
    }
    
    
    render() {
        return (
            <div className="banner-wrapper" onMouseEnter={() => clearInterval(this.autoTimer)} onMouseLeave={() => this.autoSwitch()} 
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    border: "1px solid red",
                    overflow: "hidden"
                }} 
            >

                <BannerImg imgWidth={this.props.width} imgHeight={this.props.height} imgs={this.props.imgs} ref={this.getBannerImgRef}/>

                <ChooseBtn imgLen={this.imgLen} imgs={this.props.imgs} onClickEvent={this.handleArrowClick}/>

                <SwitchArrow onClickEvent={this.handleDotClick}/>
            </div>
        );
    }
}