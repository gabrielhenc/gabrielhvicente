import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyInviteSection from "@/components/sections/WhyInviteSection";
import SpeakingTopicsSection from "@/components/sections/SpeakingTopicsSection";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import ContentSection from "@/components/sections/ContentSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import SpeakingFormSection from "@/components/sections/SpeakingFormSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <StatsSection />
        <WhyInviteSection />
        <SpeakingTopicsSection />
        <AboutSection />
        <CoursesSection />
        <ContentSection />
        <PerformanceSection />
        <SpeakingFormSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}