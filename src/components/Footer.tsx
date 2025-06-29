import styles from "./Footer.module.scss";
import Image from "next/image";
import mizraLogo from '../../public/mizra-logo.svg';
import mizraLogoText from '../../public/mizra-text.svg';

const navigationLinks = {
  company: [
    { href: "#about", label: "About Us", key: "about" },
    { href: "#services", label: "Services", key: "services" },
    { href: "#case-studies", label: "Case Studies", key: "case-studies" }
  ],
  support: [
    { href: "#faq", label: "FAQ", key: "faq" },
    { href: "#contact", label: "Book A Call", key: "book-call" },
    { href: "#contact", label: "Contact Us", key: "contact-us" }
  ]
};

const legalLinks = [
  { href: "#", label: "Terms Of Service", key: "terms" },
  { href: "#", label: "Policy Services", key: "policy" },
  { href: "#", label: "Cookies Policy", key: "cookies" }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoBlock}>
            <Image
              src={mizraLogo}
              alt="Mizra Logo"
              width={157.748}
              height={108.47}
              className={styles.logoImage}
            />
            <div className={styles.brandText}>
              <Image
                src={mizraLogoText}
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
            {navigationLinks.company.map(({ href, label, key }) => (
              <a key={key} href={href} className={styles.navLink}>
                {label}
              </a>
            ))}
          </div>
          <div className={styles.navColumn}>
            <div className={styles.navTitle}>Support</div>
            {navigationLinks.support.map(({ href, label, key }) => (
              <a key={key} href={href} className={styles.navLink}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.bottomRow}>
        <div className={styles.legalLinks}>
          {legalLinks.map(({ href, label, key }) => (
            <a key={key} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className={styles.copyright}>
          © 2025 Mizra. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
} 