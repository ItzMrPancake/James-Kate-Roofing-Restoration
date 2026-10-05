import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface FloatingContactBarProps {
  onOpenSchedule: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenSchedule }) => {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5">
      <div className="flex items-center gap-2">
        <a
          href={COMPANY_INFO.phoneRaw}
          className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 active:bg-slate-800"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>(972) 284-1655</span>
        </a>
        <button
          type="button"
          onClick={onOpenSchedule}
          className="flex-1 py-2.5 px-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-center text-xs flex items-center justify-center gap-1.5 active:bg-amber-400 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Free Inspection</span>
        </button>
      </div>
    </aside>
  );
};
