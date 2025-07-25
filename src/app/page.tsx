import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import CoreOfferingsSection from "../components/CoreOfferingsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import IndustriesSection from "../components/IndustriesSection";
import ContactFormSection from "../components/ContactFormSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.snapSection}>
        <HeroSection />
      </div>
      <div className={styles.snapSection}>
        <WhatWeDoSection />
      </div>
      <div className={styles.snapSection}>
        <CoreOfferingsSection />
      </div>
      <div className={styles.snapSection}>
        <WhyChooseUsSection />
      </div>
      <div className={styles.snapSection}>
        <IndustriesSection />
      </div>
      <div className={styles.snapSection}>
        <ContactFormSection />
      </div>
    </>
  );
}
