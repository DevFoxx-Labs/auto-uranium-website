'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, CheckCircle2, ShieldAlert, Award, Scale, HelpCircle } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsOfServiceModal({ isOpen, onClose }: TermsOfServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-[#0c1017] border border-white/15 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden my-8 text-left text-gray-300 max-h-[85vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff3847]/20 border border-[#ff3847]/40 flex items-center justify-center text-[#ff3847]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white uppercase">Terms of Service & Care Agreement</h3>
              <p className="text-[11px] text-red-400 font-semibold">
                Governed by Indian Contract Act 1872 & IT Act 2000
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto pr-2 space-y-6 pt-4 text-xs leading-relaxed">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
            <span className="font-bold text-white">Studio Entity:</span> Auto Uranium (Viraj Trading - Est. 2006) |{' '}
            <span className="font-bold text-white">Location:</span> Civil Lines, Prayagraj, UP 211001.
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#ff3847]" /> 1. Binding Contract & Acceptance
            </h4>
            <p>
              By accessing the Auto Uranium website, using our interactive 3D studio, submitting an online estimate, or handing over your vehicle for PPF, ceramic coating, paint correction, custom painting, or glass film services at our Prayagraj studio, you enter into a legally binding agreement under the Indian Contract Act, 1872 and Information Technology Act, 2000.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ff3847]" /> 2. Service Estimates, Intakes & Written Warranties
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li><strong className="text-white">Vehicle Paint Inspection:</strong> All vehicles undergo a mandatory pre-service multi-point digital paint depth inspection and high-resolution photo documentation upon studio intake.</li>
              <li><strong className="text-white">Estimates & Quotations:</strong> Digital estimates generated via our calculator are preliminary. Final job orders are confirmed after physical vehicle inspection by master detailers.</li>
              <li><strong className="text-white">Written Warranty Terms:</strong> PPF (up to 10 years) and Ceramic Coatings (up to 5 years) carry official written warranty cards issued by Viraj Trading. Warranty claims require adherence to prescribed maintenance wash guidelines.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3847]" /> 3. Vehicle Delivery & Payment Settlement
            </h4>
            <p>
              Full payment settlement is required upon service completion prior to vehicle delivery. Vehicles left uncollected beyond 5 business days post-completion without prior notice may attract nominal studio storage charges.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#ff3847]" /> 4. Electronic Consent under DPDP Act, 2023
            </h4>
            <p>
              Your personal data (name, contact number, vehicle details, intake photos) is collected strictly for service delivery, warranty registration, and communication under our DPDP Act 2023 Privacy Policy. Electronic submissions via WhatsApp or online forms constitute valid electronic consent.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">
              5. Governing Law & Jurisdiction
            </h4>
            <p className="text-xs text-gray-300 mt-1">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes or legal proceedings arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the Courts at <strong className="text-white">Prayagraj (Allahabad), Uttar Pradesh</strong>.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#ff3847] hover:bg-[#e62e3d] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#ff3847]/30"
          >
            I Agree & Accept Terms
          </button>
        </div>
      </motion.div>
    </div>
  );
}
