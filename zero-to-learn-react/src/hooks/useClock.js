import { useState, useEffect } from 'react';

export function useClock() {
    const [time, setTime] = useState('00:00:00');

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const pad = n => String(n).padStart(2, '0');
            setTime(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}
