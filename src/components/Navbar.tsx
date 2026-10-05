import React, { useState } from 'react';
import { Phone, ShieldCheck, Calendar, Menu, X, ArrowUpRight, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface NavbarProps {
  onOpenSchedule: (servicePreset?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Emergency & Trust Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">24/7 DFW Storm & Hail Emergency Response</span>
            <span className="hidden md:inline text-slate-500" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-400">GAF Master Elite® Contractor (Top 2% Nationwide)</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400">A+ BBB Accredited Since 2008</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <a
              href={COMPANY_INFO.phoneRaw}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Strictly One Row, 3 Zones */}
      <nav className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Title (One Line Wordmark) */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-white tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                James Kate
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-400 uppercase leading-tight">
                Roofing & Restoration
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean text with subtle hover) */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => handleNavClick('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('storm-restoration')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Storm & Hail
            </button>
            <button
              onClick={() => handleNavClick('cost-calculator')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cost Estimator
            </button>
            <button
              onClick={() => handleNavClick('materials')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Materials Guide
            </button>
            <button
              onClick={() => handleNavClick('inspection-guide')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              21-Pt Inspection
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Service Areas
            </button>
          </div>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.phoneRaw}
              className="px-3.5 py-2 rounded-lg border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-xs font-semibold flex items-center gap-2 transition-all hover:bg-slate-900"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(972) 284-1655</span>
            </a>
            <button
              onClick={() => onOpenSchedule('Free Inspection')}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Get Free Estimate</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.phoneRaw}
              className="p-2 rounded-lg border border-slate-800 text-amber-400 bg-slate-900"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-slate-800/80 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <button
              onClick={() => handleNavClick('services')}
              className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-900 rounded-md"
            >
              Services Overview
            </button>
            <button
              onClick={() => handleNavClick('storm-restoration')}
              className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-900 rounded-md"
            >
              Storm & Hail Damage Restoration
            </button>
            <button
              onClick={() => handleNavClick('cost-calculator')}
              className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-900 rounded-md"
            >
              Instant Roof Cost Calculator
            </button>
            <button
              onClick={() => handleNavClick('materials')}
              className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-900 rounded-md"
            >
              Roofing Materials Comparison
            </button>
            <button
              onClick={() => handleNavClick('inspection-guide')}
              className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-900 rounded-md"
            >
              21-Point Inspection Checklist
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="w-full text-left py-2 px-3 text-sm text-slate-200 hover:bg-slate-900 rounded-md"
            >
              DFW Service Areas
            </button>

            <div className="pt-2 border-t border-slate-800/60 grid grid-cols-2 gap-2">
              <a
                href={COMPANY_INFO.phoneRaw}
                className="py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-semibold text-white flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call (972) 284-1655
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule('Free Inspection');
                }}
                className="py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 font-semibold text-center text-xs flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Free Inspection
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
