"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./Accordion.module.scss";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  category: string;
};

export default function Accordion({ items, category }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      <h2 className={styles.categoryTitle}>{category}</h2>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        // Ref and state for measuring content height
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
          <div key={idx} className={styles.accordionItem}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className={styles.accordionButton}
            >
              <span className={styles.question}>{item.question}</span>
              <span
                className={
                  isOpen
                    ? `${styles.toggleIcon} ${styles.toggleIconRotated}`
                    : styles.toggleIcon
                }
              >
                <img
                  src={
                    isOpen
                      ? "/accordionNegative.svg"
                      : "/accordionPositive.svg"
                  }
                  alt={isOpen ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.3 } }}
                  className={styles.answer}
                  style={{ overflow: "hidden" }}
                >
                  <div ref={contentRef} className={styles.answerText}>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
