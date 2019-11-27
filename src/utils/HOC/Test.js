import React, { Component } from 'react'
import LogComp from './LogComp'

function A (props) {
    console.log(props);
return <h1>123{props.txt}</h1>
}

export default class Test extends Component {
    componentDidMount() {
        console.log(this.RefA);
    }
    
    RefA = React.createRef();
    
    render() {
        const WithLogA = LogComp(A);
        return (
            <div>
                <WithLogA ref={this.RefA} txt={123}/>
            </div>
        )
    }
}
