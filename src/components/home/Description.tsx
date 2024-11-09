// src\components\home\Description.tsx
import descriptionStyles from '../../styles/description.module.css';
import mainStyles from '../../styles/mainStyles.module.css'
import { motion } from 'framer-motion';

const Description = () => {
    return (
        <section className={descriptionStyles.section}>
            <div className={descriptionStyles.sectionEntireScreenContent}>
                <motion.h2 
                    className={mainStyles.sectionHeaderText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}    
                >VILLA IN THE WILDERNESS</motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >Experience the beauty of nature right from your balcony. More than 60 species of birds perch on the trees next to your patio, filling the space with their exotic wild songs. Enjoy their presence as they expertly dive from their nests to catch the wild fishes found in the pond right below your accommodation. </motion.p>
            </div>
        </section>
    );
};

export default Description;
