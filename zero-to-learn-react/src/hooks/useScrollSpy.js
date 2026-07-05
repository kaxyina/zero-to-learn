import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 120) {
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            let current = '';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && y >= el.offsetTop - offset) current = id;
            }
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [sectionIds, offset]);

    return active;
}
