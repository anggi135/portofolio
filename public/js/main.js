document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    const sections = document.querySelectorAll("main#slider section");
    const navItems = document.querySelectorAll(".navigation ul li.list");
    let currentStep = 0;
    let isScrolling = false;
    const cooldown = 850; 

    function showSection(index) {
        if (index < 0) index = sections.length - 1;
        if (index >= sections.length) index = 0;
        
        sections.forEach(s => {
            s.classList.remove("active");
            s.scrollTop = 0; 
        });
        navItems.forEach(item => item.classList.remove("active"));
        
        sections[index].classList.add("active");
        if (navItems[index]) navItems[index].classList.add("active");
        
        currentStep = index;
    }

    // Klik Navigasi
    navItems.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(idx);
        });
    });

    // Scroll Wheel
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        const activeSection = sections[currentStep];
        const scrollable = activeSection.querySelector('.custom-scroll, .overflow-y-auto');

        if (scrollable) {
            const isAtBottom = Math.ceil(scrollable.scrollHeight - scrollable.scrollTop) <= scrollable.clientHeight + 1;
            const isAtTop = scrollable.scrollTop === 0;
            if (e.deltaY > 0 && !isAtBottom) return; 
            if (e.deltaY < 0 && !isAtTop) return; 
        }

        isScrolling = true;
        if (e.deltaY > 0) showSection(currentStep + 1);
        else showSection(currentStep - 1);
        
        setTimeout(() => isScrolling = false, cooldown);
    }, { passive: true });

    // ================= KEYBOARD NAVIGATION =================
window.addEventListener("keydown", (e) => {
    if (isScrolling) return;

    // Cegah scroll default browser
    if (
        e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === "PageDown" ||
        e.key === "PageUp"
    ) {
        e.preventDefault();
    } else {
        return;
    }

    const activeSection = sections[currentStep];
    const scrollable = activeSection.querySelector(
        ".custom-scroll, .overflow-y-auto"
    );

    // Kalau ada konten scrollable, hormati scroll internal dulu
    if (scrollable) {
        const atBottom =
            Math.ceil(
                scrollable.scrollHeight - scrollable.scrollTop
            ) <= scrollable.clientHeight + 1;

        const atTop = scrollable.scrollTop === 0;

        if (
            (e.key === "ArrowDown" || e.key === "PageDown") &&
            !atBottom
        )
            return;

        if (
            (e.key === "ArrowUp" || e.key === "PageUp") &&
            !atTop
        )
            return;
    }

    isScrolling = true;

    if (e.key === "ArrowDown" || e.key === "PageDown") {
        showSection(currentStep + 1);
    }

    if (e.key === "ArrowUp" || e.key === "PageUp") {
        showSection(currentStep - 1);
    }

    setTimeout(() => (isScrolling = false), cooldown);
});


    // Touch Mobile
    let touchY = 0;
    window.addEventListener('touchstart', e => touchY = e.touches[0].clientY, { passive: true });
    window.addEventListener('touchend', e => {
        const diff = touchY - e.changedTouches[0].clientY;
        if (isScrolling || Math.abs(diff) < 70) return;
        isScrolling = true;
        if (diff > 0) showSection(currentStep + 1);
        else showSection(currentStep - 1);
        setTimeout(() => isScrolling = false, cooldown);
    }, { passive: true });

    // Hexagon Bridge
    document.querySelectorAll('.hexagon-item').forEach(hex => {
        hex.addEventListener('click', () => {
            const target = parseInt(hex.getAttribute('data-target'));
            if (!isNaN(target)) showSection(target);
        });
    });
});