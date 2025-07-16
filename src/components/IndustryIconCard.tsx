import React, { ReactNode } from "react";
import styles from "./IndustryIconCard.module.scss";

interface IndustryIconCardProps {
  icon: ReactNode;
  label: string;
}

export default function IndustryIconCard({ icon, label }: IndustryIconCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
} 