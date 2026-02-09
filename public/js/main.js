document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let current = 0;
    let isTransitioning = false;

    window.goToSlide = (index) => {
        if (isTransitioning || index === current) return;
        isTransitioning = true;

        // Reset All
        slides[current].classList.add('exit');
        slides[current].classList.remove('active');
        
        setTimeout(() => {
            slides.forEach(s => s.classList.remove('exit', 'active'));
            slides[index].classList.add('active');
            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');
            current = index;
            isTransitioning = false;
        }, 800);
    };

    // Wheel Scroll Support
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            let next = (current + 1) % slides.length;
            goToSlide(next);
        } else {
            let prev = (current - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }
    });

    // Touch Support Mobile
    let startY = 0;
    window.addEventListener('touchstart', e => startY = e.touches[0].clientY);
    window.addEventListener('touchend', e => {
        let endY = e.changedTouches[0].clientY;
        if (startY - endY > 50) goToSlide((current + 1) % slides.length);
        else if (endY - startY > 50) goToSlide((current - 1 + slides.length) % slides.length);
    });
});
