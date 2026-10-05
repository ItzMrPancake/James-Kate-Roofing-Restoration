/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CostCalculator } from './components/CostCalculator';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { HailTracker } from './components/HailTracker';
import { InspectionChecklist } from './components/InspectionChecklist';
import { MaterialsComparison } from './components/MaterialsComparison';
import { InsurancePlaybook } from './components/InsurancePlaybook';
import { ServiceAreas } from './components/ServiceAreas';
import { TestimonialsAndBadges } from './components/TestimonialsAndBadges';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { ScheduleModal } from './components/ScheduleModal';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [schedulePreset, setSchedulePreset] = useState('Free 21-Point Drone Inspection');

  const handleOpenSchedule = (preset?: string) => {
    if (preset) {
      setSchedulePreset(preset);
    }
    setScheduleModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCalculator = () => {
    handleNavigate('cost-calculator');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-amber-500/30 selection:text-amber-200">
      {/* Strict Top Bar Contract Navigation */}
      <Navbar
        onOpenSchedule={handleOpenSchedule}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenSchedule={handleOpenSchedule}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Interactive Roof Cost & Texas Insurance Savings Estimator */}
        <CostCalculator
          onOpenSchedule={handleOpenSchedule}
        />

        {/* Interactive Before & After Hail Damage vs Restored Roof Slider */}
        <BeforeAfterSlider />

        {/* Full-Spectrum Services Catalog */}
        <ServicesSection
          onOpenSchedule={handleOpenSchedule}
        />

        {/* DFW Hail & Storm Activity by ZIP Code Tracker */}
        <HailTracker
          onOpenSchedule={handleOpenSchedule}
        />

        {/* 21-Point Forensic Roof Inspection Checklist */}
        <InspectionChecklist
          onOpenSchedule={() => handleOpenSchedule('Free 21-Point Drone Inspection')}
        />

        {/* Roofing Materials Comparison Matrix */}
        <MaterialsComparison
          onOpenSchedule={handleOpenSchedule}
        />

        {/* Texas Insurance Claim Playbook & HB 2102 Legal Consumer Protection */}
        <InsurancePlaybook
          onOpenSchedule={() => handleOpenSchedule('Insurance Claim Assistance')}
        />

        {/* DFW Metroplex Service Areas & Local Dispatch Hubs */}
        <ServiceAreas
          onOpenSchedule={handleOpenSchedule}
        />

        {/* Verified Reviews & Elite Manufacturer Certifications */}
        <TestimonialsAndBadges />
      </main>

      {/* Comprehensive Site Footer */}
      <Footer
        onOpenSchedule={() => handleOpenSchedule('Free 21-Point Drone Inspection')}
        onNavigate={handleNavigate}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingContactBar
        onOpenSchedule={() => handleOpenSchedule('Free 21-Point Drone Inspection')}
      />

      {/* Interactive Free Inspection & Quote Booking Modal */}
      <ScheduleModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        initialService={schedulePreset}
      />
    </div>
  );
}
