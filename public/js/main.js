document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Ikon Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    const sections = document.querySelectorAll(".step");
    const dots = document.querySelectorAll(".dot");
    let currentIdx = 0;
    let isLocked = false;
    let touchStartY = 0;

    /**
     * Fungsi Utama Navigasi Slide
     * @param {number} newIdx - Index tujuan slide
     */
    function changeSlide(newIdx) {
        // Validasi: Jangan jalan jika sedang transisi atau index tidak valid
        if (newIdx === currentIdx || newIdx < 0 || newIdx >= sections.length || isLocked) return;

        isLocked = true; // Kunci scroll selama transisi
        const prevIdx = currentIdx;
        currentIdx = newIdx;

        // Slide out (Efek Maju/Zoom Out)
        sections[prevIdx].classList.remove('active');
        sections[prevIdx].classList.add('exit');

        // Slide in (Efek Muncul dari belakang)
        sections[currentIdx].classList.add('active');

        // Update Navigasi Dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIdx);
        });

        // Bersihkan class exit dan buka kunci setelah animasi selesai
        setTimeout(() => {
            sections[prevIdx].classList.remove('exit');
            isLocked = false;
        }, 1100); // Durasi sedikit lebih lama dari transisi CSS agar smooth
    }

    // 2. Desktop: Mouse Wheel Scroll
    window.addEventListener('wheel', (e) => {
        if (isLocked) return;
        
        if (e.deltaY > 0) {
            if (currentIdx < sections.length - 1) changeSlide(currentIdx + 1);
        } else {
            if (currentIdx > 0) changeSlide(currentIdx - 1);
        }
    }, { passive: true });

    // 3. Mobile: Touch/Swipe Handler
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        if (isLocked) return;
        
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY - touchEndY;

        if (Math.abs(delta) > 50) { // Sensitivitas swipe
            if (delta > 0) {
                if (currentIdx < sections.length - 1) changeSlide(currentIdx + 1);
            } else {
                if (currentIdx > 0) changeSlide(currentIdx - 1);
            }
        }
    }, { passive: true });

    // 4. Navigasi Klik Dot (Samping)
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            if (!isLocked) changeSlide(i);
        });
    });

    // 5. Navigasi Keyboard (Panah Atas/Bawah)
    window.addEventListener('keydown', (e) => {
        if (isLocked) return;
        
        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            if (currentIdx < sections.length - 1) changeSlide(currentIdx + 1);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            if (currentIdx > 0) changeSlide(currentIdx - 1);
        }
    });

    // 6. Global Exposure
    // Agar atribut onclick="changeSlide(1)" di menu hexagon HTML bisa terpanggil
    window.changeSlide = (newIdx) => {
        changeSlide(newIdx);
    };
});
