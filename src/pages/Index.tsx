import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TechStack from "@/components/landing/TechStack";
import Architecture from "@/components/landing/Architecture";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <TechStack />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
