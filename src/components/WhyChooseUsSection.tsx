"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./WhyChooseUsSection.module.scss";

const points = [
  "Product + Tech + Growth under one roof",
  "Fast delivery (MVPs in 21–30 days)",
  "Agile, data-backed, founder-friendly approach",
  "Trusted by clients across India, UAE, and the US",
  "Clear communication, no bloated processes"
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.container}>
        {/* Left portion - Circle */}
        <div className={styles.leftSection}>
          <div className={styles.circleText}>
            <Image
              src="/why-choose-mizra.svg"
              alt="Why choose mizra"
              width={348}
              height={348}
              className={styles.circleSvg}
            />
          </div>
        </div>

        {/* Right portion - Text points */}
        <div className={styles.rightSection}>
          <motion.ul
            className={styles.points}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
} 