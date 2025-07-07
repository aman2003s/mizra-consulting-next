"use client";
import { motion } from "framer-motion";
import styles from "./IndustriesSection.module.scss";
import Image from "next/image";
import purpleBg from "../../public/purple-bg.svg";

const industries = [
  { title: "Startups & SaaS" },
  { title: "EdTech & Healthcare" },
  { title: "Retail, eCommerce, and D2C" },
  { title: "Consulting, Agencies, and Coaching Platforms" },
  { title: "Manufacturing, Finance & Logistics" }
];

export default function IndustriesSection() {
  return (
    <section className={styles.industries} id="industries">
      <div className={styles.purpleBg}>
        <Image src={purpleBg} alt="Industries" style={{width:"100%",height:"300%"}}/>
      </div>
      <div className={styles.headingWrap}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className={styles.heading}
      >
        Industries
      </motion.h2></div>
      <div className={styles.cardsScrollOuter}>
        <div className={styles.autoScroll}>
          {[...industries, ...industries].map((ind, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>🚀</div>
              <div className={styles.title}>{ind.title}</div>
              <div className={styles.learnMore}>
                <span>Learn More</span>
                <div className={styles.arrowContainer}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 5L13 10L7 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 10H0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 10H0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 