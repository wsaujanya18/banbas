// src/app/components/home/Dining.tsx
import styles from './Dining.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import CommonButton from '../common/button/CommonButton';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/dining2.JPG", alt: "Banbas Dining Reception" },
    { url: "/images/dining1.JPG", alt: "Banbas Dining Outside" },
    { url: "/images/dining3.JPG", alt: "Banbas Dining Swimming Pool" },
    { url: "/images/dining4.JPG", alt: "Banbas Dining Outide" },
];

const Dining = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContent}>
                <div className={mainStyles.contentText}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-200px', once: true }}>
                        <h2 className={mainStyles.sectionHeaderTextWhite}>DINE WITH US</h2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.2, delay: 0.2}}
                    >
                        <p className={mainStyles.sectionBodyTextWhite}>Our dining area has a direct view of wild trees, and the national park. Our outdoor dining will present you with beautiful experience of sunset and sunrise.</p>
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
                        content="DISCOVER DINING"
                        url="/dining"
                        type="banbas"
                    />
                </motion.div>
            </div>
            <div className={styles.imageContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default Dining;
