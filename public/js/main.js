document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");
    let currentStep = 0;
    let isScrolling = false;

    function showSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        sections.forEach(s => {
            s.classList.remove("active");
            // Reset scroll ke posisi 0 dengan behavior instan agar tidak terlihat melompat
            s.scrollTop = 0;
            s.scrollTo({ top: 0, behavior: 'instant' }); 
        });
        
        dots.forEach(d => d.classList.remove("active"));
        
        sections[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
        
        currentStep = index;
    }

    function handleNavigation(direction) {
        const activeSection = sections[currentStep];
        
        // Toleransi 5px untuk browser mobile yang sering berubah ukuran viewport-nya
        const isAtBottom = Math.abs(activeSection.scrollHeight - activeSection.clientHeight - activeSection.scrollTop) < 5;
        const isAtTop = activeSection.scrollTop <= 5;

        if (isScrolling) return;

        if (direction > 0 && isAtBottom) {
            isScrolling = true;
            showSection((currentStep + 1) % sections.length);
            setTimeout(() => isScrolling = false, 1100);
        } else if (direction < 0 && isAtTop) {
            isScrolling = true;
            showSection((currentStep - 1 + sections.length) % sections.length);
            setTimeout(() => isScrolling = false, 1100);
        }
    }

    // Scroll Wheel Desktop
    window.addEventListener('wheel', (e) => {
        if (isScrolling) e.preventDefault();
        handleNavigation(e.deltaY);
    }, { passive: false });

    // Dot Click
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => showSection(idx));
    });

    // Hexagon Click
    document.querySelectorAll('.hexagon-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = parseInt(item.getAttribute('data-target'));
            if (!isNaN(target)) showSection(target);
        });
    });

    // Mobile Touch
    let touchStartY = 0;
    window.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', e => {
        let touchEndY = e.changedTouches[0].screenY;
        let deltaY = touchStartY - touchEndY;
        if (Math.abs(deltaY) > 70) {
            handleNavigation(deltaY);
        }
    }, { passive: true });
});