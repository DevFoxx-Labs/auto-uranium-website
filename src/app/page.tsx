'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureHighlights from '@/components/FeatureHighlights';
import Car3DStudio from '@/components/Car3DStudio';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessWorkflow from '@/components/ProcessWorkflow';
import ValueBanner from '@/components/ValueBanner';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import CustomerReviews from '@/components/CustomerReviews';
import ContactSection from '@/components/ContactSection';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [selectedInitialService, setSelectedInitialService] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedInitialService(undefined);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedInitialService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-100 overflow-hidden font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <HeroSection onOpenQuote={handleOpenBooking} />

      {/* 5 Pillar Feature Highlights Bar */}
      <FeatureHighlights />

      {/* Interactive WebGL 3D Detailing Studio */}
      <Car3DStudio />

      {/* 6 Card Services Grid */}
      <ServicesGrid onSelectService={handleSelectService} />

      {/* 4 Step Process Workflow */}
      <ProcessWorkflow />

      {/* High-Impact Value Banner */}
      <ValueBanner onOpenBooking={handleOpenBooking} />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterGallery />

      {/* Customer Reviews & Google Proof */}
      <CustomerReviews />

      {/* Prayagraj Location & Inquiry Section */}
      <ContactSection />

      {/* Pre-Footer Call to Action Banner */}
      <PreFooterCTA onOpenQuote={handleOpenBooking} />

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
        onOpenTerms={() => setIsTermsModalOpen(true)}
      />

      {/* Price Estimator & Booking Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedInitialService}
      />

      {/* Privacy Policy Modal (DPDP Act 2023 India Compliant) */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Terms of Service Modal (Indian Contract Act 1872 Compliant) */}
      <TermsOfServiceModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </main>
  );
}
