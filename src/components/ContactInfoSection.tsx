import React from "react";
import Button from "./Button";
import styles from "../app/faq/faq.module.scss";

interface ContactInfoSectionProps {
  headline: string;
  subheadline: string | React.ReactNode;
  phone?: string;
  email?: string;
  buttonText?: string;
  buttonLink?: string;
  showDivider?: boolean;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  headline,
  subheadline,
  phone,
  email,
  buttonText,
  buttonLink,
  showDivider = true,
}) => (
  <div className={styles.contactSection}>
    {showDivider && <div className={styles.gradientBorderTop} />}
    <div className={styles.bgContainer}>
      <div className={styles.contactHeadline}>{headline}</div>
      <div className={styles.contactSubheadline}>{subheadline}</div>
      {!!(phone && email) && (
        <div className={styles.contactInfo}>
          <span style={{ fontWeight: 700 }}>{phone}</span>{" "}
          <span className={styles.hideMobile}>|</span>{" "}
          <span style={{ fontWeight: 700 }}>{email}</span>
        </div>
      )}
      {!!buttonText && (
        <div style={{ marginTop: 24 }}>
          <Button
            text={buttonText}
            variant="secondary"
            onClick={() => window.open(buttonLink, "_blank")}
          />
        </div>
      )}
    </div>
    {showDivider && <div className={styles.gradientBorderBottom} />}
  </div>
);

export default ContactInfoSection;
