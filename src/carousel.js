import { carouselUI, updateActiveSlide } from "./dom";
import { setupButtonControls } from "./controls";
import { setupDotNav } from "./navdots";

export const carousel = (containerSelector, images, nextBtnSelector, prevBtnSelector) => {
    let currentIndex = 0;
    let totalSlides = images.length;
    const sliderDiv = document.querySelector('.slider');
    let autoPlayTimer;

    const init = () => {
        const container = document.querySelector(containerSelector);
        if (!container) return;
        carouselUI(container, images);

        const nextBtn = document.querySelector(nextBtnSelector);
        const prevBtn = document.querySelector(prevBtnSelector);
        const navDiv = document.querySelector('.carousel-nav');
        

        const carouselState = {
            nextSlide,
            prevSlide,
            goToSlide,
        };

        if (nextBtn && prevBtn) {
            setupButtonControls(nextBtn, prevBtn, carouselState);
        }
        if (navDiv) {
            setupDotNav(navDiv, carouselState);
        }
    };
    
    const nextSlide = () => {
        const currentLeft = parseInt(sliderDiv.style.left) || 0;
        if (currentIndex < images.length - 1) {
            const newLeft = currentLeft - 25;
            sliderDiv.style.left = newLeft + 'vw';
            currentIndex = (currentIndex + 1) % totalSlides;
            updateActiveSlide(currentIndex);
            resetTimer();
        } else {
            sliderDiv.style.left = 0;
            currentIndex = 0;
            updateActiveSlide(currentIndex);
            resetTimer();
        }
    };

    const prevSlide = () => {
        const currentLeft = parseInt(sliderDiv.style.left) || 0;
        if (currentIndex > 0) {
            const newLeft = currentLeft + 25;
            sliderDiv.style.left = newLeft + 'vw';
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateActiveSlide(currentIndex);
            resetTimer();
        } else {
            currentIndex = images.length - 1;
            const newLeft = currentIndex * 25;
            sliderDiv.style.left = -newLeft + 'vw';
            updateActiveSlide(currentIndex);
            resetTimer();
        }
    };

    const goToSlide = (index) => {
        const newLeft = index * 25;
        sliderDiv.style.left = -newLeft + 'vw';
        currentIndex = index;
        updateActiveSlide(currentIndex);
        resetTimer();
    };

    const startTimer = (interval = 5000) => {
        autoPlayTimer = setInterval(nextSlide, interval);
    };

    const stopTimer = () => {
        clearInterval(autoPlayTimer);
    };

    const resetTimer = () => {
        stopTimer();
        startTimer();
    };

    sliderDiv.addEventListener('mouseenter', stopTimer);
    sliderDiv.addEventListener('mouseleave', resetTimer);

    startTimer();

    return { init };
};