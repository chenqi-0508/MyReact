import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Consumer } from './formContext'
import cxt from './formContext'

export default class FormInput extends Component {
    static defaultProps = {
        type: 'text'
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    }

    static contextType = cxt

    render() {
        return (
            <>
                {/* <Consumer>
                    {val => {
                        return (
                            <input 
                                type={this.props.type} 
                                name={this.props.name} 
                                value={val.formData[this.props.name]}
                                onChange={(e) => {
                                    val.changeFormData(e.target.name, e.target.value);
                                }}
                            />
                        )
                    }}
                </Consumer> */}

                <input
                    type={this.props.type} 
                    name={this.props.name} 
                    value={this.context.formData[this.props.name] || ""} 
                    onChange={ e => this.context.changeFormData(this.props.name, e.target.value)}
                />
            </>
        )
    }
}
