import { useState, useEffect, useCallback } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TerrorOverlay from './components/TerrorOverlay';
import LiteratureSection from './components/LiteratureSection';
import LegendsSection from './components/LegendsSection';
import AboutSection from './components/AboutSection';

/* ===== 全局样式 ===== */
import './styles/base.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/animations.css';
import './styles/responsive.css';

export default function App() {
    const [terrorVisible, setTerrorVisible] = useState(false);

    const enterTerror = useCallback(() => {
        // 闪屏效果
        document.body.style.transition = 'background 0.1s';
        let flashes = 0;
        const id = setInterval(() => {
            document.body.style.background = flashes % 2 === 0 ? '#1a0000' : '#000';
            if (++flashes >= 8) {
                clearInterval(id);
                document.body.style.background = '';
                document.body.style.transition = '';
            }
        }, 80);
        setTerrorVisible(true);
    }, []);

    const closeTerror = useCallback(() => setTerrorVisible(false), []);

    // ESC 键退出
    useEffect(() => {
        const onKey = e => { if (e.key === 'Escape') setTerrorVisible(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <ParticleCanvas />
            <Navbar />
            <HeroSection onEnterTerror={enterTerror} />
            <TerrorOverlay visible={terrorVisible} onClose={closeTerror} />
            <LiteratureSection />
            <LegendsSection />
            <AboutSection />
        </>
    );
}
