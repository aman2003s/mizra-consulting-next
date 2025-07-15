"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import styles from "./Accordion.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
  // Create refs and heights for all items
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>(() => items.map(() => 0));

  useLayoutEffect(() => {
    setHeights(
      items.map((_, idx) =>
        openIndex === idx && contentRefs.current[idx]
          ? contentRefs.current[idx]!.scrollHeight
          : 0
      )
    );
  }, [openIndex, items]);

  return (
    <div className={styles.accordion}>
      <h2 className={styles.categoryTitle}>{category}</h2>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
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
                  animate={{ height: heights[idx], opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.3 } }}
                  className={styles.answer}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    ref={el => { contentRefs.current[idx] = el; }}
                    className={styles.answerText}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
