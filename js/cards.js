window.onload = function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.transition = 'all 0.6s ease';
        card.style.transform = 'scale(0.98)';
        card.style.boxShadow = '0 6px 8px red';

        setTimeout(() => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 8px 15px purple';
        }, 100 * index);
    });
};