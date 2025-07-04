document.addEventListener('DOMContentLoaded', function() {

    // ヘッダーのスクロールエフェクト
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ハンバーガーメニューのトグル
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            mainNav.classList.toggle('is-active');
        });

        // ナビゲーションリンククリックでメニューを閉じる
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                mainNav.classList.remove('is-active');
            });
        });
    }

    // スクロールアニメーション
    const animatedElements = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseFloat(entry.target.dataset.animationDelay || 0);
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay * 1000); // Convert seconds to milliseconds
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 特徴カードの3Dチルトエフェクト
    const featureCards = document.querySelectorAll('.feature-card');
    

    featureCards.forEach((card, index) => { // indexを追加
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20; // 回転の感度を調整
            const rotateY = (x - centerX) / -20; // 回転の感度を調整

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

});