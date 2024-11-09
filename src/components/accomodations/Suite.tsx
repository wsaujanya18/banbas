// src\app\components\home\Suite.tsx
import accomodationStyles from '../../styles/accomodationsPage.module.css';
import mainStyles from '../../styles/mainStyles.module.css';
import CommonButton from '../common/button/CommonButton';
import { InfiniteImageSliderCustomArrows } from '../common/slider/InfiniteImageSliderCustomArrows';
import Amenities from './Amenities';
import { motion } from 'framer-motion';

const IMAGES = [
    { url: "/images/accomodation1.JPG", alt: "Canoeing", title: "EXECUTIVE DELUXE" },
    { url: "/images/accomodation2.jpg", alt: "Elephant", title: "DELUXE" },
    { url: "/images/accomodation3.JPG", alt: "Rainforest", title: "SUITE" },
    { url: "/images/accomodation4.jpg", alt: "Rhino", title: "VILASA SUITE" },
];

const SUITE_AMENITIES = [
    { icon: "coffee_white", text: "Breakfast in Bed", color: 'white'},
    { icon: "pondview_white", text: "Pond View from Patio", color: 'white'},
    { icon: "gardenview_white", text: "Garden View", color: 'white'},
    { icon: "wheelchair_white", text: "Wheel Chair Accessible", color: 'white'},
    { icon: "twoqueenbeds_white", text: "Two Queen Beds", color: 'white'},
    { icon: "bed_white", text: "Single King Bed", color: 'white'},
    { icon: "openshower_white", text: "Bath Tub with Open Shower", color: 'white'},
    { icon: "doubleheight_white", text: "Double Height Bed and Study Area", color: 'white'},
    { icon: "jacuzzi_white", text: "Jacuzzi", color: 'white'},
];

const Suite = () => {
    return (
        <section className={accomodationStyles.accomodationTypeDarkBackground} id="suite">
            <div className={accomodationStyles.accomodationTypeHeader}>
                <div className={accomodationStyles.textAndButton}>
                    <div className={mainStyles.contentText}>
                        <motion.h3
                            className={mainStyles.sectionHeaderTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            SUITE
                        </motion.h3>
                        <motion.p
                            className={mainStyles.sectionBodyTextWhite}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ margin: '-200px', once: true }}
                        >
                            Suites are best for a retreat away from home. With a double height residence, the bedroom below and study room upstairs, you get to make a home away from home. This space is perfect for bird watchers, writers or people who love to read, as you have a direct view of our beautiful garden.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ margin: '-200px', once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <CommonButton
                            padding="16px 24px"
                            content="RESERVE NOW"
                            url="/reserve"
                            type="banbas"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className={accomodationStyles.imageContainer}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: '-200px', once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src="/images/accomodation3.JPG" alt="Suite" className={mainStyles.image} />
                </motion.div>
            </div>
            <div className={accomodationStyles.amenitiesContainer}>
                <Amenities amenities={SUITE_AMENITIES} />
            </div>
            <div className={accomodationStyles.sliderContainer}>
                <InfiniteImageSliderCustomArrows images={IMAGES} autoSlide={false} />
            </div>
        </section>
    );
};

export default Suite;
