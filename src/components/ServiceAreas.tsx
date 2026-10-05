import React, { useState } from 'react';
import { DFW_CITIES, COMPANY_INFO } from '../data/roofingData';
import { MapPin, Building, ShieldCheck, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceAreasProps {
  onOpenSchedule: (cityName: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenSchedule }) => {
  const [selectedCityName, setSelectedCityName] = useState<string>('Mansfield');

  const activeCity = DFW_CITIES.find(c => c.name === selectedCityName) || DFW_CITIES[0];

  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <MapPin className="w-4 h-4" />
            <span>Metroplex Coverage</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>8 Counties Across DFW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Proudly Serving the Entire Dallas-Fort Worth Metroplex
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            From our headquarters in Mansfield to dedicated field crews in Dallas, Fort Worth, Collin, and Denton counties, we provide rapid same-day response for emergencies and scheduled roof replacements.
          </p>
        </div>

        {/* 2-Column City Selector & Area Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: City List */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Select City to View Local Hub:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 max-h-[460px] overflow-y-auto pr-1">
              {DFW_CITIES.map((city) => {
                const isSelected = selectedCityName === city.name;
                return (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setSelectedCityName(city.name)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold">{city.name}</div>
                      <div className={`text-xs ${isSelected ? 'text-slate-800' : 'text-slate-500'}`}>
                        {city.county} County
                      </div>
                    </div>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                      isSelected ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {city.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected City Profile */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  Active Dispatch Hub
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Roofing in {activeCity.name}, TX
                </h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Serving ZIP codes: {activeCity.zipCodes.join(', ')} and surrounding subdivisions
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href={COMPANY_INFO.phoneRaw}
                  className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 text-xs font-semibold flex items-center gap-1.5 hover:border-amber-500"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(972) 284-1655</span>
                </a>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-semibold text-slate-300">Local Area Notes & Experience</div>
                <p className="text-slate-400 leading-relaxed">{activeCity.notes}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-semibold text-slate-300">Weather & Storm Profile</div>
                <p className="text-amber-300 font-medium">{activeCity.recentStorm}</p>
                <p className="text-slate-400 text-[11px]">
                  Local roofs face extreme UV breakdown during hot Texas summers followed by fast-moving spring hail supercells.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="font-semibold text-slate-300">What {activeCity.name} Homeowners Receive:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free 21-point drone inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Local city permit handling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero upfront deposit on claims</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>50-Yr GAF Golden Pledge warranty</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenSchedule(`Roof Inspection in ${activeCity.name}`)}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Free Inspection in {activeCity.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Branch Offices Grid */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Building className="w-4 h-4 text-amber-400" />
            <span>Physical Offices & Material Staging Yards</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1">
              <div className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                Main Headquarters
              </div>
              <div className="text-white font-semibold">Mansfield, TX</div>
              <div className="text-slate-400">{COMPANY_INFO.headquarters.address}</div>
              <div className="text-slate-400">{COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} {COMPANY_INFO.headquarters.zip}</div>
              <div className="text-slate-300 font-mono pt-1">(972) 284-1655</div>
            </div>

            {COMPANY_INFO.branches.map((b) => (
              <div key={b.city} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="font-semibold text-slate-400 uppercase tracking-wider text-[11px]">
                  {b.label}
                </div>
                <div className="text-white font-semibold">{b.city}, TX</div>
                <div className="text-slate-400">{b.address}</div>
                <div className="text-slate-300 font-mono pt-1">(972) 284-1655</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
