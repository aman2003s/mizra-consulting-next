"use client";
import { motion } from "framer-motion";
import styles from "./WhatWeDoSection.module.scss";

export default function WhatWeDoSection() {
  return (
    <section className={styles.whatWeDo} id="what-we-do">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={styles.heading}
      >
        What We Do
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className={styles.description}
      >
        <b>At Mizra Consulting</b>, we blend strategic product thinking with full-stack development, automation, and analytics.<br/>
        Whether it&apos;s launching your MVP, setting up a CRM, or scaling SaaS growth.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className={styles.tagline}
      >
        <b>We&apos;re Your Execution Partner</b>
      </motion.div>
    </section>
  );
} 