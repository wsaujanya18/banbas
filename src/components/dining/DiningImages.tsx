// src/app/components/dining/DiningImages.tsx
import styles from '../../styles/diningPage.module.css';
import { SliderWithBackgroundImage } from '../common/slider/SliderWithBackgroundImage';

const IMAGES = [
    { url: "/images/gallery1.JPG", alt: "Banbas Dining Outside" },
    { url: "/images/gallery2.JPG", alt: "Banbas Dining Reception" },
    { url: "/images/gallery3.JPG", alt: "Banbas Dining Swimming Pool" },
    { url: "/images/gallery4.JPG", alt: "Banbas Dining Outide" },
    { url: "/images/gallery6.jpg", alt: "Banbas Dining Reception" },
    { url: "/images/gallery8.jpg", alt: "Banbas Dining Outide" },
];

const BACKGROUND_IMAGE = { url: "/images/home_slider_background.jpg", alt: "Banbas Resort View" }

const DiningImages = () => {
    return (
        <section className={styles.section_diningImages}>
            <div className={styles.sliderContainer}>
                <SliderWithBackgroundImage images={IMAGES} backgroundImage={BACKGROUND_IMAGE} autoSlide={false} />
            </div>
        </section>
    );
};

export default DiningImages;
