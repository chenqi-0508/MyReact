import React, { Component } from 'react'
import cxt from './formContext'

export default class FormButton extends Component {
    static contextType = cxt;

    render() {
        return (
            <>
                <button onClick={this.context.submit}>{this.props.children}</button>
            </>
        )
    }
}
