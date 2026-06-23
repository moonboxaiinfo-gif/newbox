import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Youtube, Shield } from 'lucide-react';

const LINKS = {
  services: [
    'Website Development',
    'Branding & Design',
    'Social Media Marketing',
    'Business Digitalization',
    'AI & Automation',
    'E-Commerce Solutions',
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-navy-950">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img
                src="/WhatsApp_Image_2026-06-01_at_18.24.11.jpeg"
                alt="Moonbox Digital"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-white font-bold text-lg font-poppins">
                Moonbox <span className="text-cyan-400">Digital</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed font-inter mb-5">
              Your digital growth partner. Professional websites, branding, digital marketing, and smart automation — all under one roof.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5">
              {LINKS.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-inter">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              {LINKS.company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-inter">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-4 text-sm">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/94752520376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors group"
                >
                  <MessageCircle size={15} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm font-inter">+94 75 252 0376</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:moonboxai.info@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Mail size={15} className="text-cyan-500 flex-shrink-0" />
                  <span className="text-sm font-inter break-all">moonboxai.info@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin size={15} className="text-purple-400 flex-shrink-0" />
                <span className="text-sm font-inter">Sri Lanka</span>
              </li>
            </ul>

            <a
              href="https://wa.me/94752520376?text=Hi%20Moonbox%20Digital!%20I%27d%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 btn-primary w-full justify-center text-sm py-2.5 inline-flex"
            >
              <MessageCircle size={15} />
              Free Consultation
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-inter">
            &copy; {new Date().getFullYear()} Moonbox Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/samples"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 border border-white/[0.06] bg-white/[0.03] text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]"
            >
              <Shield size={14} />
              Admin Portal
            </a>
            <p className="text-slate-600 text-xs font-inter">
              moonboxdigital.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
