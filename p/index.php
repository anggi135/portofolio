<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anggi Web Dev | Premium Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;700;800&display=swap');
        
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #050505;
            color: white;
            overflow-x: hidden;
        }

        /* Efek Glassmorphism Custom */
        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Animasi 3D Hover */
        .cert-card:hover {
            transform: translateY(-10px) rotateX(5deg) rotateY(2deg);
            border-color: #f97316;
            box-shadow: 0 20px 40px rgba(249, 115, 22, 0.15);
        }

        /* Smooth Section Transition */
        section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 80px 20px;
            perspective: 1000px;
        }

        .bg-gradient-glow {
            background: radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 70%);
        }

        /* Testimonial Track Animation */
        .testi-track {
            display: flex;
            gap: 20px;
            animation: scroll 40s linear infinite;
            width: max-content;
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        /* Floating Animation */
        .float-anim {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }
    </style>
</head>
<body class="bg-black">

<div class="fixed top-6 right-6 z-50 glass-card px-4 py-2 rounded-full flex items-center gap-3">
    <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
    <span class="text-[10px] font-bold uppercase tracking-tighter">Available for Freelance</span>
</div>

<main>
    <section class="relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-glow float-anim"></div>
        <div class="z-10 text-center">
            <p class="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase mb-4">Web Developer & UI/UX Designer</p>
            <h1 class="text-6xl md:text-[8rem] font-extrabold leading-none tracking-tighter mb-6">
                ANGGI<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-white/5" style="-webkit-text-stroke: 1px rgba(255,255,255,0.2);">Web Dev</span>
            </h1>
            <p class="text-slate-400 max-w-lg mx-auto text-sm md:text-lg mb-10 px-4">
                Membangun pengalaman digital yang memukau melalui website portofolio profesional dan undangan digital interaktif yang berkesan.
            </p>
            <div class="animate-bounce mt-10 opacity-30">
                <i data-lucide="chevrons-down" class="mx-auto w-8 h-8"></i>
            </div>
        </div>
    </section>

    <section class="bg-[#080808]">
        <div class="max-w-6xl w-full mx-auto px-6">
            <h2 class="text-3xl md:text-5xl font-black mb-16 text-center uppercase">Professional <span class="text-orange-500 italic">Certifications</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="cert-card glass-card p-8 rounded-[32px] relative group">
                    <div class="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                        <i data-lucide="shield-check" class="text-orange-500"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-3">Certified Cyber sentinel secure</h4>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Penguasaan teknik penetration testing, defend dan identifikasi kerentanan sistem sesuai standar industri.</p>
                    <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Issued: 2024</div>
                </div>
                <div class="cert-card glass-card p-8 rounded-[32px] border-orange-500/30">
                    <div class="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6">
                        <i data-lucide="lock" class="text-orange-500"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-3">Web Security Expert</h4>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Spesialisasi dalam mitigasi OWASP Top 10 dan pengamanan arsitektur aplikasi web modern.</p>
                    <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Issued: 2025</div>
                </div>
                <div class="cert-card glass-card p-8 rounded-[32px]">
                    <div class="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6">
                        <i data-lucide="server" class="text-orange-500"></i>
                    </div>
                    <h4 class="text-2xl font-bold mb-3">Network Security</h4>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6">Keahlian dalam mengamankan infrastruktur jaringan dan manajemen akses kontrol yang ketat.</p>
                    <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Issued: 2023</div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="w-full px-4">
            <h2 class="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tighter">Featured <span class="text-orange-500 italic">Works</span></h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="overflow-hidden rounded-2xl aspect-video glass-card">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" class="w-full h-full object-cover hover:scale-110 transition duration-700 grayscale hover:grayscale-0">
                </div>
                <div class="overflow-hidden rounded-2xl aspect-video glass-card">
                    <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=600" class="w-full h-full object-cover hover:scale-110 transition duration-700 grayscale hover:grayscale-0">
                </div>
                </div>
        </div>
    </section>

    <section class="relative">
        <div class="max-w-4xl w-full mx-auto px-6 z-10">
            <div class="glass-card p-10 md:p-20 rounded-[40px] border-t-orange-500/50">
                <div class="text-center mb-12">
                    <h2 class="text-4xl md:text-6xl font-black uppercase mb-4">Start a <span class="text-orange-500 italic">Project</span></h2>
                    <p class="text-slate-400">Diskusikan ide website atau undangan digital impian Anda.</p>
                </div>
                <div class="grid md:grid-cols-2 gap-10">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <i data-lucide="phone" class="text-orange-500"></i>
                            <span class="font-mono text-sm">+62 8211 431 6790</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <i data-lucide="instagram" class="text-orange-500"></i>
                            <span class="text-sm">@anggi.prayitnow</span>
                        </div>
                    </div>
                    <form class="space-y-4">
                        <input type="text" placeholder="Name" class="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none transition">
                        <textarea placeholder="Message" class="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-orange-500 outline-none h-32"></textarea>
                        <button class="w-full bg-orange-600 hover:bg-orange-500 py-4 rounded-xl font-bold uppercase tracking-widest transition">Send Brief</button>
                    </form>
                </div>
            </div>
            
            <footer class="mt-20 text-center pb-10">
                <div class="flex justify-center gap-8 mb-6">
                    <i data-lucide="github" class="text-slate-500 hover:text-white cursor-pointer"></i>
                    <i data-lucide="linkedin" class="text-slate-500 hover:text-white cursor-pointer"></i>
                </div>
                <p class="text-[10px] text-slate-600 font-mono tracking-widest uppercase">© 2026 Anggi Prayitno — Securing the Digital Frontier</p>
            </footer>
        </div>
    </section>
</main>

<script>
    lucide.createIcons();
    
    // Simple 3D Tilt Effect on mouse move (Optional Enhancement)
    document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let midX = card.offsetWidth / 2;
            let midY = card.offsetHeight / 2;
            card.style.transform = `rotateX(${(y - midY) / 10}deg) rotateY(${(midX - x) / 10}deg) translateY(-10px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateX(0) rotateY(0) translateY(0)`;
        });
    });
</script>
</body>
</html>
