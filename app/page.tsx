import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import WaitlistForm from "@/components/sections/waitlist-form";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="w-4/5 mx-auto">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <WaitlistForm />
      </div>
      <Footer />
    </main>
  );
}