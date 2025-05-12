"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI in mimicking my teaching style?",
    answer: "Aryavarta AI uses advanced multimodal learning to capture your unique teaching style, including voice patterns, gestures, and teaching methodologies. Most educators report 90%+ accuracy in replicating their teaching approach after proper training.",
  },
  {
    question: "What subjects and grade levels work best with Aryavarta?",
    answer: "Our platform supports all subjects and grade levels from K-12 through higher education. The system adapts particularly well to STEM subjects, languages, humanities, and professional skill training.",
  },
  {
    question: "How do I monetize my AI teaching agent?",
    answer: "Educators can monetize in multiple ways: subscription-based access to your AI agent, pay-per-session models, licensing to educational institutions, or through the Aryavarta marketplace where you earn royalties based on usage.",
  },
  {
    question: "What about privacy and data security?",
    answer: "We prioritize privacy using federated learning approaches that keep student data secure. All interactions adhere to FERPA and GDPR compliance standards, with end-to-end encryption for all user sessions.",
  },
  {
    question: "How much technical knowledge do I need to create my agent?",
    answer: "Minimal technical knowledge is required. Our user-friendly interface guides you through the process of recording samples, uploading materials, and configuring your agent. We also offer white-glove onboarding for educators who need additional support.",
  },
  {
    question: "How long does it take to build and deploy my AI teaching agent?",
    answer: "With sufficient training material, most educators can deploy their first agent within 1-2 weeks. The quality improves over time as more interactions and content are incorporated into the system.",
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-sm font-medium uppercase tracking-wider text-primary">FAQ</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Aryavarta AI.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 bg-card/50 backdrop-blur-sm rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}