/* ===== glitch.js — 标题随机故障闪烁 ===== */
export function initGlitch() {
    const title = document.querySelector('.glitch-title');
    if (!title) return;

    const originalAnim = 'glitch-skew 4s infinite linear alternate-reverse';

    setInterval(() => {
        if (Math.random() >= 0.08) return;
        title.style.animation = 'none';
        title.offsetHeight; // 强制回流
        title.style.animation = 'glitch-skew 0.3s linear';
        setTimeout(() => { title.style.animation = originalAnim; }, 300);
    }, 2000);
}
