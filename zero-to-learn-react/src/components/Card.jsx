import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Card({ image, alt, title, tag, subtitle, description, link, linkText, isLegend }) {
    const revealRef = useReveal();
    const cardRef = useRef(null);

    const handleMouseMove = e => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        cardRef.current.style.transform =
            `translateY(-10px) scale(1.02) perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    };

    const handleMouseLeave = () => { cardRef.current.style.transform = ''; };

    return (
        <div
            className={`card reveal${isLegend ? ' legend-card' : ''}`}
            ref={el => { revealRef.current = el; cardRef.current = el; }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-img">
                <img src={image} alt={alt} loading="lazy" />
                <div className="card-img-overlay" />
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                {tag && <span className="card-tag">{tag}</span>}
                {subtitle && <span className="card-author">{subtitle}</span>}
                <p>{description}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener" className="card-link">
                        {linkText || '🎬 观看相关视频 →'}
                    </a>
                )}
            </div>
        </div>
    );
}
