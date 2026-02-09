document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) { lucide.createIcons(); }

    const sections = document.querySelectorAll(".step");
    const dots = document.querySelectorAll(".dot");
    let currentIdx = 0;
    let isLocked = false;
    let touchStartY = 0;

    function changeSlide(newIdx) {
        if (newIdx === currentIdx || newIdx < 0 || newIdx >= sections.length || isLocked) return;

        isLocked = true;
        const prevIdx = currentIdx;
        currentIdx = newIdx;

        sections[prevIdx].classList.remove('active');
        sections[prevIdx].classList.add('exit');
        sections[currentIdx].classList.add('active');

        dots.forEach((dot, i) => { dot.classList.toggle('active', i === currentIdx); });

        setTimeout(() => {
            sections[prevIdx].classList.remove('exit');
            isLocked = false;
        }, 900);
    }

    window.addEventListener('wheel', (e) => {
        if (isLocked) return;
        if (e.deltaY > 0) { if (currentIdx < sections.length - 1) changeSlide(currentIdx + 1); } 
        else { if (currentIdx > 0) changeSlide(currentIdx - 1); }
    }, { passive: true });

    window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('touchend', (e) => {
        if (isLocked) return;
        const delta = touchStartY - e.changedTouches[0].clientY;
        if (Math.abs(delta) > 50) {
            if (delta > 0 && currentIdx < sections.length - 1) changeSlide(currentIdx + 1);
            else if (delta < 0 && currentIdx > 0) changeSlide(currentIdx - 1);
        }
    }, { passive: true });

    dots.forEach((dot, i) => { dot.addEventListener('click', () => changeSlide(i)); });

    window.addEventListener('keydown', (e) => {
        if (isLocked) return;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") changeSlide(currentIdx + 1);
        else if (e.key === "ArrowUp" || e.key === "ArrowLeft") changeSlide(currentIdx - 1);
    });

    window.changeSlide = (newIdx) => changeSlide(newIdx);
});
