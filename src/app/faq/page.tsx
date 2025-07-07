import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./faq.module.scss";
import Accordion from "@/components/Accordion";

export default function FAQPage() {
  return (
    <div className={styles.faqPage}>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroLabel}>Mizra FAQs</div>
        <h1 className={styles.heroTitle}>YOUR QUESTION ANSWERED</h1>
        <div className={styles.heroSubheadline}>Got questions?</div>
        <div className={styles.heroDescription}>
          We&apos;ve answered the most common ones to make your decision easier.
        </div>
      </section>
      <section className={styles.faqAccordionSection}>
        <Accordion
          category="General"
          items={[
            { question: "What Does Mizra Consulting Do Exactly?", answer: "We help you design, build, and scale digital products and solutions tailored to your business needs." },
            { question: "Do You Work With Early-Stage Startups Or Only Large Companies?", answer: "We work with both early-stage startups and established enterprises." },
            { question: "Where Are You Based?", answer: "We are based in Gurugram, Haryana, India, but work with clients globally." },
          ]}
        />
        <Accordion
          category="Product & Technology"
          items={[
            { question: "Can You Build A Full Product (Web/App) From Scratch?", answer: "Yes, we can take your idea from concept to launch, handling all aspects of product development." },
            { question: "What Tech Stacks Do You Work With?", answer: "We work with a wide range of modern technologies including React, Node.js, Python, and more." },
            { question: "Can You Guide Us Without Building The Tech Yourself?", answer: "Absolutely! We offer consulting and advisory services even if you have your own development team." },
          ]}
        />
        <Accordion
          category="Pricing And Engagement"
          items={[
            { question: "What Are Your Engagement Models?", answer: "We offer flexible engagement models including fixed price, time & material, and dedicated teams." },
            { question: "How Much Does An MVP Cost?", answer: "MVP costs vary based on scope, but we provide transparent estimates after understanding your requirements." },
            { question: "Do You Sign NDAs Or Contracts?", answer: "Yes, we are happy to sign NDAs and formal contracts to protect your ideas and interests." },
          ]}
        />
        <Accordion
          category="Process And Delivers"
          items={[
            { question: "What's Your Typical Delivery Process?", answer: "We follow an agile process: discovery, design, development, testing, and deployment." },
            { question: "What if I Just Want Analytics Or CRM Setup?", answer: "We can help with standalone analytics or CRM setup as well as full product builds." },
            { question: "How Soon Can We Start?", answer: "We can usually start within a week after initial discussions and agreement." },
          ]}
        />
      </section>
      <section className={styles.contactSection}>
        <div className={styles.contactHeadline}>Still Have Question?</div>
        <div className={styles.contactSubheadline}>
          Lets Hop On A Quick Call To Adress Your Needs
        </div>
        <div className={styles.contactInfo}>
          <span style={{ fontWeight: 700 }}>
            +91 92057 10374
          </span> |
          <span style={{ fontWeight: 700 }}>
            Hello@Mizra.Tech
          </span>
        </div>
      </section>
      <Footer />
    </div>
  );
} 