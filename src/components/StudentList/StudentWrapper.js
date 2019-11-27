import React, { useState, useEffect } from 'react'
import Student from './Student'
import { getStudentInfo } from '../../services/student'
import Pager from '../common/Pager/Pager'

export default function StudentWrapper() {
    const [sutdents, setSutdents] = useState([])

    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [size, setSize] = useState(10);
    const [panel, setPanel] = useState(5);

    useEffect(() => {
        (async function () {
            const stuList = await getStudentInfo(page, size);
            setSutdents(stuList.findByPage);
            setTotal(stuList.cont);
        })();
    }, [page, size])

    return (
        <div>
            <Student stu={sutdents} />
            <Pager
                current={page}
                total={total}
                size={size}
                panel={panel}
                onPageChange={(cur) => {
                    setPage(cur);
                }}
            />
            <p>
                每页显示条数： <input type="number" value={size} onChange={(e) => {
                    setSize(parseInt(e.target.value));
                }} />
            </p>
            <p>
                最多显示页数： <input type="number" value={panel} onChange={(e) => {
                    setPanel(parseInt(e.target.value));
                }} />
            </p>
        </div>
    )
}
