"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./faq.module.scss";
import Accordion from "@/components/Accordion";
import { faqData } from "@/data/faqData";

export default function FAQPage() {
  const scrollToSection = (category: string) => {
    const element = document.getElementById(`faq-${category.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.faqPage}>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroLabel}>Mizra FAQs</div>
        <h1 className={styles.heroTitle}>YOUR QUESTION ANSWERED</h1>
        <div className={styles.heroSubheadline}>Got questions?</div>
        <div className={styles.heroDescription}>
          We&apos;ve answered the most common ones to make your decision easier.
        </div>
      </section>
      
      <section className={styles.faqContainer}>
        <div className={styles.faqIndex}>
          <h3 className={styles.indexTitle}>Quick Navigation</h3>
          <div className={styles.indexList}>
            {faqData.map((category, index) => (
              <button
                key={index}
                className={styles.indexItem}
                onClick={() => scrollToSection(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
        
        <div className={styles.faqAccordionSection}>
          {faqData.map((category, index) => (
            <div
              key={index}
              id={`faq-${category.category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Accordion
                category={category.category}
                items={category.items}
              />
            </div>
          ))}
        </div>
      </section>
      
      <section className={styles.contactSection}>
        <div className={styles.contactHeadline}>Still Have Question?</div>
        <div className={styles.contactSubheadline}>
          Lets Hop On A Quick Call To Adress Your Needs
        </div>
        <div className={styles.contactInfo}>
          <span style={{ fontWeight: 700 }}>
            +91 92057 10374
          </span> |
          <span style={{ fontWeight: 700 }}>
            Hello@Mizra.Tech
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
} 