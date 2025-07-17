import React, { useState } from "react";
import styles from "./ContactFormSection.module.scss";
import Button from "./Button";

interface ConsultationFormModalProps {
  open: boolean;
  onClose: () => void;
  expert?: boolean;
}

export default function ConsultationFormModal({
  open,
  onClose,
  expert = false,
}: ConsultationFormModalProps) {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div
      className={styles.contactForm}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(19, 27, 38, 0.10)",
        backdropFilter: "blur(30.4px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <div className={styles.card} style={{ position: "relative" }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "none",
            border: "none",
            fontSize: 32,
            color: "#fff",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          &times;
        </button>

        <h2 className={styles.heading}>
          {expert
            ? "Not Sure What You Need? Ask an Expert"
            : "Request a Free Consultation"}
        </h2>
        <p className={styles.subheading}>
          {expert
            ? "Tell us a bit about what you're thinking, and we'll help you figure out the best solution."
            : "Share your details and let us know what you're looking for. We'll connect you with the right expert."}
        </p>

        {submitted ? (
          <div
            className={styles.thankyou}
            style={{
              textAlign: "center",
              color: "#f8aa0b",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            Thank you! We have received your request.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name || ""}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              {expert ? (
                <></>
              ) : (
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={form["company"] || ""}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                  />
                </div>
              )}
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone || ""}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            {expert ? (
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Preferred Way to Connect *
                </label>
                <select
                  name="preferred_connect"
                  value={form.preferred_connect || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="video">Video Call</option>
                </select>
              </div>
            ) : (
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Services You Are Interested In *
                </label>
                <select
                  name="services_interested"
                  value={form.services_interested || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="consulting">Consulting</option>
                  <option value="strategy">Strategy</option>
                  <option value="technology">Technology</option>
                  <option value="operations">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}
            <div className={styles.inputGroup}>
              <label className={styles.label}>
                {expert
                  ? "Brief About Your Requirement"
                  : "What Would You Like Help With? *"}
              </label>
              <textarea
                name="help_with"
                value={form.help_with || ""}
                onChange={handleChange}
                placeholder={
                  expert
                    ? "Example: I want to grow my business online but don’t know where to begin."
                    : "Example: We need to build a SaaS platform for HR tech within 3 months"
                }
                rows={3}
                required
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button text={submitting ? "Submitting..." : "Submit"} />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
