// src/components/dining/OrganicFood.tsx
import styles from '../../styles/diningPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import { motion } from 'framer-motion';

const OrganicFood = () => {
    return (
        <section className={styles.section_banbasbg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >ORGANIC FOOD</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Our food is curated from organically grown local ingredients by expert local chefs. On top of this, we import various high quality ingredients from Kathmandu to provide food choices ranging from traditional to sophisticated. 
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/images/home_adventure_canoeing.jpg" alt="Organic Food" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default OrganicFood;
