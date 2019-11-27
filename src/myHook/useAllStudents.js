import { useState, useEffect } from 'react'
import { getAllStudents } from '../services/student'

export default function useAllStudents() {
    const [resp, setResp] = useState();

    useEffect(() => {
        (async () => {
            const resp = await getAllStudents();
            setResp(resp);
        })();
    }, [])

    return resp;
}
