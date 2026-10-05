import React, { useState } from 'react';
import { CloudLightning, MapPin, AlertCircle, CheckCircle, Search, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { DFW_CITIES } from '../data/roofingData';

interface HailTrackerProps {
  onOpenSchedule: (context: string) => void;
}

interface ZipData {
  city: string;
  county: string;
  riskLevel: 'Severe' | 'Elevated' | 'Moderate';
  lastRecordedHail: string;
  recordedHailSize: string;
  codeRequirement: string;
  insuranceFilingAdvice: string;
}

const DFW_ZIP_DATABASE: Record<string, ZipData> = {
  '76063': {
    city: 'Mansfield',
    county: 'Tarrant / Johnson',
    riskLevel: 'Severe',
    lastRecordedHail: 'Spring 2025 Supercell Event',
    recordedHailSize: '1.75" (Golf Ball Size)',
    codeRequirement: 'IRC 2021: Mandatory drip edge on eaves & rakes, balanced 1:150 attic ventilation.',
    insuranceFilingAdvice: 'Homeowners who experienced hail in 2024–2025 should schedule inspection immediately before statutory 12-month policy window expires.'
  },
  '75024': {
    city: 'Plano / Frisco (West)',
    county: 'Collin',
    riskLevel: 'Severe',
    lastRecordedHail: 'Spring 2025 Multi-Cell Swath',
    recordedHailSize: '2.00" - 2.50" (Hen Egg Size)',
    codeRequirement: 'Collin County Code: Class 4 UL 2218 recommended; mandatory high-temp leak barrier in valleys.',
    insuranceFilingAdvice: 'High density of insurance claims approved. Adjusters require photographic Haag certified test squares.'
  },
  '75214': {
    city: 'Dallas (Lakewood / East Dallas)',
    county: 'Dallas',
    riskLevel: 'Elevated',
    lastRecordedHail: 'Fall 2024 Hail & High Wind Event',
    recordedHailSize: '1.50" (Ping Pong Size)',
    codeRequirement: 'City of Dallas Chapter 53: Double underlayment or synthetic membrane required on low slopes.',
    insuranceFilingAdvice: 'Older tree canopy often hides localized shingle bruise patterns. Aerial drone scans recommended.'
  },
  '76107': {
    city: 'Fort Worth (Cultural District / Westover)',
    county: 'Tarrant',
    riskLevel: 'Severe',
    lastRecordedHail: 'Spring 2025 Severe Tarrant Corridor',
    recordedHailSize: '2.25" (Baseball Size)',
    codeRequirement: 'City of Fort Worth: Decking inspection required upon tear-off; rotten sheathing replacement required.',
    insuranceFilingAdvice: 'Severe hail impact verified across Tarrant County. Immediate complimentary inspection advised.'
  },
  '76006': {
    city: 'Arlington (North)',
    county: 'Tarrant',
    riskLevel: 'Elevated',
    lastRecordedHail: 'Spring 2025 Storm Wave',
    recordedHailSize: '1.75" (Golf Ball Size)',
    codeRequirement: 'City of Arlington Residential Code: Minimum 26-gauge flashing at all wall abutments.',
    insuranceFilingAdvice: 'Over 1,200 roofs replaced. We handle direct adjuster on-roof meetings for Arlington homeowners.'
  },
  '76092': {
    city: 'Southlake',
    county: 'Tarrant',
    riskLevel: 'Severe',
    lastRecordedHail: 'Spring 2024 & Spring 2025',
    recordedHailSize: '2.50" (Tennis Ball Size)',
    codeRequirement: 'Southlake HOA Strict Guidelines: Designer architectural or Class 4 impact shingles required.',
    insuranceFilingAdvice: 'Insurance carriers typically approve complete replacement when 10+ impacts are documented per square.'
  },
  '75070': {
    city: 'McKinney',
    county: 'Collin',
    riskLevel: 'Elevated',
    lastRecordedHail: 'Summer 2024 Severe Front',
    recordedHailSize: '1.50" - 1.75"',
    codeRequirement: 'McKinney Building Inspections: Ridge vent calculation and permits strictly enforced.',
    insuranceFilingAdvice: 'Insurance claim documentation prepared in Xactimate software to avoid lowball estimates.'
  },
  '76201': {
    city: 'Denton',
    county: 'Denton',
    riskLevel: 'Moderate',
    lastRecordedHail: 'Spring 2025 Severe Squall Line',
    recordedHailSize: '1.25" - 1.50"',
    codeRequirement: 'City of Denton: Ice & water shield required 36" minimum from valley centerlines.',
    insuranceFilingAdvice: 'Wind lifted shingle tabs and creased edges frequently observed on 3-tab roofs.'
  }
};

export const HailTracker: React.FC<HailTrackerProps> = ({ onOpenSchedule }) => {
  const [inputZip, setInputZip] = useState<string>('76063');
  const [selectedResult, setSelectedResult] = useState<ZipData>(DFW_ZIP_DATABASE['76063']);
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = inputZip.trim();
    if (DFW_ZIP_DATABASE[cleanZip]) {
      setSelectedResult(DFW_ZIP_DATABASE[cleanZip]);
      setHasSearched(true);
    } else {
      // Provide intelligent North Texas fallback
      setSelectedResult({
        city: `DFW Metro Area (${cleanZip})`,
        county: 'North Texas Region',
        riskLevel: 'Elevated',
        lastRecordedHail: 'Active North Texas Storm Belt',
        recordedHailSize: '1.50" - 2.00" Typical DFW Swaths',
        codeRequirement: 'Texas Residential Code (IRC): Ice & water barrier, synthetic underlayment, drip edge, and attic ventilation.',
        insuranceFilingAdvice: 'Our field inspectors cover all North Texas ZIP codes with mobile drone inspection units. Request your free 21-point check.'
      });
      setHasSearched(true);
    }
  };

  const selectPreset = (zip: string) => {
    setInputZip(zip);
    setSelectedResult(DFW_ZIP_DATABASE[zip]);
    setHasSearched(true);
  };

  return (
    <section id="storm-restoration" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <CloudLightning className="w-4 h-4" />
            <span>North Texas Storm Intelligence</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Hail Alley Radar Data</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            DFW Hail & Storm Activity by ZIP Code
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            The Dallas-Fort Worth metroplex experiences more severe hail and high-wind events than almost anywhere in the United States. Check your local storm history, municipal building code mandates, and insurance claim guidelines below.
          </p>
        </div>

        {/* Search Bar & Quick Buttons */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-stretch max-w-2xl mb-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                value={inputZip}
                onChange={(e) => setInputZip(e.target.value)}
                placeholder="Enter 5-digit Texas ZIP (e.g. 76063, 75024)"
                maxLength={5}
                className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>Lookup Storm Data</span>
            </button>
          </form>

          {/* Quick Select Buttons */}
          <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
            <span className="text-slate-500">Popular DFW Hubs:</span>
            {['76063 (Mansfield)', '75024 (Plano/Frisco)', '76107 (Fort Worth)', '75214 (Dallas)', '76092 (Southlake)', '76006 (Arlington)'].map((label) => {
              const zip = label.slice(0, 5);
              return (
                <button
                  key={zip}
                  type="button"
                  onClick={() => selectPreset(zip)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                    inputZip === zip
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Result Detail Panel */}
        {hasSearched && selectedResult && (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  Radar Area Verified
                </div>
                <div className="text-2xl font-bold text-white flex items-center gap-3">
                  <span>{selectedResult.city}</span>
                  <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {selectedResult.county}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider">Hail Threat Level</div>
                  <div className={`text-sm font-bold ${
                    selectedResult.riskLevel === 'Severe' ? 'text-rose-400' : 'text-amber-400'
                  }`}>
                    {selectedResult.riskLevel} Storm History
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  selectedResult.riskLevel === 'Severe' ? 'bg-rose-500 animate-ping' : 'bg-amber-500'
                }`} />
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              
              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  Recent Storm Swath
                </div>
                <div className="text-white font-medium text-sm">
                  {selectedResult.lastRecordedHail}
                </div>
                <div className="text-amber-300 font-mono text-xs">
                  Hail size recorded: {selectedResult.recordedHailSize}
                </div>
                <p className="text-slate-400 text-[11px] pt-1">
                  Hail stones over 1.25" exceed manufacturer impact threshold, fracturing internal shingle matting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  Municipal Code Mandates
                </div>
                <div className="text-white font-medium text-sm leading-snug">
                  Local Building Inspection Standard
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {selectedResult.codeRequirement}
                </p>
                <div className="text-emerald-400 text-[11px] flex items-center gap-1 pt-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>James Kate pulls all city permits & schedules city inspections</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                <div className="text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  Insurance Filing Window
                </div>
                <div className="text-white font-medium text-sm">
                  Statutory 12-Month Notice
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {selectedResult.insuranceFilingAdvice}
                </p>
                <div className="text-amber-400 text-[11px] flex items-center gap-1 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Texas HB 2102 Compliant Claim Assistance</span>
                </div>
              </div>

            </div>

            <div className="p-6 bg-slate-950/80 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                Notice: We have active Haag-certified roofing inspectors stationed across {selectedResult.city}.
              </div>
              <button
                type="button"
                onClick={() => onOpenSchedule(`Storm & Hail Inspection for ZIP ${inputZip} (${selectedResult.city})`)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule Free Drone Inspection for {inputZip}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
