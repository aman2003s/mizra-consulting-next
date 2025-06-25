"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./CoreOfferingCard.module.scss";

type CoreOfferingCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function CoreOfferingCard({ icon, title, description }: CoreOfferingCardProps) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </motion.div>
  );
} 