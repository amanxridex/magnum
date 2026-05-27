document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animation has triggered
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements that need to fade in
    const elementsToAnimate = document.querySelectorAll('.fade-in-up, .fade-in-right, .fade-in-left');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Next-Level Mouse Spotlight on Glass Panels
    const glassPanels = document.querySelectorAll('.glass-panel, .image-glass-frame, .hero-form-wrapper');
    
    document.addEventListener('mousemove', (e) => {
        glassPanels.forEach(panel => {
            const rect = panel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            panel.style.setProperty('--mouse-x', `${x}px`);
            panel.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Subtle Parallax on Scroll for Ambient Background
    const ambientBg = document.querySelector('.ambient-bg');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if(ambientBg) {
            ambientBg.style.transform = `translateY(${scrolled * 0.15}px) scale(1.05)`;
        }
    });
});
