import { useRef, useEffect } from 'react';

export default function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const particles = [];
        let w, h, animId;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * h;
            }
            reset() {
                this.x = Math.random() * w;
                this.y = h + 20;
                this.size = Math.random() * 2 + 0.5;
                this.speed = Math.random() * 0.6 + 0.15;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.wobble = Math.random() * 2 - 1;
                this.wobbleSpeed = Math.random() * 0.02 + 0.005;
            }
            update() {
                this.y -= this.speed;
                this.x += Math.sin(this.y * this.wobbleSpeed) * this.wobble * 0.4;
                if (this.y < -20) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(192, 57, 43, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 80; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            for (const p of particles) { p.update(); p.draw(); }
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} id="particles" />;
}
