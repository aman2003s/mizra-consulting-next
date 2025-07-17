"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.scss";
import logo from "../../public/mizra-logo.svg";
import Image from "next/image";
import Button from "./Button";
import ContactFormSection from "./ContactFormSection";
import ConsultationFormModal from "./ConsultationFormModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ul>
              <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="/industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
              <li><Link href="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
              <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <ConsultationFormModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </motion.nav>
  );
} 