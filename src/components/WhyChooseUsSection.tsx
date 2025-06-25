"use client";
import { motion } from "framer-motion";
import styles from "./WhyChooseUsSection.module.scss";

const points = [
  "Product + Tech + Growth under one roof",
  "Fast delivery (MVPs in 21–30 days)",
  "Agile, data-backed, founder-friendly approach",
  "Trusted by clients across India, UAE, and the US",
  "Clear communication, no bloated processes"
];

const circleText = Array(6).fill('WHY CHOOSE MIZRA?').join(' ');

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChooseUs} id="why-choose-us">
      <div className={styles.circleText}>
        <svg
          viewBox="0 0 260 260"
          width="220"
          height="220"
          className={styles.circleSvg}
          style={{ display: 'block', margin: '0 auto' }}
        >
          <defs>
            <path id="circlePath" d="M130,130 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0" />
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb32c" />
              <stop offset="100%" stopColor="#a259ff" />
            </linearGradient>
          </defs>
          <g className={styles.circleSvgRotating}>
            <text
              fill="url(#circleGradient)"
              fontSize="1.4rem"
              fontWeight="700"
              letterSpacing="0.1em"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ textTransform: 'uppercase' }}
            >
              <textPath xlinkHref="#circlePath" startOffset="0%">
                {circleText}
              </textPath>
            </text>
          </g>
        </svg>
      </div>
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
    </section>
  );
} 