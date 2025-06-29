import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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