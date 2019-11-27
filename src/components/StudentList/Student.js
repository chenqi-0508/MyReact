import React from 'react'
import PropTypes from 'prop-types'

export default function Student(props) {
    const data = props.stu.map(it => (
        <li key={it.id}>
            姓名：{it.name}&nbsp;&nbsp;
            性别：{it.sex === 1 ? "男" : "女"}&nbsp;&nbsp;
            生日：{it.birth}
        </li>
    ))
    return (
        <ul>
            {data}
        </ul>
    )
}

Student.defaultProps = {
    stu: {}
}

Student.propTypes = {
    stu: PropTypes.array
}
