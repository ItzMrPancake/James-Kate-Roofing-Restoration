import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Award } from 'lucide-react';
import { COMPANY_INFO, DFW_CITIES } from '../data/roofingData';

interface FooterProps {
  onOpenSchedule: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule, onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black">
                <ShieldCheck className="w-5 h-5 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white tracking-tight">
                  James Kate Roofing & Restoration
                </span>
                <span className="text-[10px] uppercase font-semibold text-slate-400">
                  dallasftworthroofer.com
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dallas-Fort Worth's premier GAF Master Elite® roofing contractor since 2008. Dedicated to honest forensic inspections, high-wind storm restoration, commercial flat roof engineering, and lifelong community relationships across North Texas.
            </p>

            <div className="pt-2 space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={COMPANY_INFO.phoneRaw} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone} (Main Dispatch)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>HQ: {COMPANY_INFO.headquarters.address}, {COMPANY_INFO.headquarters.city}, TX {COMPANY_INFO.headquarters.zip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Roofing Services */}
          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Services
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Residential Replacement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('materials')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Class 4 Impact Shingles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Standing Seam Metal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Commercial TPO Flat Roofs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('storm-restoration')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Storm Damage & Hail Claims
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Emergency Leak Tarping
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Seamless Gutters & Siding
                </button>
              </li>
            </ul>
          </div>

          {/* DFW Service Areas */}
          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Key Service Areas
            </div>
            <ul className="space-y-1.5 text-[11px]">
              {DFW_CITIES.map((c) => (
                <li key={c.name}>
                  <button
                    type="button"
                    onClick={() => onNavigate('service-areas')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {c.name}, TX Roofing
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials & Legal */}
          <div>
            <div className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Credentials & Legal
            </div>
            <div className="space-y-2 text-[11px] leading-relaxed">
              <div className="text-slate-300">
                <strong>GAF Master Elite®:</strong> ID #ME43912
              </div>
              <div className="text-slate-300">
                <strong>BBB Rating:</strong> A+ Accredited Since 2008
              </div>
              <div className="text-slate-300">
                <strong>Haag Certified:</strong> Commercial & Residential
              </div>
              <div className="text-slate-300">
                <strong>Texas HB 2102:</strong> Fully compliant consumer protection operations
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenSchedule}
                  className="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-colors text-xs"
                >
                  Free Drone Inspection
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} James Kate Roofing & Restoration. All rights reserved. Operating under dallasftworthroofer.com.
          </div>
          <div className="flex items-center gap-4">
            <span>Licensed & Fully Insured ($2M General Liability)</span>
            <span aria-hidden="true">·</span>
            <span>Proud North Texas Family Business</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
