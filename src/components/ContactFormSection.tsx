"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactFormSection.module.scss";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to a plain JavaScript object
    const data: Record<string, FormDataEntryValue> = {};
    formData.forEach((value, key) => {
      // Ensure keys match your Google Sheet headers
      data[key] = value;
    });
    console.log("Data object before stringify:", formData);
    console.log("JSON stringified body:", JSON.stringify(formData));
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbylV_jvJu3QNYO49AM5TlU4tTj5u1m69sL3pdWvPveUt1yYjDIMGLrM59rC6iBAiYNQ/exec",
        {
          method: "POST",
          // IMPORTANT: Set Content-Type and mode: 'no-cors'
          headers: {
            "Content-Type": "application/json",
          },
          body: formData, // Stringify the plain object
          mode: "no-cors", // Crucial for direct Apps Script calls
        }
      );

      // --- Important Note on no-cors ---
      // When mode: 'no-cors' is used, response.ok will always be true,
      // and you cannot read the response body (e.g., res.json()).
      // The request is sent, but you don't get direct confirmation
      // of success/failure from the Apps Script in the frontend.
      // You rely on the request being successfully initiated.
      // If you need direct confirmation, you'd need a proxy server
      // or a different Google Cloud setup (e.g., Cloud Functions + API Gateway).

      // For this setup, we assume if fetch doesn't throw an error, it's successful.
      // Any error thrown here will be a network error or a browser-level issue,
      // not necessarily an error from Apps Script.
      console.log("Form submission initiated. Check Google Sheet for data.");

      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      // This catch block will primarily handle network errors or CORS issues
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
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Last Name *</label>
              <input type="text" name="lastName" placeholder="Last Name" required />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email *</label>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone No *</label>
              <input type="tel" name="phone" placeholder="Phone No" required />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Message *</label>
            <textarea name="message" placeholder="Write your message" rows={3} required />
          </div>
          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {submitted && <div className={styles.thankyou}>Thank you! We&apos;ll be in touch soon.</div>}
          {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
        </motion.form>
      </div>
    </section>
  );
}