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