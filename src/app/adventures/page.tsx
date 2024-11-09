"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Landing = dynamic(() => import('../../components/adventures/Landing'), { ssr: false });
const Description = dynamic(() => import('../../components/adventures/Description'), { ssr: false });
const Canoeing = dynamic(() => import('../../components/adventures/Canoeing'), { ssr: false });
const JeepSafari = dynamic(() => import('../../components/adventures/JeepSafari'), { ssr: false });
const AdventureImagesSlider = dynamic(() => import('../../components/adventures/AdventureImagesSlider'), { ssr: false });
const Sundowner = dynamic(() => import('../../components/adventures/Sundowner'), { ssr: false });
const TharuDance = dynamic(() => import('../../components/adventures/TharuDance'), { ssr: false });
const Cycling = dynamic(() => import('../../components/adventures/Cycling'), { ssr: false });
const Footer = dynamic(() => import('../../components/footer/Footer'), { ssr: false });
const ReserveFooter = dynamic(() => import('../../components/reserve/ReserveFooter'), { ssr: false });


export default function Adventures() {
  const [showFooter, setShowFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1.5 * window.innerHeight && currentScrollY > lastScrollY) {
        setShowFooter(true);
      } else if (currentScrollY < lastScrollY) {
        setShowFooter(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  useEffect(() => {
    const lazyLoadSections = async () => {
      await import('../../components/adventures/Description');
      await import('../../components/adventures/Canoeing');
      await import('../../components/adventures/JeepSafari');
      await import('../../components/adventures/AdventureImagesSlider');
      await import('../../components/adventures/Sundowner');
      await import('../../components/adventures/TharuDance');
      await import('../../components/adventures/Cycling');
      await import('../../components/footer/Footer');
    };

    lazyLoadSections();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Canoeing />
      <JeepSafari />
      <AdventureImagesSlider />
      <Sundowner />
      <TharuDance />
      <Cycling />
      <Footer />
      <ReserveFooter show={showFooter} />
    </main>
  );
}
