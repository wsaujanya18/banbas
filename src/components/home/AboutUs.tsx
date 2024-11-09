// src\components\home\Canoeing.tsx
import styles from '../../styles/adventuresPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';
import CommonButton from '../common/button/CommonButton';

const Canoeing = () => {
    return (
        <section className={styles.section_whitebg}>
            <div className={mainStyles.sectionEntireScreenContentAndImage}>
                <div className={mainStyles.subsectionHalfScreenContent}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderText}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >VISIONARY BEHIND BANBAS</motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyText}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Banbas is the personification of my soul. Read more below:
                        </motion.p>
                        <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ margin: '-200px', once: true }}
                    >
                    <CommonButton
                            padding="16px 24px"
                            content="LEARN MORE ABOUT US"
                            url="/reserve"
                            type="normal"
                        />
                    </motion.div>
                    </div>
                </div>
                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/images/bashu_uncle_photo.jpg" alt="Canoeing" className={mainStyles.image} />
                </motion.div>
            </div>
        </section>
    );
};

export default Canoeing;
