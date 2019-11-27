import React, { useState, useCallback } from 'react'

export default function App() {
    console.log("App render");
    const [txt, setTxt] = useState(1);
    const [n, setN] = useState(0);

    const handleClick = useCallback(
        () => {
            setTxt(txt + 1)
        },
        [txt],
    )

    return (
        <div>
            <Test txt={txt} onClick={handleClick} />
            <input type="number" value={n} onChange={() => {
                setN(n + 1);
            }} />
        </div>
    )
}

class Test extends React.PureComponent {
    render() {
        console.log("Test render");
        return (
            <>
                <h1>{this.props.txt}</h1>
                <button onClick={this.props.onClick}>add</button>
            </>
        )
    }

}
