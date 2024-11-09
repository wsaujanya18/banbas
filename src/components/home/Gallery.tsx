// src/app/components/home/Gallery.tsx
import styles from './Gallery.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import {SliderWithBackgroundImage} from '../common/slider/SliderWithBackgroundImage';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/gallery8.jpg", alt: "Banbas Dining Outide" },
    { url: "/images/gallery6.jpg", alt: "Banbas Dining Reception" },
    { url: "/images/gallery3.JPG", alt: "Banbas Dining Swimming Pool" },
    { url: "/images/gallery1.JPG", alt: "Banbas Dining Outside" },
    { url: "/images/gallery2.JPG", alt: "Banbas Dining Reception" },
    { url: "/images/gallery4.JPG", alt: "Banbas Dining Outide" },
];

const BACKGROUND_IMAGE = {url:"/images/home_slider_background.jpg", alt: "Banbas Resort View"}

const Gallery = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContent}>
                <div className={mainStyles.contentText}>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ margin: '-200px', once: true }}
                    >
                        <h2 className={mainStyles.sectionHeaderText}>EXPLORE THROUGH PICTURES</h2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.2, delay: 0.2}}
                    >
                        <p className={mainStyles.sectionBodyText}>Come experience our beautiful resort through photographs!</p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.3, delay: 0.3}}
                >
                    <CommonButton
                        padding="16px 24px"
                        content="VISIT GALLERY"
                        url="/gallery"
                        type="normal"
                    />
                </motion.div>
            </div>
                <SliderWithBackgroundImage images={IMAGES} backgroundImage={BACKGROUND_IMAGE} autoSlide={false} />
        </section>
    );
};

export default Gallery;
