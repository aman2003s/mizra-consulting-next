export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What does Mizra Consulting do exactly?",
        answer: "We offer end-to-end product management, software development consulting, and business process automation services. From MVP planning to SaaS growth, we help you execute smarter and scale faster."
      },
      {
        question: "Do you work with early-stage startups or only large companies?",
        answer: "We work with both. Our lean, modular model is designed for early-stage founders, scaling startups, and even SMBs or enterprise teams seeking rapid digital transformation."
      },
      {
        question: "Where are you based?",
        answer: "We're based in Faridabad, Delhi NCR (India) — but we work with clients across India, UAE, US, and globally."
      }
    ]
  },
  {
    category: "Product & Technology",
    items: [
      {
        question: "Can you build a full product (web/app) from scratch?",
        answer: "Yes. Through our vetted partner network and internal strategy team, we deliver full-stack MVPs, custom web platforms, and mobile solutions."
      },
      {
        question: "What tech stacks do you work with?",
        answer: "React, Node.js, Laravel, Firebase, WordPress, Webflow, Glide, Bubble, and more. We also help you choose between code vs. no-code based on budget and scalability."
      },
      {
        question: "Can you guide us without building the tech yourself?",
        answer: "Absolutely. We offer pure product consulting, tech stack planning, vendor evaluation, or roadmap planning if you already have a dev team."
      }
    ]
  },
  {
    category: "Pricing & Engagement",
    items: [
      {
        question: "What are your engagement models?",
        answer: "• Fixed-scope Projects\n• Monthly Retainer (Product/Tech Advisor)\n• Hourly Freelance Support (UX, PM, Dev, Analytics)\n• Build-Operate-Transfer for MVPs"
      },
      {
        question: "How much does an MVP cost?",
        answer: "It depends on the scope. We offer MVPs starting at ₹1.5L to ₹5L (INR) or $2,000–$6,000 (USD), depending on complexity and features."
      },
      {
        question: "Do you sign NDAs or contracts?",
        answer: "Yes — we believe in full confidentiality, formal SOWs, and milestone-based contracts."
      }
    ]
  },
  {
    category: "Process & Delivery",
    items: [
      {
        question: "What's your typical delivery process?",
        answer: "1. Free discovery call\n2. Proposal + timeline + price\n3. Kick-off with roadmap\n4. Agile delivery in sprints\n5. Review + Handover + Optional growth support"
      },
      {
        question: "What if I just want analytics or CRM setup?",
        answer: "We offer modular services — you can choose CRM setup, analytics, automation, or UI audit as standalone packages."
      },
      {
        question: "How soon can we start?",
        answer: "We typically onboard new clients within 3–5 working days after proposal finalization."
      }
    ]
  }
]; 