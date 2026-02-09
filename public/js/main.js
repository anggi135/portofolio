document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    lucide.createIcons();

    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");
    let currentStep = 0;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        
        sections[index].classList.add("active");
        dots[index].classList.add("active");
    }

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
        
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Cooldown scroll
    });

    // Click dots to navigate
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentStep = idx;
            showSection(currentStep);
        });
    });

    // Optional: Keyboard Navigation
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            currentStep = (currentStep + 1) % sections.length;
            showSection(currentStep);
        } else if (e.key === 'ArrowUp') {
            currentStep = (currentStep - 1 + sections.length) % sections.length;
            showSection(currentStep);
        }
    });
});
<<<<<<< HEAD

//Event listener menu
document.querySelectorAll('.hexagon-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        // Misalnya: index 0 (Welcome) ke section 0, index 1 (About) ke section 2
        currentStep = index + 1; // Sesuaikan dengan urutan sectionmu
        showSection(currentStep);
    });
});
=======
>>>>>>> b7a70077371f84636d3483962536a82a56ce63ad
