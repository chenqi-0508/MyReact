import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            <h1>学号：{props.match.params.sNo}</h1>
            <p>详情</p>
        </div>
    )
}
