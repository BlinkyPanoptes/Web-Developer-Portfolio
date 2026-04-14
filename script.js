document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.querySelector('.button2');
    const closeBtn = document.querySelector('.close-btn');
    const contactForm = modal.querySelector('form');
    const phoneInput = document.getElementById('phone');

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 11);
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = this.querySelector('input[type="submit"]');
        const originalText = btn.value;

        btn.value = "Sending...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulated submission
        setTimeout(() => {
            alert("Thanks! Your message has been sent.");
            closeModal();
            this.reset();
            btn.value = originalText;
            btn.style.opacity = "1";
            btn.disabled = false;
        }, 1500);
    });
});