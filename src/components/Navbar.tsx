"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./Navbar.module.scss";
import logo from "../../public/mizra-logo.svg";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.navigationContainer}> 
        <ul className={styles.links}>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#industries">Industries</Link></li>
          <li><Link href="#case-studies">Case Studies</Link></li>
          <li><Link href="#about">About Us</Link></li>
        </ul>
        <div className={styles.logo}>
          <Image src={logo} alt="Mizra Logo" width={88} height={60} />
        </div>
       
        <div className={styles.cta}>
          <Button type="primary" size="lg" href="#contact">
            Book a Call
          </Button>
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
              <li><Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link href="#industries" onClick={() => setMenuOpen(false)}>Industries</Link></li>
              <li><Link href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
              <li><Link href="#about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            </ul>
            <Button 
              type="primary" 
              size="lg" 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              fullWidth
            >
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 