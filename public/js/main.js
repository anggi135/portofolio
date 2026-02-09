document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");
    let currentStep = 0;
    let isScrolling = false;

    // Fix Mobile VH
    const updateVH = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', updateVH);
    updateVH();

    function showSection(index) {
        sections.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        
        sections[index].classList.add("active");
        dots[index].classList.add("active");
        sections[index].scrollTop = 0; // Reset scroll position
    }

    // Scroll Logic
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        isScrolling = true;
        
        if (e.deltaY > 0 && currentStep < sections.length - 1) {
            currentStep++;
        } else if (e.deltaY < 0 && currentStep > 0) {
            currentStep--;
        }
        
        showSection(currentStep);
        setTimeout(() => { isScrolling = false; }, 800);
    }, { passive: true });

    // Touch Support for Mobile
    let touchStart = 0;
    window.addEventListener('touchstart', (e) => touchStart = e.touches[0].clientY);
    window.addEventListener('touchend', (e) => {
        const touchEnd = e.changedTouches[0].clientY;
        if (touchStart - touchEnd > 80 && currentStep < sections.length - 1) {
            currentStep++;
        } else if (touchEnd - touchStart > 80 && currentStep > 0) {
            currentStep--;
        }
        showSection(currentStep);
    });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentStep = idx;
            showSection(idx);
        });
    });
});
