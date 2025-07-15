'use client';

import styles from "./faq.module.scss";
import Accordion from "@/components/Accordion";
import { faqData } from "@/data/faqData";
import { motion } from "framer-motion";

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
        <motion.div className={styles.contactSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.7 }}>
          <div className={styles.gradientBorderTop} />
          <div className={styles.bgContainer}>
            <div className={styles.contactHeadline}>Still Have Question?</div>
            <div className={styles.contactSubheadline}>
              Lets Hop On A Quick Call To Adress Your Needs
            </div>
            <div className={styles.contactInfo}>
              <span style={{ fontWeight: 700 }}>+91 92057 10374</span>{" "}<span className={styles.hideMobile}>|</span>{" "}
              <span style={{ fontWeight: 700 }}>Hello@Mizra.Tech</span>
            </div>
          </div>
          <div className={styles.gradientBorderBottom} />
        </motion.div>
      </motion.div>
    </>
  );
}
