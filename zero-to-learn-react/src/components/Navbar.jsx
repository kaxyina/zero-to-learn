import { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
    { id: 'home',       label: '🏚️ 鬼屋' },
    { id: 'literature', label: '📚 恐怖文学' },
    { id: 'legends',    label: '👁️ 都市传说' },
    { id: 'about',      label: 'ℹ️ 关于' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const active = useScrollSpy(NAV_ITEMS.map(i => i.id));

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const close = e => { if (!e.target.closest('#navbar')) setMenuOpen(false); };
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    const scrollTo = id => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="nav-inner">
                <a href="#home" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
                    👁️ Haunting Night
                </a>
                <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
                    {NAV_ITEMS.map(item => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`nav-link${active === item.id ? ' active' : ''}`}
                                onClick={e => { e.preventDefault(); scrollTo(item.id); }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className={`hamburger${menuOpen ? ' active' : ''}`}
                    id="hamburger" aria-label="菜单"
                    onClick={() => setMenuOpen(v => !v)}
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
