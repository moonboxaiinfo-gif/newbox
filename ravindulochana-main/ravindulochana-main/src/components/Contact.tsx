import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { supabase } from '../lib/supabase';

const SERVICES = [
  'Website Development',
  'Branding & Design',
  'Social Media Marketing',
  'Business Digitalization',
  'AI & Automation',
  'E-Commerce Solutions',
  'Other / Not Sure',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert([{
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        service: form.service || null,
        message: form.message,
      }]);
      if (dbError) throw dbError;
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Get In Touch</span>
            <h2 className="section-title mb-4">
              Ready to{' '}
              <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Get a free consultation today. Tell us about your business and we'll show you how we can help you grow online.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/94752520376?text=Hi%20Moonbox%20Digital!%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-card p-5 hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 group border-glow"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle size={22} className="text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold font-poppins">Chat on WhatsApp</p>
                <p className="text-slate-400 text-sm font-inter">Quick response guaranteed</p>
              </div>
            </a>

            {/* Info cards */}
            {[
              { icon: Mail, label: 'Email Us', value: 'moonboxai.info@gmail.com', href: 'mailto:moonboxai.info@gmail.com', color: 'cyan' },
              { icon: Phone, label: 'Call / WhatsApp', value: '+94 75 252 0376', href: 'https://wa.me/94752520376', color: 'purple' },
              { icon: MapPin, label: 'Location', value: 'Sri Lanka', href: '#', color: 'cyan' },
            ].map((item) => {
              const Icon = item.icon;
              const isCyan = item.color === 'cyan';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 glass-card p-5 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                      isCyan ? 'bg-cyan-500/15 border border-cyan-500/20' : 'bg-purple-500/15 border border-purple-500/20'
                    }`}
                  >
                    <Icon size={18} className={isCyan ? 'text-cyan-400' : 'text-purple-400'} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-inter mb-0.5">{item.label}</p>
                    <p className="text-white text-sm font-medium font-inter">{item.value}</p>
                  </div>
                </a>
              );
            })}

            <div className="glass-card p-5 text-center border border-cyan-500/15">
              <p className="text-slate-400 text-sm font-inter">
                Response time: <span className="text-cyan-400 font-semibold">Under 2 hours</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="glass-card p-8 border-glow">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl font-poppins">Message Sent!</h3>
                  <p className="text-slate-400 font-inter">
                    Thank you for reaching out. We'll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-secondary text-sm mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 font-inter">
                        Your Name <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Kamal Perera"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 font-inter">
                        Email Address <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 font-inter">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+94 7X XXX XXXX"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5 font-inter">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-field bg-navy-800"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 font-inter">
                      Tell Us About Your Business <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your business, your goals, and how we can help you..."
                      className="input-field resize-none"
                      required
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm font-inter bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full text-base py-4 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-navy-950/40 border-t-navy-950 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message & Get Free Consultation
                      </>
                    )}
                  </button>

                  <p className="text-slate-500 text-xs text-center font-inter">
                    Or message us directly on{' '}
                    <a
                      href="https://wa.me/94752520376"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      WhatsApp
                    </a>
                    {' '}for a faster response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
