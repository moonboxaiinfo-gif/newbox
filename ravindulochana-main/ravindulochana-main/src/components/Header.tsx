import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LanguageContext';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Packages', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navHref = (href: string) => isHome ? href : `/${href}`;

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? isDark
            ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-white/92 backdrop-blur-xl border-b border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.07)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0" onClick={() => setOpen(false)}>
            <div className="relative">
              <img
                src="/WhatsApp_Image_2026-06-01_at_18.24.11.jpeg"
                alt="Moonbox Digital"
                className="w-10 h-10 rounded-xl object-cover transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.5)]"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-cyan-500/20 group-hover:ring-cyan-500/50 transition-all duration-300" />
            </div>
            <span className="text-lg font-bold font-poppins tracking-tight" style={{ color: 'var(--clr-text)' }}>
              Moonbox <span className="text-cyan-500">Digital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={navHref(item.href)}
                className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-500"
                style={{ color: 'var(--clr-text-muted)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              title="Toggle language"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 font-inter border"
              style={{
                background: 'var(--clr-bg-card)',
                borderColor: 'var(--clr-border)',
                color: 'var(--clr-text-muted)',
              }}
            >
              <span className={lang === 'en' ? 'text-cyan-500' : ''}>EN</span>
              <span className="opacity-40">/</span>
              <span className={lang === 'si' ? 'text-cyan-500' : ''}>සිං</span>
            </button>

            {/* Dark/Light toggle */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 border"
              style={{
                background: 'var(--clr-bg-card)',
                borderColor: 'var(--clr-border)',
              }}
            >
              <span
                className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  isDark ? 'opacity-0' : 'opacity-100 bg-amber-50'
                }`}
              />
              {isDark ? (
                <Moon size={16} className="text-cyan-400 relative z-10" />
              ) : (
                <Sun size={16} className="text-amber-500 relative z-10" />
              )}
            </button>

            {/* CTA (desktop) */}
            <a
              href={navHref('#contact')}
              className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Get Free Consultation
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: 'var(--clr-text-muted)' }}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            className="lg:hidden pb-5 pt-2 space-y-1 border-t"
            style={{ borderColor: 'var(--clr-border)' }}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={navHref(item.href)}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm rounded-lg transition-colors hover:bg-cyan-500/10 hover:text-cyan-500"
                style={{ color: 'var(--clr-text-muted)' }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <button
                onClick={toggleLang}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-colors"
                style={{
                  background: 'var(--clr-bg-card)',
                  borderColor: 'var(--clr-border)',
                  color: 'var(--clr-text-muted)',
                }}
              >
                {lang === 'en' ? 'Switch to සිං' : 'Switch to EN'}
              </button>
              <a
                href={navHref('#contact')}
                onClick={() => setOpen(false)}
                className="flex-1 btn-primary justify-center text-sm py-2.5"
              >
                Consultation
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
