import React, { ReactNode } from "react";
import styles from "./ServiceCard.module.scss";
import Button from "./Button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function ServiceCard({ icon, title, description, buttonText, onButtonClick }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      {buttonText && <Button text={buttonText} onClick={onButtonClick} variant="textWithArrow" />}
    </div>
  );
} 