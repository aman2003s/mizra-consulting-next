"use client";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";
import Button from "./Button";
import Image from "next/image";
import startHereText from "../../public/start-here-text.svg";
import { useEffect, useState } from "react";
import ConsultationFormModal from "./ConsultationFormModal";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 786);
      setIsTablet(window.innerWidth <= 980);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className={styles.subtitle}
      >
        &ldquo;From Idea to Execution - We Design, Build & Scale Digital
        Products That Deliver Results&rdquo;
      </motion.p>
      <div className={styles.headlineContainer}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={styles.startHereImage}
        >
          <Image src={startHereText} alt="Start Here" width={150} height={60} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.headline}
        >
          PRODUCT-LED GROWTH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={styles.subheadline}
        >
          Build smarter, Automate faster, Scale without limits.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className={styles.description}
      >
        We partner with startups and enterprises to launch powerful digital
        products and automate business operations using ERP, CRM, AI, cloud, and
        modern tech stacks.
      </motion.p>
      <motion.div
        className={styles.ctas}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <Button
          text="Book Free Consultation"
          variant="secondary"
          onClick={() => setShowModal(true)}
        />
        <Button
          text={isMobile ? "WhatsApp Us" : "Contact Us"}
          variant="secondary"
          width={isTablet ? undefined : "260px"}
          onClick={() => {
            if (isMobile) {
              window.open('https://wa.me/919205710374', '_blank');
            } else {
              window.location.href = '/contact';
            }
          }}
        />
      </motion.div>
      <ConsultationFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
        expert={true}
      />
      <motion.div
        className={styles.marqueeContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <div className={styles.marquee}>
          <span>MIZRA CONSULTING • MIZRA CONSULTING</span>
          <span>MIZRA CONSULTING • MIZRA CONSULTING</span>
        </div>
      </motion.div>
    </section>
  );
}
