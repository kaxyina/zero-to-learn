/* ===== clock.js — 实时时钟更新 ===== */
export function initClock() {
    const el = document.getElementById('clock');
    if (!el) return;

    const tick = () => {
        const now = new Date();
        const pad = n => String(n).padStart(2, '0');
        el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        setTimeout(tick, 1000);
    };
    tick();
}
