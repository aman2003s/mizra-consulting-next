'use client';

import styles from "./faq.module.scss";
import Accordion from "@/components/Accordion";
import { faqData } from "@/data/faqData";
import { motion } from "framer-motion";
import ContactInfoSection from "@/components/ContactInfoSection";

export default function FAQPage() {
  return (
    <>
      <motion.div className={styles.snapSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <motion.div className={styles.heroSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
          <div className={styles.heroLabel}>Mizra FAQs</div>
          <h1 className={styles.heroTitle}>YOUR QUESTION ANSWERED</h1>
          <div className={styles.heroSubheadline}>Got questions?</div>
          <div className={styles.heroDescription}>
            We&apos;ve answered the most common ones to make your decision
            easier.
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.snapSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <motion.div className={styles.faqContainer} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
          <div className={styles.contentConatiner}>
            <motion.div className={styles.faqIndex} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
              <h3 className={styles.indexTitle}>filter by topic</h3>
              <div className={styles.indexList}>
                {faqData.map((category, index) => (
                  <a
                    href={`#faq-${category.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    key={index}
                    className={styles.indexItem}
                  >
                    {category.category}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div className={styles.faqAccordionSection} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
              {faqData.map((category, index) => (
                <div key={index}>
                  <span
                    id={`faq-${category.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={styles.faqAnchorSpacer}
                  />
                  <Accordion
                    category={category.category}
                    items={category.items}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.snapSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }}>
        <ContactInfoSection
          headline="Still Have Question?"
          subheadline="Lets Hop On A Quick Call To Adress Your Needs"
          phone="+91 92057 10374"
          email="Hello@Mizra.Tech"
        />
      </motion.div>
    </>
  );
}
