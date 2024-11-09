// src\app\components\home\Adventure.tsx
import styles from './Adventure.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import CommonButton from '../common/button/CommonButton';
import { motion } from "framer-motion"

const IMAGES = [
    { url: "/images/home_adventures_slider1.jpg", alt: "Rhino" },
    { url: "/images/home_adventures_slider2.jpg", alt: "Tiger" },
    { url: "/images/home_adventures_slider3.jpg", alt: "Jeep Safari" },
    { url: "/images/home_adventures_slider4.jpg", alt: "Wild Bird" },
];

const Adventure = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}> 
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5}}
                        >
                            ACTIVITIES IN THE JUNGLE
                        </motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x:-100 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Imagine peacefully cycling next to a dense Nepali forest during sunrise, and gently canoeing in a river filled with alligators, and seeing rhinos, deer, and tigers amidst an exotic jungle safari. How vibrant is life, with experiences like these!
                        </motion.p>
                    </div>
                    <motion.div
                        className={mainStyles.buttonContainer}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.5}}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="EXPLORE ADVENTURES"
                            url="/adventures"
                            type="banbas"
                        />
                    </motion.div>

                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <InfiniteImageSliderCustomArrows images={IMAGES} />
                </motion.div>
            </div>
        </section>
    );
};

export default Adventure;
