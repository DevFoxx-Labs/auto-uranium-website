'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Shield, Sparkles, Check, Car, Calendar, Clock, Phone, User, CheckCircle2, Send, X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const CAR_TYPES = [
  { id: 'hatchback', name: 'Hatchback', desc: 'i20, Swift, Polo, Altroz', multiplier: 1.0 },
  { id: 'sedan', name: 'Sedan', desc: 'City, Verna, Virtus, Slavia', multiplier: 1.2 },
  { id: 'suv', name: 'SUV / MUV', desc: 'Creta, Harrier, Fortuner, XUV700', multiplier: 1.4 },
  { id: 'luxury', name: 'Luxury / Sports', desc: 'BMW, Mercedes, Audi, Porsche', multiplier: 1.7 },
];

const SERVICE_OPTIONS = [
  { id: 'ppf', name: 'PPF Paint Protection Film (Full Body)', basePrice: 45000, duration: '2-3 Days' },
  { id: 'ceramic', name: '9H Ceramic & Graphene Coating', basePrice: 18000, duration: '1 Day' },
  { id: 'detailing', name: 'Multi-Stage Paint Correction & Detailing', basePrice: 7500, duration: '6 Hours' },
  { id: 'glass-film', name: 'Ceramic Glass Sun Control Tinting', basePrice: 9500, duration: '4 Hours' },
  { id: 'wash', name: 'Decontamination & Deep Foam Wash', basePrice: 2500, duration: '2 Hours' },
  { id: 'custom-paint', name: 'Custom Body Painting / Caliper Styling', basePrice: 12000, duration: '2 Days' },
];

export default function QuoteModal({ isOpen, onClose, initialService }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState(CAR_TYPES[1]);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [SERVICE_OPTIONS.find((s) => s.name.toLowerCase().includes(initialService.toLowerCase()))?.id || 'ceramic'] : ['ceramic']
  );
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculatedTotal = selectedServices.reduce((sum, serviceId) => {
    const s = SERVICE_OPTIONS.find((opt) => opt.id === serviceId);
    return sum + (s ? s.basePrice * selectedCar.multiplier : 0);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Trigger confetti victory
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-[#0c1017] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden my-8 text-left"
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3847]/10 border border-[#ff3847]/30 text-[#ff3847] text-[11px] font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Instant Estimator & Studio Booking</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white uppercase">
                Estimate Your <span className="text-gradient-red">Care Package</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Auto Uranium Studio • Maharshi Dayanand Marg, Prayagraj
              </p>
            </div>

            {/* Step 1: Vehicle & Service Selection */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Vehicle Category Picker */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#00ff88]" /> 1. Select Vehicle Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {CAR_TYPES.map((ct) => (
                      <button
                        key={ct.id}
                        type="button"
                        onClick={() => setSelectedCar(ct)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          selectedCar.id === ct.id
                            ? 'bg-[#ff3847]/15 border-[#ff3847] text-white shadow-lg shadow-[#ff3847]/10'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className="text-xs font-bold">{ct.name}</div>
                        <div className="text-[10px] text-gray-400 mt-0.5 truncate">{ct.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-red-400" /> 2. Select Care Services
                  </label>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {SERVICE_OPTIONS.map((so) => {
                      const isSelected = selectedServices.includes(so.id);
                      const estimatedCost = Math.round(so.basePrice * selectedCar.multiplier);
                      return (
                        <div
                          key={so.id}
                          onClick={() => toggleService(so.id)}
                          className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-white/10 border-[#00ff88] text-white'
                              : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/15'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                                isSelected ? 'bg-[#00ff88] border-[#00ff88] text-black' : 'border-white/30'
                              }`}
                            >
                              {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">{so.name}</div>
                              <div className="text-[10px] text-gray-400">Est. Duration: {so.duration}</div>
                            </div>
                          </div>
                          <div className="text-xs font-extrabold text-[#00ff88]">
                            ₹{estimatedCost.toLocaleString('en-IN')}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Estimated Cost Summary */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-black to-emerald-950/40 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Estimated Investment</div>
                    <div className="text-2xl font-black text-white">
                      ₹{calculatedTotal.toLocaleString('en-IN')}{' '}
                      <span className="text-[10px] font-normal text-gray-400">+ Taxes</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-[#ff3847] hover:bg-[#e6001b] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#ff3847]/30"
                  >
                    Next: Pick Date & Time →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Customer Contact & Slot Selection */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300">Your Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="Rahul Sharma"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3847]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300">Phone Number (WhatsApp)</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 99354 13993"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3847]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#ff3847]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300">Time Slot</label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#0a0d14] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#ff3847]"
                    >
                      <option value="10:00 AM">Morning - 10:00 AM</option>
                      <option value="01:00 PM">Afternoon - 01:00 PM</option>
                      <option value="04:00 PM">Evening - 04:00 PM</option>
                      <option value="06:00 PM">Late Evening - 06:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Vehicle:</span>
                    <span className="font-bold text-white">{selectedCar.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Services ({selectedServices.length}):</span>
                    <span className="font-bold text-emerald-400">
                      ₹{calculatedTotal.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-xs uppercase rounded-xl"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#00ff88] hover:bg-[#00dd77] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#00ff88]/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Confirm Studio Reservation
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00ff88]/20 border border-[#00ff88]/50 text-[#00ff88] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase">Reservation Confirmed!</h3>
            <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#00ff88] font-bold">{ownerName}</span>! Our detailing specialist will reach out to <span className="text-white font-bold">{phone}</span> shortly to finalize vehicle intake at our Prayagraj studio.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs space-y-1 text-gray-300">
              <div>📍 39/25 Maharshi Dayanand Marg, Civil Lines, Prayagraj</div>
              <div>📞 Direct Studio: +91 99354 13993</div>
              <div>⏰ Open Daily till 8:00 PM</div>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="mt-4 px-8 py-3 bg-[#ff3847] text-white font-bold text-xs uppercase rounded-full shadow-lg"
            >
              Done
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
