document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");
    let currentStep = 0;
    let isScrolling = false;

    // 2. Function to change section
    function showSection(index) {
        if (index < 0 || index >= sections.length) return;
        
        // Remove active class from all
        sections.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        
        // Add active to targeted
        sections[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
        
        currentStep = index;
    }

    // 3. Wheel Scroll Handler
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        
        isScrolling = true;
        if (e.deltaY > 0) {
            showSection((currentStep + 1) % sections.length);
        } else {
            showSection((currentStep - 1 + sections.length) % sections.length);
        }
        
        setTimeout(() => isScrolling = false, 1000); // Cooldown transition
    }, { passive: true });

    // 4. Dot Navigation Click
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => showSection(idx));
    });

    // 5. Hexagon Menu Navigation
    document.querySelectorAll('.hexagon-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = parseInt(item.getAttribute('data-target'));
            if (!isNaN(target)) showSection(target);
        });
    });

    // 6. Mobile Touch Support (Swipe Up/Down)
    let touchStartY = 0;
    let touchEndY = 0;

    window.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        if (isScrolling) return;
        
        if (touchEndY < touchStartY - 50) { // Swipe Up
            showSection((currentStep + 1) % sections.length);
        } else if (touchEndY > touchStartY + 50) { // Swipe Down
            showSection((currentStep - 1 + sections.length) % sections.length);
        }
    }, { passive: true });
});