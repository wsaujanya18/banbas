// src/app/components/home/Description.tsx
import mainStyles from '../../styles/mainStyles.module.css';
import descriptionStyles from '../../styles/description.module.css'
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
                >STAY WITH NATURAL EASE</motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >Going out of our comfort zone to experience the diverse life that nature offers. Unique wildlife gives a unique perspective amidst our ephemeral existence.</motion.p>
            </div>
        </section>
    );
};

export default Description;
