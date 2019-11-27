import React, { Component } from 'react'

import txt from './context'

const ctx = React.createContext();
const ctx1 = txt.ctx1

export default class NewContext extends Component {

    state = {
        a: 123,
        b: 'hello',
        setA: (newA) => {
            this.setState({
                a: newA
            })
        }
    }

    render() {
        return (
            <div>
                <ctx.Provider value={this.state}>
                    <ChildA/>
                </ctx.Provider>
            </div>
        )
    }
}

class ChildA extends React.Component {
    static contextType = ctx;

    render() {
        return (
            <div>
                <h2>
                    {this.context.a}
                </h2>
                <ChildB/>
                {/* <ctx.Consumer>
                    {value => (
                        <>
                            <h2>NewContext中的数据：
                                a: {value.a}, b: {value.b}
                            </h2>
                            <button onClick={() => value.setA(value.a + 1)}>a + 1</button>
                            <ChildB/>
                        </>
                    )}
                </ctx.Consumer> */}
            </div>
        )
    }
}

function ChildB (props,context) {
    return (
        <>
        <h2>
            {context.b}
        </h2>
        {/* <ctx.Consumer>
            {values => (
                <h2>{values.b}</h2>)
            }
        </ctx.Consumer> */}
        <ctx1.Consumer>
            {val => (
                <>
                    <h2>{val.a}</h2>
                    {/* <button onClick={() => val.setA(val.a + 2)}>a + 2</button> */}
                </>
            )}
        </ctx1.Consumer>
        </>
    )
}
const contextType = ctx;




