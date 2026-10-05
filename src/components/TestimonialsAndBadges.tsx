import React from 'react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/roofingData';
import { Star, ShieldCheck, Award, CheckCircle, Quote } from 'lucide-react';

export const TestimonialsAndBadges: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Verified Local Reviews</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>4.9 Stars Across 487+ Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Trusted by North Texas Homeowners Since 2008
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Read first-hand accounts from neighbors across Frisco, Lakewood Dallas, Mansfield, Southlake, and Arlington who trusted James Kate Roofing with their storm restoration and luxury replacements.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified DFW Project ({t.year})
                  </span>
                </div>

                {/* Project Tag */}
                <div className="text-xs font-semibold text-amber-300 mb-2">
                  {t.project}
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 mt-6 border-t border-slate-800/80">
                <div className="font-bold text-white text-xs">{t.name}</div>
                <div className="text-[11px] text-slate-400">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Badges Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Industry Certifications & Elite Standards
            </h3>
            <p className="text-xs text-slate-400">
              We hold the highest factory distinctions granted in the roofing industry, ensuring your warranty is backed by the manufacturer for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_INFO.certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{cert.title}</span>
                  </div>
                  <div className="text-[11px] text-amber-400 font-medium mb-1">
                    {cert.badge}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
