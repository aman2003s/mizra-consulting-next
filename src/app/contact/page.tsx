import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import Button from "@/components/Button";
import styles from "./contact.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <Navbar />
      <section className={styles.heroSection}>
        <div>
          <div className={styles.heroLabel}>Let's turn your</div>
          <h1 className={styles.heroTitle}>VISION INTO DIGITAL REALITY</h1>
          <div className={styles.heroSubheadline}>
            Talk to Us Whether you're ready to build your MVP, automate business processes, or need clarity on your product roadmap—we're just a message away.
          </div>
          <div className={styles.heroResponseTime}>
            We respond within <span>24 hours</span> on all platforms !
          </div>
        </div>
      </section>
      {/* Reach To Us Section Placeholder */}
      <section className={styles.reachToUsSection}>
        <h2 className={styles.reachTitle}>Reach To Us</h2>
        <div className={styles.reachPhone}>+91 92057 10374</div>
        <div className={styles.reachEmail}>Email@Example.Com</div>
        <div className={styles.reachAddress}>
          704, 7th Floor, Palm Court, Mehrauli-Gurgaon Road, Sector 16,Gurugram, Haryana, 122007.
        </div>
      </section>
      {/* Strategy Call Section */}
      <section className={styles.strategyCallSection}>
        <div className={styles.strategyHeadline}>Book A Free Strategy Call</div>
        <div className={styles.strategySubheadline}>
          Schedule A <span>30-Min Zoom Call</span> We'll Understand Your Goals, Propose The Best Approach, And If We're The Right Fit
        </div>
        <Button text="Share us your details" />
      </section>
      {/* Contact Form Section */}
      <ContactFormSection />
      <Footer />
    </div>
  );
} 