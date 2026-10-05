import React from 'react';
import { ShieldCheck, FileCheck, Users, Hammer, CheckCircle2, AlertOctagon, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/roofingData';

interface InsurancePlaybookProps {
  onOpenSchedule: () => void;
}

export const InsurancePlaybook: React.FC<InsurancePlaybookProps> = ({ onOpenSchedule }) => {
  const steps = [
    {
      num: "01",
      title: "Free Forensic Inspection",
      desc: "Our Haag-certified inspector conducts a 21-point ground and 4K aerial drone inspection, documenting every hail bruise and wind crease.",
      highlight: "Includes high-res photo report"
    },
    {
      num: "02",
      title: "Claim Filing Support",
      desc: "We help you notify your carrier with precise meteorological hail storm dates and photos, avoiding premature claim denials.",
      highlight: "Proper storm date verification"
    },
    {
      num: "03",
      title: "On-Roof Adjuster Meeting",
      desc: "We personally climb the roof with your insurance adjuster, walking them through each test square and building code requirement.",
      highlight: "We advocate directly for your home"
    },
    {
      num: "04",
      title: "Itemized Scope & Supplements",
      desc: "We verify the adjuster's estimate against city codes (drip edge, synthetic felt, ice/water barrier) and submit supplements in Xactimate format.",
      highlight: "Ensures 100% code compliance"
    },
    {
      num: "05",
      title: "Flawless 1-Day Build & Cleanup",
      desc: "Our Master Elite crew tears off, replaces rotted decking, installs the complete GAF roofing system, and finishes with a magnetic nail sweep.",
      highlight: "Lifetime Workmanship Guarantee"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Insurance Claim Advocacy</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Zero Upfront Deposit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            The North Texas Homeowner's Insurance Playbook
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Dealing with insurance companies after a severe DFW hail storm can be overwhelming. We guide you through every step of the process with complete transparency and zero upfront money.
          </p>
        </div>

        {/* Steps Horizontal / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-950 rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="text-2xl font-black font-display text-amber-400/80 mb-2">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-medium text-amber-300">
                ✓ {step.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Texas HB 2102 Educational Card (Consumer Protection Notice) */}
        <div className="bg-slate-950 rounded-2xl border border-amber-500/40 p-6 sm:p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Texas House Bill 2102 Compliance Guarantee</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Why Reputable Texas Roofers Do Not "Waive" Your Insurance Deductible
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Under Texas Insurance Code § 707.002 (HB 2102), it is illegal for contractors to rebate, waive, or absorb a policyholder's insurance deductible. Contractors offering to "eat your deductible" are committing insurance fraud and typically cut critical corners—such as reusing rusted flashings, skipping synthetic underlayment, or failing to pull required city permits.
              </p>
              <div className="pt-2 text-xs text-slate-400">
                At James Kate Roofing, we ensure your insurance claim covers every legitimate code upgrade, maximizing your payout honestly so you receive the highest quality GAF Master Elite® roof without legal risk.
              </div>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onOpenSchedule}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Insurance Claim Help</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Honest Answers</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
            Frequently Asked Questions About DFW Roofing
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors"
              >
                <h4 className="text-sm font-bold text-white leading-snug">
                  {item.q}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
