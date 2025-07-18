"use client";
import ContactFormSection from "@/components/ContactFormSection";
import { motion } from "framer-motion";
import styles from "../faq/faq.module.scss";
import ContactInfoSection from "@/components/ContactInfoSection";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className={styles.snapSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.heroSection}>
          <div className={styles.heroLabel}>Let&apos;s turn your</div>
          <h1 className={styles.heroTitle}>VISION INTO DIGITAL REALITY</h1>
          <div className={styles.heroSubheadlinePlain}>
            Talk to Us Whether you&apos;re ready to build your MVP, automate
            business processes, or need clarity on your product
            roadmap—we&apos;re just a message away.
          </div>
          <div className={styles.heroDescription}>
            We respond within <span>24 hours</span> on all platforms !
          </div>
        </div>
      </motion.section>
      <motion.section
        className={styles.snapSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.reachToUs}>
          <h1 className={styles.heroTitle}>Reach To Us </h1>
          <div className={styles.contactInfo}>+91 92057 10374</div>
          <div className={styles.contactDivider}></div>
          <div className={styles.contactInfo}>email@example.com</div>

          <div className={styles.contactDivider2}></div>
          <div className={styles.heroSubheadlinePlain} style={{ padding: 0 }}>
            704, 7th floor, Palm Court, Mehrauli-Gurgaon Road, Sector
            16,Gurugram, Haryana,122007.
          </div>

          <div className={styles.contactDivider2}></div>
        </div>
      </motion.section>
      {/* Contact Info Section */}
      <motion.section
        className={styles.snapSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <ContactInfoSection
          headline="Book a Free Strategy Call"
          subheadline={
            <>
              Schedule a <strong>30-min Zoom Call</strong> We’ll understand your
              goals, propose the best approach, and if we’re the right fit
            </>
          }
          buttonText="Share us your details"
          buttonLink="https://calendly.com/mizra-consulting/30min"
        />
      </motion.section>
      {/* Contact Form Section */}
      <motion.section
        className={styles.snapSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <ContactFormSection />
      </motion.section>
    </>
  );
}
