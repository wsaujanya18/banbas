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
                >WILDLIFE OFFERS THE BIGGEST ADVENTURES</motion.h2>
                <motion.p 
                    className={mainStyles.sectionBodyText}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ margin: '-200px', once: true }} 
                    transition={{ duration: 0.5 }}
                >Widen your perspective with the diversity that nature offers. Unique wildlife and fauna offers a unique learning in our ephemeral yet important existence.</motion.p>
            </div>
        </section>
    );
};

export default Description;
