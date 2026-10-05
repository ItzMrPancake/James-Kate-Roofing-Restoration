import React, { useState } from 'react';
import { INSPECTION_POINTS, IMAGES } from '../data/roofingData';
import { ShieldCheck, CheckCircle2, Camera, Layers, Wind, Droplets, ArrowRight } from 'lucide-react';

interface InspectionChecklistProps {
  onOpenSchedule: () => void;
}

export const InspectionChecklist: React.FC<InspectionChecklistProps> = ({ onOpenSchedule }) => {
  const [activeZoneIndex, setActiveZoneIndex] = useState<number>(0);

  const zoneIcons = [Layers, ShieldCheck, Wind, Droplets];

  return (
    <section id="inspection-guide" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <Camera className="w-4 h-4" />
            <span>Forensic Engineering</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>100% Free Drone & Ground Check</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Our Comprehensive 21-Point Forensic Roof Inspection
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Unlike storm chasers who glance at your roof from the driveway, our Haag-certified inspectors climb onto your roof and deploy high-resolution 4K aerial drones to document every structural component.
          </p>
        </div>

        {/* 2-Column Interactive Inspection Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Zone Selection & Points */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Zone Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {INSPECTION_POINTS.map((item, index) => {
                const Icon = zoneIcons[index % zoneIcons.length];
                const isActive = activeZoneIndex === index;
                return (
                  <button
                    key={item.zone}
                    type="button"
                    onClick={() => setActiveZoneIndex(index)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 mb-1" />
                    <div className="text-xs font-semibold leading-tight line-clamp-1">
                      {item.zone}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Zone Detail Card */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Zone: {INSPECTION_POINTS[activeZoneIndex].zone}</span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  5 Key Checkpoints
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {INSPECTION_POINTS[activeZoneIndex].points.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {point}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Includes full photographic proof report for your insurance carrier.
                </span>
                <button
                  type="button"
                  onClick={onOpenSchedule}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right: Forensic Technology & Photo Preview */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="relative rounded-xl overflow-hidden h-52 border border-slate-800">
              <img
                src={IMAGES.hailInspection}
                alt="Haag certified chalk square test inspection on roof shingles"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium bg-slate-950/80 backdrop-blur-sm p-2 rounded-lg border border-slate-800">
                Haag Certified Test Square: Chalk markers document exact hail impact density per 100 sq ft for adjuster approval.
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                What You Receive With Your Free Inspection:
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>4K Drone Aerial Imaging:</strong> High-resolution captures of roof slopes, valleys, and hard-to-reach gables without foot-traffic scuffing.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Itemized Xactimate Report:</strong> Standardized insurance estimating format detailing exact measurements and city building code requirements.
                </span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Honest Prognosis:</strong> If your roof has 5+ years of life left and just needs a $200 pipe boot fix, that's exactly what we will tell you.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              Zero sales pressure. Our Haag-certified inspectors do not work on commission quotas; their priority is forensic accuracy and homeowner safety.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
