export const setupButtonControls = (nextBtn, prevBtn, carouselState) => {
    nextBtn.addEventListener('click', () => {
        carouselState.nextSlide();
    });

    prevBtn.addEventListener('click', () => {
        carouselState.prevSlide();
    });
};