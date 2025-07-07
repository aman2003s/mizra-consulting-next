"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactFormSection.module.scss";
import Button from "./Button";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  function validateForm(data: Record<string, FormDataEntryValue>) {
    const errors: typeof formErrors = {};
    if (!data.firstName || String(data.firstName).trim() === "") {
      errors.firstName = "First name is required.";
    }
    if (!data.lastName || String(data.lastName).trim() === "") {
      errors.lastName = "Last name is required.";
    }
    if (!data.email || String(data.email).trim() === "") {
      errors.email = "Email is required.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(data.email))) {
      errors.email = "Enter a valid email address.";
    }
    if (!data.phone || String(data.phone).trim() === "") {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(String(data.phone).replace(/\D/g, ""))) {
      errors.phone = "Enter a valid phone number.";
    }
    if (!data.message || String(data.message).trim() === "") {
      errors.message = "Message is required.";
    }
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFormErrors({});
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, FormDataEntryValue> = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Validate form
    const errors = validateForm(data);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbylV_jvJu3QNYO49AM5TlU4tTj5u1m69sL3pdWvPveUt1yYjDIMGLrM59rC6iBAiYNQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
          mode: "no-cors",
        }
      );
      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      let errorMessage = "Failed to send data. Please check your network or try again.";
      if (err instanceof Error) {
        errorMessage = err.message;
      console.error("Fetch error:", err);
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles.contactForm} id="contact">
      <div className={styles.card}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={styles.heading}
        >
          Ready To Collaborate?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className={styles.subheading}
        >
          Let&apos;s create something epic together
        </motion.p>
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          onSubmit={handleSubmit}
        >
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>First Name *</label>
              <input type="text" name="firstName" placeholder="First Name" required />
              {formErrors.firstName && (
                <div style={{ color: 'red', fontSize: 13 }}>{formErrors.firstName}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Last Name *</label>
              <input type="text" name="lastName" placeholder="Last Name" required />
              {formErrors.lastName && (
                <div style={{ color: 'red', fontSize: 13 }}>{formErrors.lastName}</div>
              )}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email *</label>
              <input type="email" name="email" placeholder="Email" required />
              {formErrors.email && (
                <div style={{ color: 'red', fontSize: 13 }}>{formErrors.email}</div>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone No *</label>
              <input type="tel" name="phone" placeholder="Phone No" required />
              {formErrors.phone && (
                <div style={{ color: 'red', fontSize: 13 }}>{formErrors.phone}</div>
              )}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message *</label>
            <textarea name="message" placeholder="Write your message" rows={3} required />
            {formErrors.message && (
              <div style={{ color: 'red', fontSize: 13 }}>{formErrors.message}</div>
            )}
          </div>
          <Button text={loading ? "Submitting..." : "Submit"} />
          {submitted && <div className={styles.thankyou}>Thank you! We&apos;ll be in touch soon.</div>}
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </motion.form>
      </div>
    </section>
  );
}