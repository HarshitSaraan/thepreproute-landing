import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, UserPlus, AlertCircle, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import authService from '../api/services/authService';

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode); // 'login' | 'register'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    exam: 'IPMAT 2026',
    stream: 'Commerce',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (successMsg) setSuccessMsg('');
  };

  const extractToken = (resData) => {
    return (
      resData?.token ||
      resData?.user?.token ||
      resData?.data?.token ||
      resData?.data?.user?.token ||
      resData?.accessToken
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174';

    try {
      if (mode === 'login') {
        const res = await authService.login({
          email: formData.email.trim(),
          password: formData.password,
        });

        const token = extractToken(res.data);
        if (token) {
          localStorage.setItem('token', token);
          window.location.href = dashboardUrl;
        } else {
          setError('Login succeeded, redirecting...');
          window.location.href = dashboardUrl;
        }
      } else {
        // Registration
        const res = await authService.register({
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
          phone: formData.phone.trim(),
          exam: formData.exam,
          stream: formData.stream,
        });

        const token = extractToken(res.data);
        if (token) {
          localStorage.setItem('token', token);
          window.location.href = dashboardUrl;
        } else {
          // Try automatic login immediately after registration
          try {
            const loginRes = await authService.login({
              email: formData.email.trim(),
              password: formData.password,
            });
            const autoToken = extractToken(loginRes.data);
            if (autoToken) {
              localStorage.setItem('token', autoToken);
              window.location.href = dashboardUrl;
              return;
            }
          } catch (autoLoginErr) {
            // Auto login failed, switch to login tab
            console.log('Auto login after registration failed:', autoLoginErr);
          }

          setMode('login');
          setSuccessMsg('Account created successfully! Please enter your password to sign in.');
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
      const serverMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        (typeof err.response?.data === 'string' ? err.response?.data : null);

      if (serverMessage) {
        setError(serverMessage);
      } else if (err.response?.status === 409) {
        setError('An account with this email already exists. Please Sign In.');
      } else if (err.response?.status === 401) {
        setError('Incorrect email or password. Please try again.');
      } else {
        setError('Something went wrong. Please check your details and try again.');
      }
    } finally {
      setLoading(false);
    }
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
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] px-6 py-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  {mode === 'login' ? (
                    <LogIn className="w-4 h-4 text-white" />
                  ) : (
                    <UserPlus className="w-4 h-4 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-black tracking-tight">
                  {mode === 'login' ? 'Welcome Back to PrepRoute' : 'Create PrepRoute Account'}
                </h3>
              </div>
              <p className="text-blue-100 text-xs font-medium">
                {mode === 'login'
                  ? 'Sign in to continue your IPMAT preparation journey.'
                  : 'Start your smart preparation with mock tests & analytics.'}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {/* Tab Switcher */}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl mb-5">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setError('');
                    setSuccessMsg('');
                  }}
                  className={`py-2 text-xs font-black rounded-lg transition-all ${
                    mode === 'login'
                      ? 'bg-white text-[#2196F3] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('register');
                    setError('');
                    setSuccessMsg('');
                  }}
                  className={`py-2 text-xs font-black rounded-lg transition-all ${
                    mode === 'register'
                      ? 'bg-white text-[#2196F3] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  New Account
                </button>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 mb-4">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {successMsg && (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 text-xs rounded-xl border border-emerald-200 mb-4">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {mode === 'register' && (
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aryan Sharma"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. student@gmail.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                  />
                </div>

                {mode === 'register' && (
                  <>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20 transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                          Target Exam
                        </label>
                        <select
                          name="exam"
                          value={formData.exam}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-[#2196F3]"
                        >
                          <option value="IPMAT 2026">IPMAT 2026</option>
                          <option value="IPMAT 2027">IPMAT 2027</option>
                          <option value="JIPMAT 2026">JIPMAT 2026</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                          Stream
                        </label>
                        <select
                          name="stream"
                          value={formData.stream}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-[#2196F3]"
                        >
                          <option value="Commerce">Commerce</option>
                          <option value="Science">Science</option>
                          <option value="Humanities">Humanities</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-3 py-3 bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-sm rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>{mode === 'login' ? 'Sign In to Dashboard' : 'Create Account'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
