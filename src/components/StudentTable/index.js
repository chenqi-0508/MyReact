import React from 'react'
import './index.css'

export default function StudentTable(props) {
    if (props.stu) {
        const stu = props.stu.map(item => (
            < tr
        key = {item.sNo} >
            < td > {item.sNo} < /td>
            < td > {item.name} < /td>
            < td > {item.sex === 0 ? '男' : '女'} < /td>
            < td > {item.birth} < /td>
            < td > {item.email} < /td>
            < td > < a
        href = {`/students/${item.sNo}`
    }>
        详情 < /a></
        td >
        < /tr>
    ))
        ;
        return (
            < table
        className = "table-wrapper" >
            < thead >
            < tr >
            < th > 学号 < /th>
            < th > 姓名 < /th>
            < th > 性别 < /th>
            < th > 出生年份 < /th>
            < th > 邮箱 < /th>
            < th > 操作 < /th>
            < /tr>
            < /thead>
            < tbody >
            {stu}
            < /tbody>
            < /table>
    )
    } else {
        return (
            < > < />
    )
    }

}
