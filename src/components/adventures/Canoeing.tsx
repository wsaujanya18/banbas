// src\components\home\Canoeing.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Canoeing = () => {
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
                        >CANOEING</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            With crocodiles and rhinos just few feets away from you, as the canoe driver expertly navigates the depths of Rapti, experience a thrill like never before.</motion.p>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/images/home_adventure_canoeing.jpg" alt="Canoeing" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default Canoeing;
