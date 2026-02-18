const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            
            skillItems.forEach(item => {
                const percent = item.getAttribute('data-percent');
                const progressBar = item.querySelector('.skill-progress-cyber'); // Ubah ke class cyber
                const percentText = item.querySelector('.skill-percent');

                progressBar.style.transition = 'width 1.5s ease-in-out';
                progressBar.style.width = percent + '%';

                let count = 0;
                const speed = 2000 / percent; 
                const updateCount = () => {
                    if (count < percent) {
                        count++;
                        percentText.innerText = count + '%';
                        setTimeout(updateCount, speed);
                    }
                };
                updateCount();
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) skillObserver.observe(skillsSection);

const container = document.getElementById("particles");

if (container) {

    const codes = [
  '{', '}', '$', '?', '0', '1', '[', ']', ';', '_',
  '>', '<', '(!)', '&', '%', '#', '@', '*', '+', '-',
  '/', '\\', '|', '^', '~', 'sudo', 'root', '0x', '</>'
];


    function createParticle() {

        const particle = document.createElement("div");
        particle.classList.add("particle");

        // random text
        particle.innerText = codes[Math.floor(Math.random() * codes.length)];

        // random horizontal position
        particle.style.left = Math.random() * 100 + "vw";

        // random size
        particle.style.fontSize = (12 + Math.random() * 10) + "px";

        // random animation duration
        const duration = 10 + Math.random() * 10;
        particle.style.animation = `floatCode ${duration}s linear forwards`;

        container.appendChild(particle);

        // remove after animation
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // create particles every 800ms
    setInterval(createParticle, 800);
}
