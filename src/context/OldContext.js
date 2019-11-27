import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class OldContext extends Component {
    state = {
        a: 123,
        b: 'abc'
    }

    static childContextTypes = {
        a: PropTypes.number.isRequired,
        b: PropTypes.string,
        setA: PropTypes.func,
        setB: PropTypes.func
    }

    getChildContext() {
        return {
            a: this.state.a,
            b: this.state.b,
            setA: (newA) => {
                this.setState({
                    a: newA
                })
            },
            setB: (newB) => {
                this.setState({
                    b: newB
                })
            }
        }
    }

    render() {
        return (
            <div>
                <ChildA/>
            </div>
        )
    }
}

class ChildA extends React.Component {
    static contextTypes = {
        a: PropTypes.number,
        b: PropTypes.string,
        setA: PropTypes.func
    }

    render() {
        return (
            <div>
                <h1>ChildA</h1>
                <h2>{this.context.a}</h2>
                <h2>{this.context.b}</h2>
                <button onClick={() => {
                    this.context.setA(this.context.a + 1)
                }}>a + 1</button>
                <ChildB/>
            </div>
        )
    }
}

function ChildB(props,context) {
    return (
        <div>
            <h1>ChildB</h1>
            <h2>a: {context.a}</h2>
            <h2>b: {context.b}</h2>
            <button onClick={() => {
                context.setB(context.b + 2)
            }}>b + 2</button>
        </div>
    )
}
ChildB.contextTypes = {
    a: PropTypes.number,
    b: PropTypes.string,
    setB: PropTypes.func
}

