// src\app\components\home\TharuDance.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const TharuDance = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImageReverse}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            THARU DANCE
                        </motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyText}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: '-200px', once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            In the evening, we host an optional traditional tharu dance event. Expert tharu dancers present marvelous performance of their fire mastery, integrating the duality of vigorous and genteel movements.</motion.p>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '-200px', once: true }}
                >
                    <img src="/images/adventures_tharu_dance.webp" alt="Tharu Dance" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default TharuDance;
