import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/roofingData';
import { CheckCircle2, Shield, Clock, ArrowRight, Wrench, Home, Building2, CloudLightning, Droplets } from 'lucide-react';

interface ServicesSectionProps {
  onOpenSchedule: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenSchedule }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Wrench },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial Flat', icon: Building2 },
    { id: 'storm', label: 'Storm & Hail', icon: CloudLightning },
    { id: 'repairs', label: 'Repairs & Leaks', icon: Droplets },
    { id: 'exteriors', label: 'Gutters & Siding', icon: Shield }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              <span>Full-Spectrum Roofing</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Residential & Commercial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Master-Crafted Roofing Solutions Built for North Texas
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md">
            From single-family architectural shingle installations to 50,000 sq ft industrial TPO membranes, every project is supervised by certified Master Elite® superintendents.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional segmented buttons per design constitution) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/80 rounded-xl border border-slate-800/80 mb-10 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-xl group"
            >
              <div>
                {/* Image Header with Scrim */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category kicker */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-amber-400 border border-slate-800 capitalize">
                    {service.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-medium text-amber-300">
                    {service.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Engineering Standards
                    </div>
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Materials list */}
                  <div className="pt-2 text-xs text-slate-400">
                    <span className="text-slate-500">Systems: </span>
                    <span>{service.materialsIncluded.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Meta & CTA */}
              <div className="p-6 pt-0 border-t border-slate-800/80 bg-slate-950 mt-auto">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{service.warranty}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{service.turnaroundTime}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenSchedule(service.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-semibold border border-slate-800 hover:border-amber-500 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
