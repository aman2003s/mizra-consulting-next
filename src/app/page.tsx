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
      <div className={styles.backgroundStaticShadesLeft}><Image src={leftShade} alt="logo" style={{
        width: '500%',
        height: '500%'
      }} /></div>
      <div className={styles.backgroundStaticShadesRight}><Image src={rightShade} alt="logo" style={{
        width: '500%',
        height: '500%'
      }} /></div>

      <HeroSection />
      <WhatWeDoSection />
      <CoreOfferingsSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <ContactFormSection />
      <Footer />
    </>
  );
}
