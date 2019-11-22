import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './formContext'
import FormInput from './FormInput'
import FormButton from './FormButton'

export default class Form extends Component {
    state = {
        formData: {
            userName: 'tom',
            passWord: 123456
        },
        changeFormData: (name, val) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit(this.state.formData);
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <>
                <Provider value={this.state}>
                    {this.props.children}
                </Provider>
            </>
        )
    }
}

Form.input = FormInput;
Form.button = FormButton;
