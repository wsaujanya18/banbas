// src/app/components/home/Accomodation.tsx
import styles from './Accomodation.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import CommonButton from '../common/button/CommonButton';
import ThreeSlider from '../common/slider/ThreeSlider';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/accomodation2.jpg", alt: "Elephant", title: "DELUXE", id: "deluxe" },
    { url: "/images/accomodation1.JPG", alt: "Canoeing", title: "EXECUTIVE DELUXE", id: "executivedeluxe" },
    { url: "/images/accomodation3.JPG", alt: "Rainforest", title: "SUITE", id:"suite" },
    { url: "/images/accomodation4.jpg", alt: "Rhino", title: "VILASA SUITE", id: "vilasasuite" },
];

const Accomodation = () => {
    return (
        <section className={styles.section}>
            <div className={mainStyles.sectionEntireScreenContent}>
                <div className={mainStyles.contentText}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-200px', once: true }}>
                        <h2 className={mainStyles.sectionHeaderText}>
                            4 LUXURIOUS RESIDENCES FOR YOU
                        </h2>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-200px', once: true }}>
                        <p className={mainStyles.sectionBodyText}>
                            What would it feel like when modern comfort meets the fresh air, vibrant colors and harmonious sounds of nature? 
                        </p>
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
                        content="EXPLORE ACCOMMODATIONS"
                        url="/accommodations"
                        type="normal"
                    />
                </motion.div>
            </div>
            <ThreeSlider images={IMAGES} />
        </section>
    );
}

export default Accomodation;
