import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.logoBlock}>
          <span className={styles.logo} role="img" aria-label="Mizra sun">🌅</span>
          <div className={styles.brand}>Mizra Consulting</div>
          <div className={styles.slogan}>From Ideation to Execution. We Design, Build & Scale Digital Products That Deliver Results.</div>
        </div>
        <div className={styles.linksBlock}>
          <div>
            <div className={styles.linksTitle}>The Company</div>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
          </div>
          <div>
            <div className={styles.linksTitle}>Support</div>
            <a href="#faq">FAQ</a>
            <a href="#contact">Book A Call</a>
            <a href="#contact">Contact Us</a>
          </div>
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