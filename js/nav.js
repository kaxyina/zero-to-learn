/* ===== nav.js — 导航栏滚动效果 + 移动端汉堡菜单 ===== */
export function initNav() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    // 构建区段引用
    const sections = [];
    links.forEach(link => {
        const sec = document.querySelector(link.getAttribute('href'));
        if (sec) sections.push({ link, section: sec });
    });

    // 滚动：背景加深 + 高亮当前区段
    const onScroll = () => {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 60);

        let current = '';
        sections.forEach(({ link, section }) => {
            if (y >= section.offsetTop - 120) current = link.getAttribute('href');
        });
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === current));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 平滑滚动 + 关闭移动菜单
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        });
    });

    // 汉堡菜单切换
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // 点击外部关闭
    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });
}
