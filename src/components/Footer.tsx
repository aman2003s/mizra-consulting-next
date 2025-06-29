import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoBlock}>
            <Image 
              src="/mizra-logo.svg" 
              alt="Mizra Logo" 
              width={157.748} 
              height={108.47}
              className={styles.logoImage}
            />
            <div className={styles.brandText}>
              <Image 
                src="/mizra-text.svg" 
                alt="Mizra" 
                width={178.015} 
                height={53.544}
                className={styles.mizraText}
              />
              <div className={styles.consultingText}>CONSULTING</div>
            </div>
          </div>
          <div className={styles.tagline}>
            From Idea to Execution - We Design, Build & Scale Digital Products That Deliver Results
          </div>
        </div>
        
        <div className={styles.navigationSection}>
          <div className={styles.navColumn}>
            <div className={styles.navTitle}>The Company</div>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#case-studies" className={styles.navLink}>Case Studies</a>
          </div>
          <div className={styles.navColumn}>
            <div className={styles.navTitle}>Support</div>
            <a href="#faq" className={styles.navLink}>FAQ</a>
            <a href="#contact" className={styles.navLink}>Book A Call</a>
            <a href="#contact" className={styles.navLink}>Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.bottomRow}>
        <div className={styles.legalLinks}>
          <a href="#">Terms Of Service</a>
          <a href="#">Policy Services</a>
          <a href="#">Cookies Policy</a>
        </div>
        <div className={styles.copyright}>
          © 2025 Mizra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
} 