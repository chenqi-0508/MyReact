import React, { Component } from 'react';
import Pager from './Pager';

export default class PagerTest extends Component {
    state = {
        current: 10,
        total: 100,
        size: 10,
        panel: 5
    }
    render() {
        return (
            <Pager {...this.state} onPageChange={this.onPageChange}/>
        )
    }
    onPageChange = (current) => {
        console.log(current);
        this.setState({
            current
        })
    }
}


