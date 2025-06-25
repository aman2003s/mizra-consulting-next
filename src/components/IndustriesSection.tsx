"use client";
import { motion } from "framer-motion";
import styles from "./IndustriesSection.module.scss";

const industries = [
  { title: "Startups & SaaS" },
  { title: "Ed tech and healthcare" },
  { title: "Consulting, Agencies, & Coaching Platforms" },
  { title: "Retail, eCommerce & D2C" }
];

export default function IndustriesSection() {
  return (
    <section className={styles.industries} id="industries">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={styles.heading}
      >
        Industries
      </motion.h2>
      <div className={styles.cardsWrap}>
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          >
            <div className={styles.icon}>🚀</div>
            <div className={styles.title}>{ind.title}</div>
            <div className={styles.learnMore}>Learn More →</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 