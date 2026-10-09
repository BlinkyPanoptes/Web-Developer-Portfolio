document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('projectsTrack');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (!track || !prevBtn || !nextBtn) return;

    const scrollByCard = (direction) => {
        const card = track.querySelector('.project-column');
        if (!card) return;
        const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
        const amount = (card.getBoundingClientRect().width + gap) * direction;
        track.scrollBy({ left: amount, behavior: 'smooth' });
    };

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
});
