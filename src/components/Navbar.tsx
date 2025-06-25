"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.logo}>
        <span role="img" aria-label="Mizra sun">🌅</span> Mizra
      </div>
      <ul className={styles.links}>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#industries">Industries</Link></li>
        <li><Link href="#case-studies">Case Studies</Link></li>
        <li><Link href="#about">About Us</Link></li>
      </ul>
      <div className={styles.cta}>
        <Link href="#contact" className={styles.bookBtn}>Book a Call</Link>
      </div>
      <button
        className={styles.menuBtn}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          <XMarkIcon width={28} height={28} />
        ) : (
          <Bars3Icon width={28} height={28} />
        )}
      </button>
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
              <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="#industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
              <li><Link href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
              <li><Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            </ul>
            <Link href="#contact" className={styles.bookBtn} onClick={() => setMenuOpen(false)}>
              Book a Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 