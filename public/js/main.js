document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const sections = document.querySelectorAll(".step");
    const dots = document.querySelectorAll(".dot");
    let currentIdx = 0;
    let isLocked = false;

    function changeSlide(newIdx) {
        if (newIdx === currentIdx) return;

        const prevIdx = currentIdx;
        currentIdx = newIdx;

        // Beri class exit pada slide yang mau hilang
        sections[prevIdx].classList.remove('active');
        sections[prevIdx].classList.add('exit');

        // Aktifkan slide baru
        sections[currentIdx].classList.add('active');

        // Bersihkan class exit setelah animasi selesai
        setTimeout(() => {
            sections[prevIdx].classList.remove('exit');
        }, 1200);

        // Update Dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIdx);
        });
    }

    window.addEventListener('wheel', (e) => {
        if (isLocked) return;
        
        isLocked = true;
        if (e.deltaY > 0) {
            if (currentIdx < sections.length - 1) changeSlide(currentIdx + 1);
        } else {
            if (currentIdx > 0) changeSlide(currentIdx - 1);
        }

        setTimeout(() => { isLocked = false; }, 1300);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => changeSlide(i));
    });
});
