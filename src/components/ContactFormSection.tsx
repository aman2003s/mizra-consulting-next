"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactFormSection.module.scss";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className={styles.contactForm} id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={styles.heading}
      >
        Ready To Collaborate?
      </motion.h2>
      <motion.form
        className={styles.form}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
      >
        <div className={styles.row}>
          <input type="text" name="firstName" placeholder="FIRST NAME" required />
          <input type="text" name="lastName" placeholder="LAST NAME" required />
        </div>
        <div className={styles.row}>
          <input type="email" name="email" placeholder="EMAIL" required />
          <input type="tel" name="phone" placeholder="PHONE NO" required />
        </div>
        <textarea name="message" placeholder="MESSAGE" rows={3} required />
        <button type="submit" className={styles.submitBtn}>Submit</button>
        {submitted && <div className={styles.thankyou}>Thank you! We&apos;ll be in touch soon.</div>}
      </motion.form>
    </section>
  );
} 