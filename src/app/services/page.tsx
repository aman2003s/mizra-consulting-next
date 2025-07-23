"use client";

import React from "react";
import styles from "./page.module.scss";
import IndustryIconCard from "@/components/IndustryIconCard";
import ContactFormSection from "@/components/ContactFormSection";
import ServicesCard from "@/components/ServicesCard";
import {
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";
import {
  MdOutlineScience,
  MdOutlineHealthAndSafety,
  MdOutlineSchool,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { motion } from "framer-motion";

const serviceCards = [
  {
    title: "CUSTOM SOFTWARE ENGINEERING",
    description:
      "We craft future-ready software solutions that are robust, scalable, and tailored to your business needs. Using the latest technologies and best practices, we deliver applications that drive innovation and efficiency.",
    bullets: [
      {
        label: "Full-Stack Development",
        description: "Expertise across front-end (React, Angular, Vue) and back-end (Node.js, .NET, Java, Python)."
      },
      {
        label: "SaaS Product Engineering",
        description: "Scalable, secure cloud-based applications designed for multi-tenancy."
      },
      {
        label: "Microservices & API Architecture",
        description: "Decoupled services for modular, scalable systems."
      },
      {
        label: "Cross-Platform Solutions",
        description: "Native and hybrid mobile apps using Flutter, React Native, or Kotlin."
      },
      {
        label: "Agile & DevOps Practices",
        description: "CI/CD pipelines, automated testing, and performance optimization."
      },
    ],
    buttonText: "learn more",
    image: "/custom-software-engineering.svg",
    imageAlt: "Custom Software Engineering",
  },
  {
    title: "DATA ENGINEERING, AI & ML",
    description:
      "Transform Raw Data Into Actionable Insights And Intelligent Systems. We Help Organizations Harness The Power Of Data, Analytics, And AI To Make Smarter Decisions And Automate Processes.",
    bullets: [
      {
        label: "Data Lake & ETL Pipelines",
        description: "Centralized, scalable storage and processing frameworks."
      },
      {
        label: "Data Integration",
        description: "Unified platforms connecting ERP, CRM, and third-party data."
      },
      {
        label: "Machine Learning Models",
        description: "Supervised, unsupervised, and deep learning tailored to business needs."
      },
      {
        label: "Business Intelligence",
        description: "Interactive dashboards and KPIs via Power BI, Tableau, or Looker."
      },
      {
        label: "Real-Time Analytics",
        description: "Stream processing and event-based services."
      },
      {
        label: "AI for Automation",
        description: "Recommendation systems, chatbots, and cognitive services."
      },
    ],
    buttonText: "learn more",
    image: "/data-engineering.svg",
    imageAlt: "Data Engineering",
  },
  {
    title: "DIGITAL EXPERIENCE & MARTECH",
    description:
      "We craft future-ready software solutions that are robust, scalable, and tailored to your business needs. Using the latest technologies and best practices, we deliver applications that drive innovation and efficiency.",
    bullets: [
      {
        label: "UX/UI Design",
        description: " User-centric interfaces that enhance usability and drive conversions."
      },
      {
        label: "Omnichannel Campaigns",
        description: "Cohesive experiences across email, social, web, and mobile."
      },
      {
        label: "Martech Integrations",
        description: "Connecting tools like HubSpot, Salesforce, Adobe, and more."
      },
      {
        label: "Marketing Automation",
        description: "Workflow automation, lead nurturing, and campaign tracking."
      },
      {
        label: "Personalization & A/B Testing",
        description: "Tailored user content driven by behavior and analytics."
      },
      {
        label: "Customer Data Platforms (CDPs)",
        description: "Unified customer profiles for targeted marketing."
      },
    ],
    buttonText: "learn more",
    image: "/digital-experience.svg",
    imageAlt: "Digital Experience & Martech",
  },
  {
    title: "THIRD–PARTY RESOURCE AUGMENTATION",
    description:
      "Quickly Scale Your Workforce Without The Complexities Of Hiring And Compliance. We Provide Skilled Professionals And Agile Teams To Support Your Projects Seamlessly.",
    bullets: [
      {
        label: "Contract Staffing",
        description: "Hire skilled professionals on Mizra’s payroll across roles and technologies."
      },
      {
        label: "Project-Based Teams",
        description: "Build agile teams quickly for short-term or long-term engagements."
      },
      {
        label: "HR & Compliance Management",
        description: "We handle payroll, taxes, onboarding, and legal requirements."
      },
      {
        label: "Flexible Billing Models",
        description: "Transparent pricing—monthly, hourly, or deliverable-based."
      },
      {
        label: "Onsite/Offshore Availability",
        description: "Resource deployment tailored to your location and project needs."
      },
      {
        label: "Skill Coverage",
        description: "Developers, testers, project managers, analysts, designers, and more."
      },
    ],
    buttonText: "learn more",
    image: "/third-party-resource.svg",
    imageAlt: "Third-Party Resource Augmentation",
  },
  {
    title: "DIGITAL MARKETING SOLUTIONS",
    description:
      "Elevate your online presence with data-driven digital marketing strategies. We help businesses grow their reach, engage their audience, and achieve measurable results.",
    bullets: [
      {
        label: "SEO & SEM",
        description: "Improve search engine visibility and paid campaign performance."
      },
      {
        label: "Social Media Marketing",
        description: "Build brand awareness and audience interaction on leading platforms."
      },
      {
        label: "Email Marketing",
        description: "Personalized campaigns for lead nurturing and customer retention."
      },
      {
        label: "Performance Analytics",
        description: "Measure campaign ROI and refine strategies with real-time insights."
      },
    ],
    buttonText: "learn more",
    image: "/digital-marketing.svg",
    imageAlt: "Digital Marketing Solutions",
  },
  {
    title: "WEBSITE & SOCIAL MEDIA MANAGEMENT",
    description:
      "We take care of your entire digital presence so you can focus on your core business. From managing websites to running social media campaigns, we ensure consistent and high-performing digital touchpoints.",
    bullets: [
      {
        label: "Website Management",
        description: "Continuous updates, content optimization, performance monitoring, and technical support."
      },
      {
        label: "Social Media Handling",
        description: "Content creation, post scheduling, engagement tracking, and campaign execution across major platforms."
      },
      {
        label: "Performance Reporting",
        description: "Monthly insights on traffic, engagement, and conversions."
      },
      {
        label: "Visual & Brand Consistency",
        description: "Ensuring all digital touchpoints align with your brand identity."
      },
    ],
    buttonText: "learn more",
    image: "/website-social-media-management.svg",
    imageAlt: "Website & Social Media Management",
  },
];

const industries = [
  { icon: <MdOutlineSchool />, label: "EdTech" },
  { icon: <FaLaptopCode />, label: "SaaS" },
  { icon: <MdOutlineAttachMoney />, label: "FinTech" },
  { icon: <MdOutlineScience />, label: "AI Tools" },
  { icon: <FaGlobe />, label: "Platforms & Marketplaces" },
  { icon: <MdOutlineHealthAndSafety />, label: "Healthcare" },
];

const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function ServicesPage() {
  // Set to true for RTL, false for LTR
  const isRTL = false;
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className={styles.snapSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>THE MIZRA METHOD</h1>
          <div className={styles.heroSubheadline}>
            End To End Tech Product & Growth Execution.Build Around Your
            Business Goals.
          </div>
          <div className={styles.heroSubheadlinePlain}>
            We focus on holistic product, tech, and growth execution. Our core
            service categories are designed to help you scale, automate, and
            grow. The execution covers discovery, build, launch, and scale.
          </div>
        </div>
      </motion.section>

      {/* Core Service Categories */}
      <motion.section
        className={styles.snapSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className={styles.coreContainer}>
          <h2 className={styles.sectionHeading}>Our Core Service Categories</h2>
          <div className={styles.coreServicesWrapper}>
            {serviceCards.map((card, idx) => (
              <ServicesCard
                key={card.title}
                {...card}
                imagePosition={
                  (isRTL ? (idx + 1) % 2 === 0 : (idx + 1) % 2 !== 0)
                    ? "right"
                    : "left"
                }
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Custom Consulting/Industries */}
      <motion.section
        className={styles.snapSection}
        {...sectionAnim}
        transition={{ ...sectionAnim.transition, delay: 0.2 }}
      >
        <div className={styles.customSection}>
          <motion.h2
            className={styles.sectionHeading}
            {...sectionAnim}
            transition={{ ...sectionAnim.transition, delay: 0.3 }}
          >
            Need Something Custom?
          </motion.h2>
          <motion.div
            className={styles.heroDesc}
            {...sectionAnim}
            transition={{ ...sectionAnim.transition, delay: 0.4 }}
          >
            We work on custom product + tech consulting scopes across:
          </motion.div>
        </div>
        <motion.div
          className={styles.industriesGrid}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
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
      <motion.section
        className={styles.snapSection}
        {...sectionAnim}
        transition={{ ...sectionAnim.transition, delay: 0.3 }}
      >
        <ContactFormSection />
      </motion.section>
    </>
  );
}
