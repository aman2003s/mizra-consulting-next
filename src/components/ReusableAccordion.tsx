"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./Accordion.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ReusableAccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ReusableAccordion({ 
  title, 
  children, 
  className = "", 
  isOpen, 
  onToggle 
}: ReusableAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.accordionItem} ${className}`}>
      <button
        onClick={onToggle}
        className={styles.accordionButton}
      >
        <span className={styles.question}>{title}</span>
        <span
          className={
            isOpen
              ? `${styles.toggleIcon} ${styles.toggleIconRotated}`
              : styles.toggleIcon
          }
        >
          <Image
            src={
              isOpen
                ? "/accordionNegative.svg"
                : "/accordionPositive.svg"
            }
            alt={isOpen ? "Collapse" : "Expand"}
            width={20}
            height={20}
            priority
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { 
                duration: 0.5, 
                ease: [0.4, 0, 0.2, 1] 
              }, 
              opacity: { 
                duration: 0.3 
              } 
            }}
            className={styles.answer}
            style={{ overflow: "hidden" }}
          >
            <div
              ref={contentRef}
              className={styles.answerText}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 