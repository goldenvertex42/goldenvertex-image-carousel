import "./styles.css";
import { carousel } from "./carousel";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpeg";

document.addEventListener('DOMContentLoaded', () => {
  const images = [image1, image2, image3, image4, image5];

  const myCarousel = carousel(
    '.container',
    images,
    '.right-arrow',
    '.left-arrow'
  );

  myCarousel.init();
});