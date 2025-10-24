document.addEventListener('DOMContentLoaded', function() {
    
    // --- SOLUÇÃO DE ANIMAÇÃO (FADE-IN) ---
    const sections = document.querySelectorAll('.info-section');

    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.1 }); 

        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }

    // --- LÓGICA DE ROLAGEM SUAVE (ATUALIZADA) ---
    // Seleciona TODOS os links do header (menu e logo)
    document.querySelectorAll('.nav-links a, .logo-container').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href === '#top') {
                // Se for o logo (#top), rolar para o topo absoluto
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                // Para todos os outros links, usar a lógica de offset
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 100; // Espaço do cabeçalho
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // --- LÓGICA DO FAQ (ACORDEÃO) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

});