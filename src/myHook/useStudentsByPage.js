import { useState, useEffect } from 'react'
import { getStudentInfo } from '../services/student'

export default function useStudentsByPage(page, limit) {
    const [resp, setResp] = useState();

    useEffect(() => {
        (async () => {
            const stus = await getStudentInfo(page, limit);
            setResp(stus);
        })();
    }, [page, limit])

    return resp;
}
