import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import InvestmentSection from "@/components/InvestmentSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky frosted Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with dark overlay background and direct CTA */}
        <HeroSection />

        {/* Bento-box / Masonry Image Gallery with Lightbox */}
        <GallerySection />

        {/* Detailed editorial About Section */}
        <AboutSection />

        {/* Features & Key Differentiators */}
        <FeaturesSection />

        {/* Investment & Income Potential */}
        <InvestmentSection />

        {/* Location & Map Section */}
        <LocationSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* High-conversion final CTA Section */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
