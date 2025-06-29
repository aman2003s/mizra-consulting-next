"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactFormSection.module.scss";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className={styles.contactForm} id="contact">
      <div className={styles.card}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.heading}
        >
          Ready To Collaborate?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className={styles.subheading}
        >
          Let&apos;s create something epic together
        </motion.p>
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
        >
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>First Name *</label>
              <input type="text" name="firstName" placeholder="First Name" required />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Last Name *</label>
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email *</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone No *</label>
              <input type="tel" name="phone" placeholder="Phone No" required />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message *</label>
            <textarea name="message" placeholder="Write your message" rows={3} required />
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>
          {submitted && <div className={styles.thankyou}>Thank you! We&apos;ll be in touch soon.</div>}
        </motion.form>
      </div>
    </section>
  );
} 