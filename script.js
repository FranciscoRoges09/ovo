document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('is-open');
            navToggle.classList.toggle('is-open');
        });

        // Fechar o menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('is-open')) {
                    navMenu.classList.remove('is-open');
                    navToggle.classList.remove('is-open');
                }
            });
        });
    }

    // Funcionalidade para o FAQ (opcional)
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('is-active');
        });
    });
});