import Banner from './index'
import React, { Component } from 'react'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

export default class Test extends Component {
    state = {
        width: 520,
        height: 280,
        imgs: [img1,img2,img3,img4,img5,img6]
    }
    render() {
        return (
            <div>
                <Banner 
                    {...this.state}
                />
            </div>
        )
    }
}
