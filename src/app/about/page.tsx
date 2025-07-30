'use client';

import { motion } from "framer-motion";
import styles from "./about.module.scss";
import ContactFormSection from "@/components/ContactFormSection";
import Button from "@/components/Button";
import Image from "next/image";
import ConsultationFormModal from "@/components/ConsultationFormModal";
import { useState } from "react";

const whyMizraPoints = [
  {
    icon: "🚀",
    title: "Fast & Focused Execution",
    subtitle: "Launch MVPs in 2-30 Days"
  },
  {
    icon: "🌍",
    title: "Global Mindset, Local Presence",
    subtitle: "Trusted By Clients in India, UAE & The US"
  },
  {
    icon: "🤝",
    title: "Founder-Friendly Approach",
    subtitle: "Clear Communication, No Bloated Processes"
  },
  {
    icon: "⚡",
    title: "Full-Stack Expertise",
    subtitle: "From UX/UI To AI, We Do It All"
  },
  {
    icon: "🏢",
    title: "Product + Tech + Growth Under One Roof",
    subtitle: "Streamline Your Journey With A Single Partner"
  }
];

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

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
            THE MIZRA MINDSET
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At Mizra Consulting Pvt Ltd, We&apos;re More Than Just A Tech Consultancy
          </motion.p>
          <motion.p 
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We&apos;re Your Execution Partner
          </motion.p>
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Founders And Enterprises Move From Concept To Launch Faster, With Lean MVPs, Scalable SaaS Platforms, & Enterprise Software, And Cutting-Edge User Experiences.
          </motion.p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className={styles.storyContainer}>
          <div className={styles.storyContent}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className={styles.storyDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We started with a simple observation: too many companies were struggling with fragmented teams, bloated processes, and unclear roadmaps. That&apos;s why we built Mizra as your one-stop partner for product, tech, and growth.
            </motion.p>
            <motion.p 
              className={styles.storySubDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Today, we serve clients across India, UAE, and the US, helping them move from concept to launch faster than ever before.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button 
                text="Request A Free Consultation" 
                onClick={() => setShowModal(true)}
              />
            </motion.div>
          </div>
          <div className={styles.storyImage}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Image
                src="/why-choose-mizra.svg"
                alt="Mizra Consulting Story"
                width={400}
                height={300}
                className={styles.storyImageContent}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Our Philosophy Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className={styles.philosophyContainer}>
          <div className={styles.philosophyImage}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Image
                src="/why-choose-mizra-2.svg"
                alt="Mizra Consulting Philosophy"
                width={400}
                height={300}
                className={styles.philosophyImageContent}
              />
            </motion.div>
          </div>
          <div className={styles.philosophyContent}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Our Philosophy
            </motion.h2>
            <motion.p 
              className={styles.philosophySubtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We Don&apos;t Just Consult — We Co-Create
            </motion.p>
            <motion.p 
              className={styles.philosophyDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Whether you&apos;re refining product-market fit, launching your next big idea, or digitizing complex workflows, Mizra acts as an extension of your team — curious, fast moving, and deeply invested in your success.
            </motion.p>
            <motion.p 
              className={styles.philosophySubDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              We blend design thinking, agile development, and data-driven decision-making to deliver results that matter.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Why Mizra Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className={styles.whyMizraContainer}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Why Mizra?
          </motion.h2>
          <div className={styles.whyMizraGrid}>
            {whyMizraPoints.map((point, index) => (
              <motion.div
                key={index}
                className={styles.whyMizraItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + (index * 0.1) }}
              >
                <div className={styles.whyMizraIcon}>{point.icon}</div>
                <h3 className={styles.whyMizraTitle}>{point.title}</h3>
                <p className={styles.whyMizraSubtitle}>{point.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Our Vision & Mission Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className={styles.visionMissionContainer}>
          <div className={styles.visionSection}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Our Vision
            </motion.h2>
            <motion.div 
              className={styles.visionIcon}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              👁️
            </motion.div>
            <motion.p 
              className={styles.visionDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              To Be The Go-To Partner For Digital First Companies Worldwide
            </motion.p>
            <motion.p 
              className={styles.visionSubDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              We help businesses grow by providing innovative solutions that drive digital transformation and sustainable growth.
            </motion.p>
          </div>
          
          <div className={styles.missionSection}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              Our Mission
            </motion.h2>
            <motion.div 
              className={styles.missionIcon}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.0 }}
            >
              🎯
            </motion.div>
            <motion.p 
              className={styles.missionDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              We Don&apos;t Just Build Software, We Build Businesses Ready To Lead in The Digital Age
            </motion.p>
            <motion.p 
              className={styles.missionSubDescription}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              Our commitment is to deliver solutions that not only meet current needs but also prepare businesses for future challenges and opportunities.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        className={styles.snapSection} 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <ContactFormSection />
      </motion.div>

      {/* Consultation Modal */}
      <ConsultationFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
        expert={true}
      />
    </>
  );
} 