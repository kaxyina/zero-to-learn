/* ===== main.js — ES6 入口：统一导入并初始化所有模块 ===== */
import { initParticles } from './particles.js';
import { initClock }     from './clock.js';
import { initNav }       from './nav.js';
import { initTerror }    from './terror.js';
import { initReveal }    from './reveal.js';
import { initGlitch }    from './glitch.js';
import { initCardsHover }from './cards-hover.js';

initParticles();
initClock();
initNav();
initTerror();
initReveal();
initGlitch();
initCardsHover();
