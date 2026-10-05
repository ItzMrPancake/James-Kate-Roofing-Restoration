import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, ShieldCheck, Clock, Upload, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/roofingData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Free 21-Point Drone Inspection'
}) => {
  const [service, setService] = useState(initialService);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [timeWindow, setTimeWindow] = useState('Morning (8:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation View */
          <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">
                Inspection Request Confirmed!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>. A James Kate field dispatcher has received your request for <strong className="text-amber-300">{service}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="text-slate-400"><strong>Address:</strong> {address}, TX {zipCode}</div>
              <div className="text-slate-400"><strong>Preferred Window:</strong> {timeWindow}</div>
              <div className="text-slate-400"><strong>Phone:</strong> {phone}</div>
              <div className="text-emerald-400 text-[11px] pt-1 border-t border-slate-800">
                ✓ An inspector will call you 30 minutes before arrival with live GPS tracking.
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={COMPANY_INFO.phoneRaw}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch Now: (972) 284-1655</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Free 21-Point Drone & Physical Check</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Schedule Your Free Roof Inspection
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Zero obligation · Forensic 4K drone photography · Texas HB 2102 compliant.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Service Selection */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Primary Service Needed
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="Free 21-Point Drone Inspection">Free 21-Point Drone & Forensic Inspection</option>
                  <option value="Hail & Wind Storm Damage Claim">Hail & Wind Storm Damage Insurance Claim</option>
                  <option value="Residential Roof Replacement">Full Residential Roof Replacement (Class 4 / Shingles / Metal)</option>
                  <option value="Emergency Roof Leak Repair & Tarping">Emergency Roof Leak Repair & 24/7 Tarping</option>
                  <option value="Commercial TPO / Flat Roof Restoration">Commercial Flat Roof (TPO / Silicone Coating)</option>
                  <option value="Seamless Gutters & Siding">Seamless Gutters & James Hardie Siding</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Michael Smith"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Phone Number (for arrival text) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(972) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Email & ZIP */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Texas ZIP Code *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="76063"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Property Address */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Property Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Oak Crest Dr, Mansfield, TX"
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Time Window */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Preferred Inspection Time Window
                </label>
                <select
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                  <option value="Urgent 24/7 Emergency Tarping">Urgent 24/7 Emergency Tarping Needed Now</option>
                </select>
              </div>

              {/* Photo Upload Simulator & Notes */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Specific Damage Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about leaks, recent hail date, or insurance carrier..."
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500 focus:outline-none text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Confirm Free Inspection Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-slate-500 text-center mt-2">
                  No credit card required · We never sell your personal information.
                </div>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
