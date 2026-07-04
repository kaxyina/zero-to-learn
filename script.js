// ========== 粒子系统 ==========
(function() {
    var canvas = document.getElementById('particles');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var w, h;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var Particle = function() {
        this.reset();
    };
    Particle.prototype.reset = function() {
        this.x = Math.random() * w;
        this.y = h + 20;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.6 + 0.15;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.wobble = Math.random() * 2 - 1;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
    };
    Particle.prototype.update = function() {
        this.y -= this.speed;
        this.x += Math.sin(this.y * this.wobbleSpeed) * this.wobble * 0.4;
        if (this.y < -20) this.reset();
    };
    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(192, 57, 43, ' + this.opacity + ')';
        ctx.fill();
    };

    // Init particles
    for (var i = 0; i < 80; i++) {
        var p = new Particle();
        p.y = Math.random() * h;
        particles.push(p);
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
})();

// ========== 时钟 ==========
function updateClock() {
    var now = new Date();
    var h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var el = document.getElementById('clock');
    if (el) el.textContent = h + ':' + m + ':' + s;
    setTimeout(updateClock, 1000);
}
updateClock();

// ========== 恐怖按钮交互 ==========
(function() {
    var btn = document.getElementById('terrorBtn');
    var overlay = document.getElementById('terrorOverlay');
    var escapeBtn = document.getElementById('btnEscape');

    if (btn && overlay) {
        btn.addEventListener('click', function() {
            overlay.classList.remove('hidden');
            // 播放闪烁声音效果 - 通过快速切换背景模拟
            document.body.style.transition = 'background 0.1s';
            var flashes = 0;
            var flashInterval = setInterval(function() {
                document.body.style.background = flashes % 2 === 0 ? '#1a0000' : '#000';
                flashes++;
                if (flashes >= 8) {
                    clearInterval(flashInterval);
                    document.body.style.background = '';
                    document.body.style.transition = '';
                }
            }, 80);
        });

        escapeBtn.addEventListener('click', function() {
            overlay.classList.add('hidden');
        });
    }
})();

// ========== 导航栏滚动效果 ==========
(function() {
    var navbar = document.getElementById('navbar');
    var links = document.querySelectorAll('.nav-link');
    var sections = [];
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href) {
            var sec = document.querySelector(href);
            if (sec) sections.push({ link: link, section: sec });
        }
    });

    function onScroll() {
        // 导航栏背景
        var scrollY = window.scrollY;
        if (scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');

        // 当前区段高亮
        var current = '';
        sections.forEach(function(item) {
            var top = item.section.offsetTop - 120;
            if (scrollY >= top) current = item.link.getAttribute('href');
        });
        links.forEach(function(l) {
            l.classList.toggle('active', l.getAttribute('href') === current);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 平滑滚动 + 关闭移动菜单
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // 关闭移动菜单
                document.getElementById('navLinks').classList.remove('open');
                document.getElementById('hamburger').classList.remove('active');
            }
        });
    });
})();

// ========== 移动端汉堡菜单 ==========
(function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // 点击菜单外部关闭
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });
})();

// ========== 滚动入场动画 (Intersection Observer) ==========
(function() {
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el) {
        observer.observe(el);
    });
})();

// ========== 标题 Glitch 增强：随机触发 ==========
(function() {
    var title = document.querySelector('.glitch-title');
    if (!title) return;

    setInterval(function() {
        var rand = Math.random();
        if (rand < 0.08) {
            title.style.animation = 'none';
            title.offsetHeight; // reflow
            title.style.animation = 'glitch-skew 0.3s linear';
            setTimeout(function() {
                title.style.animation = 'glitch-skew 4s infinite linear alternate-reverse';
            }, 300);
        }
    }, 2000);
})();

// ========== 卡片悬停视差微动 ==========
(function() {
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('mousemove', function(e) {
            var rect = card.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width - 0.5;
            var y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = 'translateY(-10px) scale(1.02) perspective(800px) rotateX(' + (-y * 6) + 'deg) rotateY(' + (x * 6) + 'deg)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });
})();

// ========== 键盘交互：ESC 逃出鬼屋 ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        var overlay = document.getElementById('terrorOverlay');
        if (overlay && !overlay.classList.contains('hidden')) {
            overlay.classList.add('hidden');
        }
    }
});
