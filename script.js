document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulasi pengiriman form
        const name = contactForm.querySelector('input[type="text"]').value;
        alert(`Terima kasih, ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`);
        
        contactForm.reset();
    });

    // Smooth scroll untuk navigasi
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
