import React, { useState, useRef, useCallback, useEffect } from 'react';
import { IMAGES } from '../data/roofingData';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section className="py-16 lg:py-24 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            <ArrowLeftRight className="w-4 h-4" />
            <span>Interactive Comparison</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Real DFW Restorations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            From Storm-Damaged to Master Elite Restored
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Drag the slider to compare severe hail impact fracturing and granule loss against our completed GAF Master Elite® installation with high-definition dimensional shingles.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative h-[360px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 select-none cursor-ew-resize group"
          >
            {/* Background: AFTER Image (Pristine Luxury Roof) */}
            <img
              src={IMAGES.heroLuxury}
              alt="After: Pristine GAF Master Elite installation in Dallas Fort Worth"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* Overlay label AFTER */}
            <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>AFTER: GAF Master Elite® Installed</span>
            </div>

            {/* Foreground: BEFORE Image (Hail Damaged Close-up) clipped */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={IMAGES.hailInspection}
                alt="Before: Severe Texas hail impact damage and granule fractures"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute inset-0 bg-slate-950/20" />
              
              {/* Overlay label BEFORE */}
              <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md border border-rose-500/40 text-rose-400 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>BEFORE: Hail Bruising & Granule Loss</span>
              </div>
            </div>

            {/* Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-400 text-amber-400 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Quick Annotation Cards under Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="font-semibold text-rose-400 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span>Identified Pre-Restoration Vulnerabilities</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Hail impact crushed mineral granules down to the asphalt core. Over 40% loss of UV barrier, creating micro-fractures prone to sudden leaking during heavy rain.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Engineered James Kate Restoration</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Installed GAF Class 4 Impact-Resistant shingles with synthetic underlayment, ice and water leak barriers in valleys, and Cobra® ridge ventilation for maximum cooling efficiency.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
