import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import CoreOfferingsSection from '../components/CoreOfferingsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import IndustriesSection from '../components/IndustriesSection';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';
import styles from './page.module.scss';
import Image from 'next/image';
import leftShade from '../../public/bg-leftShade.svg';
import rightShade from '../../public/bg-rightShade.svg';

export default function Home() {
  return (
    <>
      <div className={styles.snapContainer}>
        <div className={styles.snapSection}>
          <HeroSection />
          <div className={styles.scrollDownIndicator}>
            <span className={styles.arrow}>&#8595;</span>
            <span className={styles.scrollText}>Scroll Down</span>
          </div>
        </div>
        <div className={styles.snapSection}><WhatWeDoSection /></div>
        <div className={styles.snapSection}><CoreOfferingsSection /></div>
        <div className={styles.snapSection}><WhyChooseUsSection /></div>
        <div className={styles.snapSection}><IndustriesSection /></div>
        <div className={styles.snapSection}><ContactFormSection /></div>
        <div className={styles.snapSection}><Footer /></div>
      </div>
    </>
  );
}
