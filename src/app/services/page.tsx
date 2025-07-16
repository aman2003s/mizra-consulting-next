'use client';

import React from "react";
import styles from "./page.module.scss";
import ServiceCard from "@/components/ServiceCard";
import IndustryIconCard from "@/components/IndustryIconCard";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaUserFriends, FaBullhorn, FaGlobe } from "react-icons/fa";
import { MdOutlineScience, MdOutlineHealthAndSafety, MdOutlineSchool, MdOutlineAttachMoney } from "react-icons/md";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLaptopCode />, title: "Custom Software Engineering", description: "Full-stack product, system, and platform builds. Web, mobile, cloud, and API development. Agile delivery, modern stacks, and scalable architecture.", buttonText: "Learn More"
  },
  { icon: <FaDatabase />, title: "Data Engineering, AI & ML", description: "Data pipelines, analytics, dashboards, and AI/ML solutions. Data warehousing, ETL, and actionable business intelligence.", buttonText: "Learn More" },
  { icon: <FaMobileAlt />, title: "Digital Experience & Martech", description: "UX/UI design, customer journey mapping, martech integrations, and digital product strategy for growth and engagement.", buttonText: "Learn More" },
  { icon: <FaUserFriends />, title: "Third-Party Resource Augmentation", description: "On-demand tech teams, vetted developers, and project managers to scale your delivery and accelerate timelines.", buttonText: "Learn More" },
  { icon: <FaBullhorn />, title: "Digital Marketing Solutions", description: "Performance marketing, SEO, paid ads, content, and analytics. Full-funnel digital growth for your business.", buttonText: "Learn More" },
  { icon: <FaGlobe />, title: "Website & Social Media Management", description: "Modern, responsive websites, landing pages, and end-to-end social media management for your brand.", buttonText: "Learn More" }
];

const industries = [
  { icon: <MdOutlineSchool />, label: "EdTech" },
  { icon: <FaLaptopCode />, label: "SaaS" },
  { icon: <MdOutlineAttachMoney />, label: "FinTech" },
  { icon: <MdOutlineScience />, label: "AI Tools" },
  { icon: <FaGlobe />, label: "Platforms & Marketplaces" },
  { icon: <MdOutlineHealthAndSafety />, label: "Healthcare" }
];

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section className={styles.snapSection} {...sectionAnim}>
        <div className={styles.heroSection}>
          <div className={styles.heroSubtitle}>Our Services</div>
          <h1 className={styles.heroTitle}>THE MIRAZ METHOD</h1>
          <div className={styles.heroDesc}>
            End To End Tech Product & Growth Execution.<br />Build Around Your Business Goals.<br /><br />We focus on holistic product, tech, and growth execution. Our core service categories are designed to help you scale, automate, and grow. The execution covers discovery, build, launch, and scale.
          </div>
        </div>
      </motion.section>

      {/* Core Service Categories */}
      <motion.section className={styles.snapSection} {...sectionAnim} transition={{ ...sectionAnim.transition, delay: 0.1 }}>
        <motion.h2 className={styles.sectionHeading} {...sectionAnim} transition={{ ...sectionAnim.transition, delay: 0.2 }}>Our Core Service Categories</motion.h2>
        <motion.div className={styles.servicesGrid} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Custom Consulting/Industries */}
      <motion.section className={styles.snapSection} {...sectionAnim} transition={{ ...sectionAnim.transition, delay: 0.2 }}>
        <div className={styles.customSection}>
          <motion.h2 className={styles.sectionHeading} {...sectionAnim} transition={{ ...sectionAnim.transition, delay: 0.3 }}>Need Something Custom?</motion.h2>
          <motion.div className={styles.heroDesc} {...sectionAnim} transition={{ ...sectionAnim.transition, delay: 0.4 }}>
            We work on custom product + tech consulting scopes across:
          </motion.div>
        </div>
        <motion.div className={styles.industriesGrid} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <IndustryIconCard {...industry} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section className={styles.snapSection} {...sectionAnim} transition={{ ...sectionAnim.transition, delay: 0.3 }}>
        <ContactFormSection />
      </motion.section>

    </>
  );
} 