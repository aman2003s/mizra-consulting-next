"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.scss";
import logo from "../../public/mizra-logo.svg";
import Image from "next/image";
import Button from "./Button";
import ConsultationFormModal from "./ConsultationFormModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.navigationContainer}> 
        <ul className={styles.links}>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/industries">Industries</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Mizra Logo" />
          </Link>
        </div>
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.hamburger}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </span>
        </button>
        <div className={styles.cta}>
          <Button text="Request a Free Consultation" onClick={() => setShowModal(true)} />
        </div>

      </div>
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <span className={styles.closeIcon}>×</span>
              </button>
              <ul>
                <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
                <li><Link href="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
                <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
              </ul>
              <div className={styles.mobileCta}>
                <Button text="Request a Free Consultation" onClick={() => {
                  setShowModal(true);
                  setMenuOpen(false);
                }} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ConsultationFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </motion.nav>
  );
} 