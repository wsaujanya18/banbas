// src\app\components\home\Sundowner.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Sundowner = () => {
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
                        >
                            SUNDOWNER
                        </motion.h3>
                        <motion.p 
                        className={mainStyles.sectionBodyTextWhite}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ margin: '-200px', once: true }}
                        >
                            After a day filled with diverse adventures, Sundowner offers a peaceful space to feel the soothing estasy of the dipping sun rays gently grazing your skin</motion.p>
                    </div>
                </div>
                <motion.div 
                className={styles.imageContainer}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: '-200px', once: true }}
                transition={{ duration: 0.5 }}
                >
                    <img src="/images/adventures_sundowner.jpeg" alt="Sundowner" className={mainStyles.image}/>
                </motion.div>
            </div>
        </section>
    );
};

export default Sundowner;
