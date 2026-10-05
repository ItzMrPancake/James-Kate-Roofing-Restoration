import React from 'react';
import { Calendar, Calculator, ShieldCheck, CheckCircle2, Award, Clock, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/roofingData';

interface HeroProps {
  onOpenSchedule: (preset?: string) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule, onScrollToCalculator }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-900">
      {/* Background Photography with Calibrated Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroLuxury}
          alt="Luxury Dallas Fort Worth home with new GAF architectural shingle roof"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-radial-at-t from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Anti-Slop Unboxed Trust Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-400 mb-4 tracking-wide uppercase">
          <span>GAF Master Elite® Contractor</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span>Mansfield & DFW Headquarters</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span>18+ Years of Service</span>
        </div>

        {/* Primary Editorial Headline (Balanced, no orphan words) */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            North Texas Roofing Engineered for Severe Hail & Sun.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
            Trusted by over 10,000 Dallas-Fort Worth homeowners and commercial property owners since 2008. 
            Receive a complimentary 21-point drone and forensic inspection, transparent itemized pricing, 
            and complete insurance claim advocacy without upfront deposits.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <button
              onClick={() => onOpenSchedule('Free 21-Point Inspection')}
              className="px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Free 21-Point Drone Inspection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onScrollToCalculator}
              className="px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Instant Roof Cost Calculator</span>
            </button>

            <a
              href={COMPANY_INFO.phoneRaw}
              className="sm:hidden px-4 py-3 rounded-lg border border-amber-500/50 bg-amber-500/10 text-amber-300 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call (972) 284-1655</span>
            </a>
          </div>

          {/* Unboxed Quantitative Proof Metrics */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-300">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                10,000+
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                DFW Roofs Restored
              </div>
            </div>

            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                Top 2%
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                GAF Master Elite® Status
              </div>
            </div>

            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                4.9 / 5.0
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                487+ Verified Local Reviews
              </div>
            </div>

            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                $0 Upfront
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Zero-Deposit on Claims
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Sub-hero Trust Strip */}
      <div className="mt-12 border-y border-slate-800/60 bg-slate-900/40 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>GAF President's Club Award Winner</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>A+ Better Business Bureau Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Haag Certified Forensic Roof Inspector</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>24/7 Rapid Storm & Leak Tarping Crew</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
