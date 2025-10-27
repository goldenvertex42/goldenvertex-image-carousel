export const carouselUI = (container, images) => {
    
    const sliderDiv = document.querySelector('.slider');
    const navDiv = document.querySelector('.carousel-nav');
    
    images.forEach((image, index) => {
        const slide = document.createElement('img');
        slide.classList.add('carousel-slide');
        slide.src = image;
        slide.alt = 'Placeholder Image';
        slide.style.width = '25vw';
        slide.style.height = '40vh';
        if (index === 0) {
            slide.classList.add('active');
        }
        sliderDiv.appendChild(slide);

        const navDot = document.createElement('span');
        navDot.classList.add('nav-dot');
        navDot.dataset.index = index;
        if (index === 0) {
            navDot.classList.add('active');
        }
        navDiv.appendChild(navDot);
    });
};

export const updateActiveSlide = (newIndex) => {
    const slides = document.querySelectorAll('.carousel-slide');
    const navDots = document.querySelectorAll('.nav-dot');

    // Remove 'active' class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    navDots.forEach(dot => dot.classList.remove('active'));

    // Add 'active' class to the new slide and dot
    slides[newIndex].classList.add('active');
    navDots[newIndex].classList.add('active');
};