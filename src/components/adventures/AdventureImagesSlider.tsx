// src\components\home\AdventureImagesSlider.tsx
import styles from '../../styles/adventuresPage.module.css';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';


const IMAGES = [
    { url: "/images/home_adventure_canoeing.jpg", alt: "Canoeing" },
    { url: "/images/home_adventures_slider1.jpg", alt: "Rhino" },
    { url: "/images/home_adventure_rainforest.jpg", alt: "Rainforest" },
];

const AdventureImagesSlider = () => {
    return (
        <section className={styles.section_slider}>
            <div className={styles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default AdventureImagesSlider;
