import React, {useState} from 'react'
import {Prompt} from 'react-router-dom'

export default function Login() {
    const [msg, setMsg] = useState("");
    return (
        <div>
            <Prompt when={msg !== ""} message={"确定要么？"}/>
            <h1>Login</h1>
            <textarea onChange={e => {
                setMsg(e.target.value)
            }}></textarea>
        </div>
    )
}
