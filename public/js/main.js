document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const sections = document.querySelectorAll(".step");
    const dots = document.querySelectorAll(".dot");
    let currentIdx = 0;
    let isLocked = false;
    let touchStartY = 0;

    function changeSlide(newIdx) {
        if (newIdx === currentIdx || newIdx < 0 || newIdx >= sections.length) return;

        const prevIdx = currentIdx;
        currentIdx = newIdx;

        // Slide out old
        sections[prevIdx].classList.remove('active');
        sections[prevIdx].classList.add('exit');

        // Slide in new
        sections[currentIdx].classList.add('active');

        // Clean up
        setTimeout(() => {
            sections[prevIdx].classList.remove('exit');
        }, 1000);

        // Update dots
        dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIdx));
    }

    // Wheel (Desktop)
    window.addEventListener('wheel', (e) => {
        if (isLocked) return;
        isLocked = true;
        if (e.deltaY > 0) changeSlide(currentIdx + 1);
        else changeSlide(currentIdx - 1);
        setTimeout(() => { isLocked = false; }, 1100);
    }, { passive: true });

    // Touch (Mobile)
    window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('touchend', (e) => {
        const delta = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(delta) > 50) {
            if (delta > 0) changeSlide(currentIdx + 1);
            else changeSlide(currentIdx - 1);
        }
    }, { passive: true });

    // Dot Navigation
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => changeSlide(i));
    });

    // Keyboard
    window.addEventListener('keydown', (e) => {
        if (e.key === "ArrowDown") changeSlide(currentIdx + 1);
        if (e.key === "ArrowUp") changeSlide(currentIdx - 1);
    });

    // Global Exposure agar onclick di HTML jalan
    window.changeSlide = (newIdx) => {
        changeSlide(newIdx);
    };
});
