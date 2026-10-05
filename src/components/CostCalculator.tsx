import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck, DollarSign, Calendar, TrendingDown, Info, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface CostCalculatorProps {
  onOpenSchedule: (details: string) => void;
}

interface MaterialOption {
  id: string;
  name: string;
  baseCostPerSqFt: number;
  lifespan: string;
  hailRating: string;
  insuranceDiscountPct: number;
  warranty: string;
  description: string;
}

const MATERIALS: MaterialOption[] = [
  {
    id: 'asphalt',
    name: 'Architectural Shingles (GAF Timberline HDZ)',
    baseCostPerSqFt: 4.85,
    lifespan: '25 - 30 Years',
    hailRating: 'Class 3 (UL 2218)',
    insuranceDiscountPct: 5,
    warranty: '50-Yr GAF Golden Pledge®',
    description: 'The standard choice for North Texas residential homes with high wind resistance.'
  },
  {
    id: 'class4',
    name: 'Class 4 Impact Resistant (GAF Timberline AS II)',
    baseCostPerSqFt: 5.75,
    lifespan: '35 - 40 Years',
    hailRating: 'Class 4 (Highest Hail Armor)',
    insuranceDiscountPct: 24,
    warranty: 'Lifetime Workmanship + 50-Yr Warranty',
    description: 'Reinforced SBS rubberized core. Qualifies for major Texas home insurance discounts.'
  },
  {
    id: 'metal',
    name: 'Standing Seam Metal (24-Gauge Galvalume)',
    baseCostPerSqFt: 11.20,
    lifespan: '50+ Years',
    hailRating: 'Class 4 (Maximum Dent Resistance)',
    insuranceDiscountPct: 28,
    warranty: 'Lifetime Structural + 40-Yr Paint',
    description: 'Architectural concealed fasteners, energy-saving Kynar 500 reflective coating.'
  },
  {
    id: 'tile',
    name: 'Spanish Clay or Concrete Tile',
    baseCostPerSqFt: 12.80,
    lifespan: '50+ Years',
    hailRating: 'Severe Weather Rated',
    insuranceDiscountPct: 20,
    warranty: 'Lifetime Tile / 15-Yr Workmanship',
    description: 'Custom luxury aesthetic for Mediterranean estates with hurricane tie-downs.'
  },
  {
    id: 'tpo',
    name: 'Commercial Single-Ply TPO Flat Roof',
    baseCostPerSqFt: 6.20,
    lifespan: '25 - 30 Years',
    hailRating: 'FM Approved Severe Hail',
    insuranceDiscountPct: 15,
    warranty: '25-Year NDL Manufacturer Warranty',
    description: 'High-reflectivity white membrane with robotically heat-welded watertight seams.'
  }
];

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenSchedule }) => {
  const [squareFootage, setSquareFootage] = useState<number>(2600);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('class4');
  const [stories, setStories] = useState<number>(1);
  const [pitch, setPitch] = useState<'standard' | 'moderate' | 'steep'>('standard');
  const [needTearOff, setNeedTearOff] = useState<boolean>(true);

  const selectedMaterial = useMemo(() => {
    return MATERIALS.find(m => m.id === selectedMaterialId) || MATERIALS[1];
  }, [selectedMaterialId]);

  const calculation = useMemo(() => {
    // Pitch multiplier:
    // standard (4:12 - 6:12) = 1.0
    // moderate (7:12 - 9:12) = 1.15
    // steep (10:12+) = 1.30
    const pitchMultiplier = pitch === 'standard' ? 1.0 : pitch === 'moderate' ? 1.15 : 1.30;
    
    // Story multiplier:
    const storyMultiplier = stories === 1 ? 1.0 : stories === 2 ? 1.12 : 1.25;

    // Tear-off labor & dumping fee
    const tearOffCostPerSqFt = needTearOff ? 0.95 : 0;

    // Roof surface area is larger than footprint based on pitch & overhangs (typically 1.12 to 1.35x ground sq ft)
    const effectiveRoofArea = squareFootage * 1.18 * pitchMultiplier;

    const baseUnitRate = selectedMaterial.baseCostPerSqFt;
    const calculatedTotal = effectiveRoofArea * (baseUnitRate * storyMultiplier + tearOffCostPerSqFt);

    const lowEstimate = Math.round(calculatedTotal * 0.93 / 100) * 100;
    const highEstimate = Math.round(calculatedTotal * 1.07 / 100) * 100;

    // Typical Texas homeowner insurance is $2,800 to $4,500/year for DFW homes
    const estimatedYearlyInsurance = Math.min(5200, Math.max(2400, squareFootage * 1.3));
    const annualInsuranceSavings = Math.round(estimatedYearlyInsurance * (selectedMaterial.insuranceDiscountPct / 100));
    const tenYearInsuranceSavings = annualInsuranceSavings * 10;

    return {
      effectiveRoofArea: Math.round(effectiveRoofArea),
      lowEstimate,
      highEstimate,
      annualInsuranceSavings,
      tenYearInsuranceSavings
    };
  }, [squareFootage, selectedMaterial, stories, pitch, needTearOff]);

  const handleBookWithQuote = () => {
    const quoteSummary = `${selectedMaterial.name} for ~${squareFootage} sq ft home (${stories}-story, ${pitch} pitch). Estimated investment range: $${calculation.lowEstimate.toLocaleString()} - $${calculation.highEstimate.toLocaleString()}. Potential 10-Yr Texas insurance savings: ~$${calculation.tenYearInsuranceSavings.toLocaleString()}`;
    onOpenSchedule(quoteSummary);
  };

  return (
    <section id="cost-calculator" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Estimator</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>DFW Real-Market Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Instant Roof Cost & Insurance Savings Calculator
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Estimate your investment and see how choosing Class 4 impact-resistant materials can unlock hundreds of dollars in annual Texas homeowner insurance premium discounts.
          </p>
        </div>

        {/* 2-Column Calculator Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            
            {/* Input 1: Square Footage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="square-footage-slider" className="text-sm font-semibold text-slate-200">
                  Approximate Home / Building Floor Area
                </label>
                <div className="text-sm font-bold text-amber-400 font-mono">
                  {squareFootage.toLocaleString()} sq ft
                </div>
              </div>
              <input
                id="square-footage-slider"
                aria-label="Approximate Home / Building Floor Area in square feet"
                type="range"
                min="1000"
                max="6500"
                step="100"
                value={squareFootage}
                onChange={(e) => setSquareFootage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-mono">
                <span>1,000 sq ft</span>
                <span>2,600 sq ft (Avg DFW)</span>
                <span>6,500+ sq ft</span>
              </div>
            </div>

            {/* Input 2: Material Selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 mb-2.5">
                Roofing Material Type
              </label>
              <div className="space-y-2">
                {MATERIALS.map((mat) => {
                  const isSelected = selectedMaterialId === mat.id;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-white shadow-sm'
                          : 'border-slate-800/80 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white flex items-center gap-2">
                          <span>{mat.name}</span>
                          {mat.id === 'class4' && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                              Best Texas Value
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {mat.description}
                        </div>
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <div className="text-xs font-mono font-medium text-amber-300">
                          {mat.hailRating}
                        </div>
                        <div className="text-[11px] text-emerald-400">
                          {mat.insuranceDiscountPct}% Texas Ins. Discount
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input 3: Stories & Complexity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Building Stories
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setStories(num)}
                      className={`py-1.5 text-xs font-medium rounded-md transition-colors ${
                        stories === num
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {num === 3 ? '3+ Story' : `${num} Story`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Roof Pitch & Slope
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800">
                  {(['standard', 'moderate', 'steep'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPitch(p)}
                      className={`py-1.5 text-xs font-medium capitalize rounded-md transition-colors ${
                        pitch === p
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input 4: Tear-off toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-500" />
                Include complete old shingle tear-off, hauling & municipal dump fees
              </span>
              <button
                type="button"
                onClick={() => setNeedTearOff(!needTearOff)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                  needTearOff ? 'bg-slate-800 text-amber-400 border border-amber-500/40' : 'bg-slate-900 text-slate-500 border border-slate-800'
                }`}
              >
                {needTearOff ? 'Included' : 'Skip'}
              </button>
            </div>

          </div>

          {/* Right Column: Live Calculation Breakdown */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Estimated Total Investment
              </div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
                ${calculation.lowEstimate.toLocaleString()} – ${calculation.highEstimate.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Includes materials, synthetic underlayment, ice barrier, ridge vents, labor & disposal.
              </div>
            </div>

            {/* Insurance Savings Highlight Card */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wide">
                <TrendingDown className="w-4 h-4 text-emerald-400" />
                <span>Texas Home Insurance Savings</span>
              </div>
              <div className="font-display text-2xl font-bold text-white tabular-nums">
                ~${calculation.annualInsuranceSavings.toLocaleString()} <span className="text-xs font-normal text-emerald-300">/ year</span>
              </div>
              <div className="text-xs text-emerald-300/90 leading-relaxed">
                Projected 10-year homeowner insurance savings:{' '}
                <strong className="text-white font-semibold">
                  ~${calculation.tenYearInsuranceSavings.toLocaleString()}
                </strong>
                . In Texas, Class 4 impact roofs often pay for their own upgrade within 3 to 4 years.
              </div>
            </div>

            {/* Specifications Summary */}
            <div className="space-y-2.5 text-xs border-t border-slate-800 pt-4">
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Selected Material:</span>
                <span className="font-medium text-white text-right max-w-[200px] truncate">{selectedMaterial.name}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Hail Resistance:</span>
                <span className="font-medium text-amber-300">{selectedMaterial.hailRating}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Expected Lifespan:</span>
                <span className="font-medium text-white">{selectedMaterial.lifespan}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Warranty Coverage:</span>
                <span className="font-medium text-white">{selectedMaterial.warranty}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span className="text-slate-400">Calculated Roof Surface:</span>
                <span className="font-mono text-slate-200">~{calculation.effectiveRoofArea.toLocaleString()} sq ft</span>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookWithQuote}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Lock In Estimate & Schedule Free Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2.5">
                100% Free · No Obligation · Our Haag inspector verifies measurements on-site.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
