import HeroSection from "@/components/landing/HeroSection";
import FormSection from "@/components/landing/FormSection";
import AboutSection from "@/components/landing/AboutSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TeamSection from "@/components/landing/TeamSection";
import StrategySection from "@/components/landing/StrategySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FormSection />
      <AboutSection />
      <ProblemsSection />
      <ServicesSection />
      <TeamSection />
      <StrategySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
