import React from 'react';
import { MATERIAL_COMPARISON } from '../data/roofingData';
import { Layers, ShieldCheck, Wind, Flame, TrendingDown, Clock, ArrowRight } from 'lucide-react';

interface MaterialsComparisonProps {
  onOpenSchedule: (material: string) => void;
}

export const MaterialsComparison: React.FC<MaterialsComparisonProps> = ({ onOpenSchedule }) => {
  return (
    <section id="materials" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <Layers className="w-4 h-4" />
            <span>Materials Architecture</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>GAF & Commercial Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Compare Roofing Materials for Texas Weather
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Evaluate durability, wind resistance, longevity, and annual homeowner insurance premium discounts across our primary residential and commercial systems.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIAL_COMPARISON.map((mat, index) => {
            const isHighlight = mat.name.includes('Class 4');
            return (
              <div
                key={mat.name}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all relative ${
                  isHighlight
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/80 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-6 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                    Most Popular in DFW
                  </div>
                )}

                <div>
                  <div className="text-xs text-amber-400 font-mono mb-1">{mat.brand}</div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {mat.bestFor}
                  </p>

                  {/* Quantitative Metric Rows */}
                  <div className="space-y-3 text-xs border-t border-slate-800/80 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        Hail Rating
                      </span>
                      <span className="font-semibold text-white">{mat.hailRating}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Wind className="w-3.5 h-3.5 text-blue-400" />
                        Wind Resistance
                      </span>
                      <span className="font-semibold text-white">{mat.windRating}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        Expected Lifespan
                      </span>
                      <span className="font-semibold text-white">{mat.lifespan}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Flame className="w-3.5 h-3.5 text-rose-400" />
                        Fire Rating
                      </span>
                      <span className="font-semibold text-white">{mat.fireRating}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-800/60">
                      <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                        <TrendingDown className="w-3.5 h-3.5" />
                        Texas Ins. Savings
                      </span>
                      <span className="font-bold text-emerald-300 text-right">{mat.insuranceDiscount}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => onOpenSchedule(`Material Inquiry: ${mat.name}`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Sample & Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
