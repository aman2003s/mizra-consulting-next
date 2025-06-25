"use client";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.headline}
      >
        PRODUCT-LED GROWTH
        <motion.span
          className={styles.underline}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className={styles.subheadline}
      >
        Build smarter, Automate faster, Scale without limits.
      </motion.p>
      <motion.div
        className={styles.ctas}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <a href="#contact" className={styles.primaryBtn}>Book Free Consultation</a>
        <a href="https://wa.me/" target="_blank" rel="noopener" className={styles.secondaryBtn}>Whatsapp Us</a>
      </motion.div>
    </section>
  );
} 