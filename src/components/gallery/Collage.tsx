// src/components/gallery/Collage.tsx
import styles from './Collage.module.css';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/accomodation1.JPG", alt: "Accomodation Photo" },
    { url: "/images/accomodation2.jpg", alt: "Accomodation Photo" },
    { url: "/images/accomodation3.JPG", alt: "Accomodation Photo" },
    { url: "/images/accomodation4.jpg", alt: "Accomodation Photo" },
    { url: "/images/home_landing.jpg", alt: "Banbas" },
    { url: "/images/dining1.JPG", alt: "Dining in Banbas" },
    { url: "/images/dining2.JPG", alt: "Dining in Banbas" },
    { url: "/images/dining3.JPG", alt: "Dining in Banbas" },
    { url: "/images/dining4.JPG", alt: "Dining in Banbas" },
    { url: "/images/gallery1.JPG", alt: "Photo Description" },
    { url: "/images/gallery2.JPG", alt: "Photo Description" },
    { url: "/images/gallery3.JPG", alt: "Photo Description" },
    { url: "/images/gallery4.JPG", alt: "Photo Description" },
    { url: "/images/gallery6.JPG", alt: "Photo Description" },
    { url: "/images/gallery8.JPG", alt: "Photo Description" },
    { url: "/images/swimming_pool.JPG", alt: "Banbas Swimming Pool" },
];

const Collage = () => {
    const getInitialAnimation = (index: number) => {
        if ([0, 5, 7, 8, 12].includes(index)) {
            return { x: -100, opacity: 0 }; // Left images
        } else if ([2, 3, 6, 10, 11, 15].includes(index)) {
            return { x: 100, opacity: 0 }; // Right images
        } else {
            return { y: 100, opacity: 0 }; // Center images
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.collageContainer}>
                <div className={styles.gridContainer}>
                    {IMAGES.map((image, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.cell} ${styles[`img${index + 1}`]}`}
                            initial={getInitialAnimation(index)}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                            viewport={{  once: true }}
                        >
                            <img src={image.url} alt={image.alt} className={styles.image} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collage;
