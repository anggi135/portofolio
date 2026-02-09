// Global state
let currentStep = 0;
let sections;
let dots;

function showSection(index) {
    sections.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    
    sections[index].classList.add("active");
    dots[index].classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    sections = document.querySelectorAll("section");
    dots = document.querySelectorAll(".dot");
    let isScrolling = false;

    // Scroll Handler
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        isScrolling = true;
        if (e.deltaY > 0) {
            currentStep = (currentStep + 1) % sections.length;
        } else {
            currentStep = (currentStep - 1 + sections.length) % sections.length;
        }
        showSection(currentStep);
        setTimeout(() => isScrolling = false, 1000);
    });

    // Click dots
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentStep = idx;
            showSection(currentStep);
        });
    });

    // Menu Hexagon listener
    // Index + 2 karena menu ada di section index 1, dan kita ingin ke Arsenal (2), Credentials (3), dst.
    document.querySelectorAll('.hexagon-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            currentStep = index + 2; 
            showSection(currentStep);
        });
    });
});