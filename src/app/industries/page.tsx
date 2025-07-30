'use client';

import { motion } from "framer-motion";
import styles from "./industries.module.scss";
import ContactFormSection from "@/components/ContactFormSection";
import ReusableAccordion from "@/components/ReusableAccordion";
import ServicesCard from "@/components/ServicesCard";
import { useState } from "react";

interface Industry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
}

const industriesData: Industry[] = [
  {
    id: "startups-saas",
    title: "Startups & SaaS",
    subtitle: "We help founders ship faster.",
    description: "From MVP to scale — we co-own your product vision and tech roadmap.",
    services: [
      "MVP development & launch strategy",
      "SaaS setup: pricing, features, roles, subscription logic",
      "GTM & onboarding flows",
      "CRM + automation to streamline early ops",
      "Analytics stack (GA4, Mixpanel, Hotjar)"
    ],
    image: "/custom-software-engineering.svg",
    imageAlt: "Startups & SaaS Services"
  },
  {
    id: "edtech",
    title: "EdTech",
    subtitle: "Empowering learners, instructors, and platforms.",
    description: "We create educational technology solutions that enhance learning experiences.",
    services: [
      "LMS systems and custom portals",
      "AI chatbot tutors or query systems",
      "Student onboarding & engagement journeys",
      "Attendance + performance dashboards",
      "Course marketplace features"
    ],
    image: "/data-engineering.svg",
    imageAlt: "EdTech Services"
  },
  {
    id: "healthcare-wellness",
    title: "Healthcare & Wellness",
    subtitle: "Secure, compliant, and experience-driven healthcare solutions.",
    description: "We build healthcare technology that prioritizes security and user experience.",
    services: [
      "Doctor-patient portals",
      "Teleconsultation and booking systems",
      "IoT + wearable integrations",
      "HIPAA-inspired data flows (if applicable)",
      "Analytics: treatment insights, appointment heatmaps"
    ],
    image: "/digital-experience.svg",
    imageAlt: "Healthcare & Wellness Services"
  },
  {
    id: "ecommerce-retail",
    title: "eCommerce, D2C & Retail",
    subtitle: "Streamlining the customer experience from discovery to delivery.",
    description: "We optimize the entire customer journey for eCommerce businesses.",
    services: [
      "Inventory & product management automation",
      "Personalized landing pages and funnels",
      "CRM + marketing automation (WhatsApp, Email)",
      "Shopify/Custom storefront enhancements",
      "Return flow logic + CX dashboards"
    ],
    image: "/third-party-resource.svg",
    imageAlt: "eCommerce & Retail Services"
  },
  {
    id: "manufacturing-logistics",
    title: "Manufacturing & Logistics",
    subtitle: "Digitizing operations, improving visibility.",
    description: "We transform traditional manufacturing and logistics with digital solutions.",
    services: [
      "Smart dashboards for production + warehouse",
      "IoT integrations with ERP systems",
      "Transport/route tracking solutions",
      "Order lifecycle and SLA dashboards",
      "Internal team portals + vendor management"
    ],
    image: "/digital-marketing.svg",
    imageAlt: "Manufacturing & Logistics Services"
  },
  {
    id: "finance-consulting",
    title: "Finance & Consulting Firms",
    subtitle: "Modernizing operations, automating workflows.",
    description: "We help financial and consulting firms streamline their operations.",
    services: [
      "Client onboarding flows",
      "KYC + document tracking automations",
      "CRM + invoicing integrations",
      "Compliance dashboards",
      "Lead capture forms + consultation schedulers"
    ],
    image: "/website-social-media-management.svg",
    imageAlt: "Finance & Consulting Services"
  }
];

const industryAgnosticData = [
  {
    icon: "🏢",
    title: "Agencies & freelancers"
  },
  {
    icon: "📊",
    title: "Platform-based service models"
  },
  {
    icon: "🤝",
    title: "NGOs & foundations"
  },
  {
    icon: "🎓",
    title: "Coaching & training businesses"
  }
];

export default function IndustriesPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (industryId: string) => {
    setOpenAccordion(openAccordion === industryId ? null : industryId);
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7 }}
      >
        <div className={styles.heroSection}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            INDUSTRIES WE POWER
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Every Industry Has Unique Challenges. We Bring Product Thinking, Automation, And Tech Execution To Meet Them Head-On.
          </motion.p>
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Every Industry Has Unique Challenges, And Expectations. At Mizra Consulting, We Tailor Our Strategy, Automation, And Tech Solutions To Meet The Unique Needs Of Your Business — Across Verticals. Whether You&apos;re A Startup, SME, Or Enterprise, Our Product-Led, Data-Driven, And Scalable Execution Model Ensures Lasting Impact.
          </motion.p>
        </div>
      </motion.div>

      {/* Core Industries Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className={styles.industriesContainer}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Core Industries
          </motion.h2>
          <div className={styles.industriesList}>
            {industriesData.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * (index + 1) }}
              >
                <ReusableAccordion 
                  title={industry.title}
                  isOpen={openAccordion === industry.id}
                  onToggle={() => handleAccordionToggle(industry.id)}
                >
                  <ServicesCard
                    title={industry.subtitle}
                    description={industry.description}
                    bullets={industry.services.map(service => ({
                      label: service,
                      description: ""
                    }))}
                    image={industry.image}
                    imageAlt={industry.imageAlt}
                    imagePosition="right"
                    buttonText="Learn More"
                  />
                </ReusableAccordion>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Industry-Agnostic Strength Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className={styles.agnosticContainer}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Industry-Agnostic Strength
          </motion.h2>
          <motion.p 
            className={styles.agnosticDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Even if your industry isn&apos;t listed, our product-first, automation-ready mindset allows us to tailor scalable solutions for:
          </motion.p>
          <div className={styles.agnosticList}>
            {industryAgnosticData.map((item, index) => (
              <motion.div
                key={index}
                className={styles.agnosticItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + (index * 0.1) }}
              >
                <span className={styles.agnosticIcon}>{item.icon}</span>
                <span className={styles.agnosticTitle}>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Let's Build Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className={styles.buildContainer}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Let&apos;s Build For Your Industry
          </motion.h2>
          <motion.p 
            className={styles.buildDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Whether You&apos;re Trying To Optimize, Digitize, Or Build From Scratch — We Bring Deep Context, Fast Delivery, And Domain-Aligned Solutions.
          </motion.p>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone:</span>
              <span className={styles.contactValue}>+91 92057 10374</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <span className={styles.contactValue}>Hello@Mizra.Tech</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <ContactFormSection />
      </motion.div>
    </>
  );
}