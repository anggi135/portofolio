document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const slider = document.getElementById('slider');
    const sections = document.querySelectorAll(".step");
    const dots = document.querySelectorAll(".dot");
    let currentIdx = 0;
    let isWaiting = false;

    // Definisikan rotasi untuk setiap sesi agar terasa 3D
    const rotations = [
        "rotateX(0deg) rotateY(0deg) translateZ(0px)",     // Hero
        "rotateX(90deg) translateY(-500px) translateZ(500px)", // Arsenal
        "rotateY(-90deg) translateX(500px) translateZ(500px)", // Gallery
        "rotateX(-90deg) translateY(500px) translateZ(500px)"  // Contact
    ];

    function update3D() {
        // Putar kontainer utama
        slider.style.transform = rotations[currentIdx];
        
        // Update class active & dots
        sections.forEach((s, i) => {
            s.classList.toggle('active', i === currentIdx);
            dots[i].classList.toggle('active', i === currentIdx);
        });
    }

    window.addEventListener('wheel', (e) => {
        if (isWaiting) return;
        
        isWaiting = true;
        if (e.deltaY > 0) {
            currentIdx = (currentIdx + 1) % sections.length;
        } else {
            currentIdx = (currentIdx - 1 + sections.length) % sections.length;
        }

        update3D();

        setTimeout(() => { isWaiting = false; }, 1200); // Sesuai speed CSS
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIdx = i;
            update3D();
        });
    });
});
