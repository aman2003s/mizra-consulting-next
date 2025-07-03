"use client";
import { AcademicCapIcon, Cog6ToothIcon, ChartBarIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import CoreOfferingCard from "./CoreOfferingCard";
import styles from "./CoreOfferingsSection.module.scss";

const offerings = [
  {
    icon: <Cog6ToothIcon width={36} height={36} />,
    title: "Automation & CRM Solutions",
    description: "Automate sales, operations, and marketing workflows with Zoho, HubSpot, and more."
  },
  {
    icon: <AcademicCapIcon width={36} height={36} />,
    title: "UX/UI Design Audits",
    description: "Improve experience and conversions through visual and journey optimization."
  },
  {
    icon: <ChartBarIcon width={36} height={36} />,
    title: "MVP & Roadmap Planning",
    description: "Validate, design, and deliver your Minimum Viable Product in 21-30 days."
  },
  {
    icon: <ClipboardDocumentCheckIcon width={36} height={36} />,
    title: "Product Management Consulting",
    description: "From discovery to GTM — complete ownership of product vision, roadmap, and execution."
  }
];

export default function CoreOfferingsSection() {


  return (
    <section className={styles.coreOfferings} id="core-offerings">
      <div className={styles.container}>
        {/* Left side - Static text */}
        <div className={styles.textSection}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={styles.heading}
          >
            Our Core Offering
          </motion.h2>
        </div>

        {/* Right side - Cards */}
        <div className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={styles.cardWrapper}>
                <CoreOfferingCard {...offering} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 