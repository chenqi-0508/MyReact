import { useEffect } from 'react'

export default function useTimer(func, duration) {
    useEffect(() => {
        const timer = setInterval(() => {
            func();
        }, duration);
        return () => {
            console.log('计时器销毁');
            clearInterval(timer);
        };
    }, [])
}
