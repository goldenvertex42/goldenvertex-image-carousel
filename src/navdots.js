export const setupDotNav = (navDiv, carouselState) => {
    navDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-dot')) {
            const newIndex = parseInt(e.target.dataset.index, 10);
            carouselState.goToSlide(newIndex);
        };
    });
};