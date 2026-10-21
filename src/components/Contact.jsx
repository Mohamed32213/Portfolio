import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Download, 
  Sparkles,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

const EMAILJS_SERVICE_ID = 'service_sk047fd';
const EMAILJS_TEMPLATE_ID = 'template_gto0h7e';
const EMAILJS_PUBLIC_KEY = 'i3-_-mVtPLw7SrcRJ';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', roleType: 'Full-time Role' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: formData.roleType,
        },
        EMAILJS_PUBLIC_KEY
      );

      // Save email for confirmation message before clearing form
      setSubmittedEmail(formData.email);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#34d399', '#f59e0b', '#38bdf8']
      });

      // Clear the form fields after successful submission
      setFormData({ name: '', email: '', message: '', roleType: 'Full-time Role' });
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      setErrorMessage(
        'Failed to send message via EmailJS. Please verify your connection or reach out directly via email/WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 bg-[#080A0F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 glow-emerald-radial opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Let's Collaborate</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Ready to turn data into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              business impact?
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            I am currently open to full-time Data Analyst roles, freelance analytics contracts, and BI consulting projects.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Card (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl glass-panel bg-[#0C111A] border border-slate-800 space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Feel free to reach out directly via email, WhatsApp, or connect on LinkedIn.
                </p>
              </div>

              {/* Email with 1-click copy */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 block">
                  Official Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-mono text-sm text-emerald-400 hover:text-emerald-300 font-semibold truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-[11px] font-mono text-emerald-400 block animate-in fade-in">
                    ✓ Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 block">
                  Phone & WhatsApp
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm text-slate-200 font-medium">
                    {personalInfo.phone}
                  </span>
                  <a
                    href={personalInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold transition-colors"
                  >
                    Open Chat
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 px-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personalInfo.location} (Remote & Relocation Available)</span>
              </div>

              {/* Social Channels Matrix */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Connect on Socials
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4 text-emerald-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4 text-emerald-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-emerald-400" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={personalInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4 text-emerald-400" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* CV Download banner */}
              <div className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Mohamed_Ragab_Data_Analyst_CV.pdf"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete Resume (PDF)</span>
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Inquiry Form (Right) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl glass-panel bg-[#0C111A] border border-slate-800">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Whether you have an open data role or a business question, I'd love to hear from you.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your message has been dispatched successfully via EmailJS. Mohamed will get back to you within 24 hours at{' '}
                    <span className="text-emerald-400 font-mono font-medium">{submittedEmail || 'your email'}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage('');
                      setSubmittedEmail('');
                    }}
                    className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Inquiry Type Radio / Pill selector */}
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-2">
                      Inquiry Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Full-time Role', 'Freelance Project', 'Consulting / BI', 'General Inquiry'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          disabled={loading}
                          onClick={() => setFormData({ ...formData, roleType: type })}
                          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                            formData.roleType === type
                              ? 'bg-emerald-500 text-slate-950 font-bold'
                              : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name input */}
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 block mb-1.5">
                      Your Name / Company
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-600 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Email input */}
                  <div>
                    <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={loading}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-600 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label htmlFor="contact-msg" className="text-xs font-mono text-slate-400 block mb-1.5">
                      Project Details or Job Description
                    </label>
                    <textarea
                      id="contact-msg"
                      rows={4}
                      required
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the problem, dashboard needs, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none disabled:opacity-50"
                    ></textarea>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
