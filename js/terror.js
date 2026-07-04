/* ===== terror.js — 鬼屋按钮 + 恐怖覆盖层 + ESC 退出 ===== */
export function initTerror() {
    const btn = document.getElementById('terrorBtn');
    const overlay = document.getElementById('terrorOverlay');
    const escapeBtn = document.getElementById('btnEscape');

    if (!btn || !overlay || !escapeBtn) return;

    btn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
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
    });

    const hideOverlay = () => overlay.classList.add('hidden');
    escapeBtn.addEventListener('click', hideOverlay);

    // ESC 键退出
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
            hideOverlay();
        }
    });
}
