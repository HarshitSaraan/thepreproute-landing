import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserCheck, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import counsellorService from '../api/services/counsellorService';

export default function MentorConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    role: 'Student',
    year: '2026',
    stream: 'Commerce',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await counsellorService.createRequest({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        role: formData.role,
        year: formData.year,
        stream: formData.stream,
      });
      setSuccess(true);
    } catch (err) {
      console.error('Failed to submit consultation request:', err);
      const msg =
        err.response?.data?.message ||
        'Could not submit request right now. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
          >
            {/* Header Gradient */}
            <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-6 py-6 text-white relative">
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-black tracking-tight">Talk to an IIM Mentor</h3>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm font-medium">
                Get a personalized 1-on-1 prep roadmap crafted by top IIM alumni.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {success ? (
                <div className="text-center py-6 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-2xl font-black text-slate-900">Request Received!</h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-800">{formData.fullName}</span>. Our senior mentor will reach out to you on <span className="font-bold text-slate-800">{formData.phone}</span> shortly!
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-full hover:bg-slate-800 transition-all"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Role Selector */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
                      I am a
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
                      {['Student', 'Parent'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, role }))}
                          className={`py-2 text-xs font-black rounded-lg transition-all ${
                            formData.role === role
                              ? 'bg-white text-[#2196F3] shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Aryan Sharma"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. aryan@gmail.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Target Year & Stream */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                        Target Exam Year
                      </label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all"
                      >
                        <option value="2026">IPMAT 2026</option>
                        <option value="2027">IPMAT 2027</option>
                        <option value="2025">IPMAT 2025</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                        Current Stream
                      </label>
                      <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-white focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all"
                      >
                        <option value="Commerce">Commerce</option>
                        <option value="Science (PCM)">Science (PCM)</option>
                        <option value="Science (PCB)">Science (PCB)</option>
                        <option value="Humanities">Humanities / Arts</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3 bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-sm rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Scheduling Session...</span>
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4 stroke-[2.5]" />
                        <span>Confirm Free Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
