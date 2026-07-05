import { useState, useEffect, useRef } from 'react';
import { useClock } from '../hooks/useClock';

export default function HeroSection({ onEnterTerror }) {
    const time = useClock();
    const titleRef = useRef(null);

    // glitch 随机触发
    useEffect(() => {
        const title = titleRef.current;
        if (!title) return;
        const original = 'glitch-skew 4s infinite linear alternate-reverse';
        const id = setInterval(() => {
            if (Math.random() >= 0.08) return;
            title.style.animation = 'none';
            title.offsetHeight;
            title.style.animation = 'glitch-skew 0.3s linear';
            setTimeout(() => { title.style.animation = original; }, 300);
        }, 2000);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="home" className="section hero-section">
            <div className="hero-overlay" />
            <div className="hero-content">
                <h1 className="glitch-title" data-text="Haunting Night" ref={titleRef}>
                    Haunting Night
                </h1>
                <p className="hero-subtitle">当午夜钟声敲响，你将不再孤独……</p>
                <div className="clock-box">
                    <span id="clock">{time}</span>
                </div>
                <button className="btn-terror" onClick={onEnterTerror}>
                    进入鬼屋
                </button>
            </div>
            <div className="scroll-hint">
                <span>向下探索</span>
                <div className="scroll-arrow">↓</div>
            </div>
        </section>
    );
}
