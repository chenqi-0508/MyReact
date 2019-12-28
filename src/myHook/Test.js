import React, {useState, useContext, useEffect, useRef} from 'react'
import useAllStudents from './useAllStudents'
import useStudentsByPage from './useStudentsByPage'
import useTimer from './useTimer'

export function Test3() {
    useTimer(() => {
        console.log('计时器启动，运行中。。。');
    }, 1000);
    return (
        <div>123</div>
    )
}


export function Test2() {
    const resp = useAllStudents();
    let stuList = null;
    if (resp) {
        stuList = resp.map(it => (
            <li key={it.id}>{it.name}</li>
        ));
    }
    return (
        <ul>
            {stuList}
        </ul>
    )
}

export function Test() {
    const [page, setPage] = useState(1);
    const resp = useStudentsByPage(page, 10);

    const timerRef = useRef(page);
    useEffect(() => {
        const timer = setInterval(() => {
            timerRef.current++;
            setPage(timerRef.current);
            if (timerRef.current === 5) {
                clearInterval(timer);
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    if (resp) {
        const stuList = resp.findByPage.map(it => (
            <li key={it.id}>{it.name}</li>
        ));

        return (
            <>
                <p>总条数：{resp.cont}</p>
                <p>当前页数： {page}</p>
                <ul>
                    {stuList}
                </ul>
                <input id="turnPage" type="number" value={page} onChange={(e) => {
                    setPage(parseInt(e.target.value))
                }} />
                <ctx.Provider value={resp.cont}>
                    <CompA />
                </ctx.Provider>
            </>
        )
    } else {
        return null;
    }
}

const ctx = React.createContext();

const CompA = () => {
    const value = useContext(ctx);
    return (
        <h1>total: {value}</h1>
    )
}
