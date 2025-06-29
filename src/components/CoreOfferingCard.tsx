"use client";
import { ReactNode, CSSProperties } from "react";
import styles from "./CoreOfferingCard.module.scss";

type CoreOfferingCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  style?: CSSProperties;
};

export default function CoreOfferingCard({ icon, title, description, style }: CoreOfferingCardProps) {
  return (
    <div
      className={styles.card}
      style={style}
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
} 