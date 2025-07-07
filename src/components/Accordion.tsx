"use client";
import React, { useState } from "react";

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
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, margin: '32px 0 16px 0' }}>{category}</h2>
      {items.map((item, idx) => (
        <div key={idx} style={{ borderBottom: '1px solid #333', marginBottom: 8 }}>
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              color: '#fff',
              textAlign: 'left',
              padding: '16px 0',
              fontSize: '1.05rem',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            {item.question}
            <span style={{ fontSize: 22, color: '#bfc6d1' }}>{openIndex === idx ? '-' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div style={{ color: '#bfc6d1', padding: '0 0 16px 0', fontSize: '0.98rem' }}>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
} 