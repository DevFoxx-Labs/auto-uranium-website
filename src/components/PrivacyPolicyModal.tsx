'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, FileText, CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
            <div className="w-10 h-10 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white uppercase">Privacy Policy</h3>
              <p className="text-[11px] text-emerald-400 font-semibold">
                Compliant with Digital Personal Data Protection (DPDP) Act, 2023 (India)
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
            <span className="font-bold text-white">Effective Date:</span> September 7, 2026 |{' '}
            <span className="font-bold text-white">Data Fiduciary:</span> Auto Uranium (Viraj Trading), 39/25, Maharshi Dayanand Marg, Civil Lines, Prayagraj, UP 211001.
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#ff3847]" /> 1. Scope & Notice under DPDP Act 2023
            </h4>
            <p>
              Auto Uranium ("Viraj Trading", "We", "Us") operates as a Data Fiduciary under the Digital Personal Data Protection Act, 2023 ("DPDP Act"). This Notice informs Data Principals ("You", "Vehicle Owner") about the collection, processing, usage, and protection of your personal data when utilizing our auto detailing, PPF, ceramic coating, custom painting, and glass tinting services in Prayagraj.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#ff3847]" /> 2. Personal Data Collected & Purpose Specification
            </h4>
            <p>We collect only necessary digital personal data for specified, legitimate commercial purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li><strong className="text-white">Identity & Contact Data:</strong> Name, WhatsApp phone number, and email address for appointment scheduling, quotation, invoice generation, and written warranty tracking.</li>
              <li><strong className="text-white">Vehicle Data:</strong> Vehicle registration number, make, model, year, paint condition photos, and service intake logs to perform tailored detailing, paint restoration, and PPF installation.</li>
              <li><strong className="text-white">Financial Data:</strong> Digital payment transaction reference IDs (processed via encrypted UPI/Banking gateways; we do not store raw banking credentials).</li>
              <li><strong className="text-white">Digital Technical Logs:</strong> Anonymized website usage analytics to optimize our 3D customizer experience.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#ff3847]" /> 3. Legal Grounds: Consent & Necessary Uses
            </h4>
            <p>
              We process personal data strictly upon your explicit, informed consent given when submitting booking forms or direct studio inquiries. You have the right to withdraw consent at any time without impacting prior lawful processing by contacting our Data Protection Officer.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3847]" /> 4. Rights of Data Principals under DPDP Act
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block">Right to Access & Summary</span>
                Request summary of processed data and processing activities.
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block">Right to Correction & Erasure</span>
                Update inaccurate data or request complete deletion of personal records.
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block">Right to Grievance Redressal</span>
                Access prompt grievance resolution via our Grievance Officer within statutory timelines.
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="font-bold text-white block">Right to Nominate</span>
                Nominate an individual to exercise data rights in the event of incapacity or death.
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#ff3847]" /> 5. Data Safeguards & Retention Period
            </h4>
            <p>
              We implement reasonable technical and organizational security safeguards (SSL encryption, restricted access controls, secure cloud storage) to prevent personal data breaches. Personal data is retained only for the duration required to fulfill warranty commitments (up to 10 years for PPF warranties) or as required under Indian laws.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">
              6. Data Protection Officer (DPO) & Grievance Contact
            </h4>
            <div className="text-xs space-y-1 text-gray-300 mt-1">
              <div><strong className="text-white">Data Protection Officer:</strong> Mr. Viraj Trading (Auto Uranium)</div>
              <div><strong className="text-white">Studio Address:</strong> 39/25, Maharshi Dayanand Marg, behind Royal Enfield Showroom, Civil Lines, Prayagraj, UP 211001</div>
              <div><strong className="text-white">Direct Phone / WhatsApp:</strong> +91 99354 13993</div>
              <div><strong className="text-white">Response Commitment:</strong> Grievance requests acknowledged within 24 hours under DPDP norms.</div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-white/10 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#00ff88] hover:bg-[#00dd77] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#00ff88]/30"
          >
            I Acknowledge & Understand
          </button>
        </div>
      </motion.div>
    </div>
  );
}
