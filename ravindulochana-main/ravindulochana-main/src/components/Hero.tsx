import { ArrowRight, CheckCircle2 } from 'lucide-react';

const TRUST_BADGES = [
  'Website Development',
  'Branding & Design',
  'Digital Marketing',
  'Business Automation',
];

function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Glow behind visual */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent blur-2xl scale-110" />

      <div className="relative">
        {/* Laptop */}
        <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
          <defs>
            <linearGradient id="h-screen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0a1535" />
              <stop offset="100%" stopColor="#060c1e" />
            </linearGradient>
            <linearGradient id="h-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="h-bar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.5" />
            </linearGradient>
            <filter id="h-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <clipPath id="h-screen-clip">
              <rect x="58" y="25" width="284" height="178" rx="4" />
            </clipPath>
          </defs>

          {/* Laptop body */}
          <rect x="40" y="18" width="320" height="192" rx="10" fill="#0d1530" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" />
          {/* Screen */}
          <rect x="58" y="25" width="284" height="178" rx="4" fill="url(#h-screen)" />

          {/* Website mockup inside screen */}
          <g clipPath="url(#h-screen-clip)">
            {/* Nav */}
            <rect x="58" y="25" width="284" height="22" fill="#0a1830" />
            <rect x="64" y="31" width="28" height="10" rx="2" fill="url(#h-accent)" fillOpacity="0.8" />
            <rect x="240" y="32" width="16" height="7" rx="2" fill="#1e2b50" />
            <rect x="260" y="32" width="16" height="7" rx="2" fill="#1e2b50" />
            <rect x="280" y="32" width="18" height="7" rx="3" fill="rgba(0,229,255,0.3)" />
            {/* Hero area */}
            <rect x="58" y="47" width="284" height="60" fill="#080f22" />
            <rect x="90" y="57" width="100" height="11" rx="3" fill="url(#h-accent)" fillOpacity="0.5" />
            <rect x="90" y="72" width="140" height="7" rx="2" fill="#1e2b50" />
            <rect x="90" y="83" width="120" height="7" rx="2" fill="#1e2b50" />
            <rect x="90" y="97" width="60" height="14" rx="4" fill="url(#h-accent)" fillOpacity="0.9" />
            {/* Feature image placeholder */}
            <rect x="230" y="50" width="96" height="54" rx="4" fill="#0d1f3a" stroke="rgba(0,229,255,0.2)" strokeWidth="0.5" />
            <rect x="248" y="64" width="60" height="6" rx="2" fill="#1e3050" />
            <rect x="254" y="74" width="48" height="4" rx="2" fill="#162240" />
            {/* Services row */}
            <rect x="68" y="117" width="80" height="42" rx="4" fill="#0a1830" stroke="rgba(0,229,255,0.15)" strokeWidth="0.5" />
            <rect x="78" y="125" width="16" height="16" rx="3" fill="rgba(0,229,255,0.2)" />
            <rect x="70" y="145" width="60" height="5" rx="2" fill="#1e2b50" />
            <rect x="74" y="153" width="50" height="3" rx="1.5" fill="#142030" />
            <rect x="160" y="117" width="80" height="42" rx="4" fill="#0a1830" stroke="rgba(124,58,237,0.15)" strokeWidth="0.5" />
            <rect x="170" y="125" width="16" height="16" rx="3" fill="rgba(124,58,237,0.2)" />
            <rect x="162" y="145" width="60" height="5" rx="2" fill="#1e2b50" />
            <rect x="166" y="153" width="50" height="3" rx="1.5" fill="#142030" />
            <rect x="252" y="117" width="80" height="42" rx="4" fill="#0a1830" stroke="rgba(0,229,255,0.15)" strokeWidth="0.5" />
            <rect x="262" y="125" width="16" height="16" rx="3" fill="rgba(0,229,255,0.2)" />
            <rect x="254" y="145" width="60" height="5" rx="2" fill="#1e2b50" />
            <rect x="258" y="153" width="50" height="3" rx="1.5" fill="#142030" />
            {/* Footer strip */}
            <rect x="58" y="165" width="284" height="38" fill="#060c18" />
            <rect x="74" y="177" width="24" height="8" rx="2" fill="rgba(0,229,255,0.4)" />
            <rect x="106" y="178" width="40" height="5" rx="1.5" fill="#1e2b50" />
            <rect x="154" y="178" width="40" height="5" rx="1.5" fill="#1e2b50" />
            <rect x="202" y="178" width="40" height="5" rx="1.5" fill="#1e2b50" />
          </g>

          {/* Laptop base */}
          <path d="M20 214 L30 208 L370 208 L380 214 L400 228 L0 228 Z" fill="#0d1530" stroke="rgba(0,229,255,0.2)" strokeWidth="1" />
          <rect x="148" y="208" width="104" height="4" rx="2" fill="rgba(0,229,255,0.15)" />
          <ellipse cx="200" cy="228" rx="150" ry="6" fill="rgba(0,0,0,0.4)" />

          {/* Phone (overlaid right side) */}
          <rect x="318" y="70" width="100" height="172" rx="14" fill="#0a1530" stroke="url(#h-accent)" strokeWidth="1.5" />
          <rect x="322" y="82" width="92" height="152" rx="8" fill="#060e1e" />
          {/* Phone notch */}
          <rect x="345" y="72" width="46" height="8" rx="4" fill="#050816" />
          {/* Phone content */}
          {/* Header */}
          <rect x="322" y="82" width="92" height="22" fill="#0a1528" rx="8" />
          <circle cx="334" cy="93" r="6" fill="url(#h-accent)" fillOpacity="0.6" />
          <rect x="345" y="89" width="40" height="5" rx="2" fill="#1e2b50" />
          <rect x="345" y="97" width="28" height="4" rx="1.5" fill="#1a2540" />
          {/* Growth chart */}
          <rect x="326" y="108" width="84" height="50" rx="4" fill="#0d1830" />
          <polyline
            points="330,152 345,145 355,138 368,128 380,118 393,112 406,108"
            fill="none" stroke="url(#h-bar)" strokeWidth="2" strokeLinecap="round"
            filter="url(#h-glow)"
          />
          <polygon
            points="330,158 345,151 355,144 368,134 380,124 393,118 406,114 406,158"
            fill="url(#h-accent)" fillOpacity="0.1"
          />
          {/* Stats row */}
          <rect x="326" y="163" width="38" height="24" rx="4" fill="#0d1830" />
          <text x="345" y="174" textAnchor="middle" fontSize="7" fontWeight="700" fill="#00E5FF">+40%</text>
          <text x="345" y="183" textAnchor="middle" fontSize="5.5" fill="#64748b">Traffic</text>
          <rect x="368" y="163" width="38" height="24" rx="4" fill="#0d1830" />
          <text x="387" y="174" textAnchor="middle" fontSize="7" fontWeight="700" fill="#a78bfa">2.5k</text>
          <text x="387" y="183" textAnchor="middle" fontSize="5.5" fill="#64748b">Followers</text>
          {/* Metric cards */}
          <rect x="326" y="192" width="84" height="16" rx="3" fill="#0d1830" />
          <rect x="330" y="196" width="24" height="4" rx="1.5" fill="rgba(0,229,255,0.3)" />
          <rect x="358" y="196" width="48" height="4" rx="1.5" fill="#1e2b50" />
          <rect x="326" y="212" width="84" height="16" rx="3" fill="#0d1830" />
          <rect x="330" y="216" width="20" height="4" rx="1.5" fill="rgba(124,58,237,0.4)" />
          <rect x="354" y="216" width="52" height="4" rx="1.5" fill="#1e2b50" />
          {/* Phone button */}
          <rect x="348" y="232" width="40" height="6" rx="3" fill="rgba(0,229,255,0.25)" />
        </svg>

        {/* Floating badge 1 */}
        <div
          className="absolute -top-4 -left-4 glass-card px-4 py-2.5 flex items-center gap-2.5 animate-float shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          style={{ animationDelay: '0s' }}
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <span className="text-cyan-400 text-sm font-bold">↑</span>
          </div>
          <div>
            <p className="text-white text-xs font-bold font-poppins">247% Growth</p>
            <p className="text-slate-500 text-[10px]">Avg. client traffic</p>
          </div>
        </div>

        {/* Floating badge 2 */}
        <div
          className="absolute -bottom-2 left-4 glass-card px-4 py-2.5 flex items-center gap-2.5 animate-float shadow-[0_0_20px_rgba(124,58,237,0.15)]"
          style={{ animationDelay: '2s' }}
        >
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <span className="text-purple-400 text-sm">★</span>
          </div>
          <div>
            <p className="text-white text-xs font-bold font-poppins">50+ Projects</p>
            <p className="text-slate-500 text-[10px]">Delivered on time</p>
          </div>
        </div>

        {/* Floating badge 3 */}
        <div
          className="absolute top-1/3 -right-6 glass-card px-3 py-2 animate-float-slow shadow-[0_0_20px_rgba(0,229,255,0.1)]"
          style={{ animationDelay: '1s' }}
        >
          <p className="text-cyan-400 text-xs font-bold font-poppins">#1 Ranked</p>
          <p className="text-slate-500 text-[10px]">Google SL</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center py-16 lg:py-20">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6 font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Sri Lanka's Digital Growth Partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white leading-[1.1] mb-6">
              Grow Your Business{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Online
              </span>{' '}
              With Moonbox Digital
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-inter">
              We help businesses attract more customers through professional websites, branding, digital marketing, and smart digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#contact" className="btn-primary text-base py-3.5 px-8">
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="btn-secondary text-base py-3.5 px-8">
                View Portfolio
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-slate-300 font-inter"
                >
                  <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="animate-fade-in">
            <HeroVisual />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 lg:pb-14">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3x', label: 'Avg. ROI for Clients' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-5 text-center border-glow">
              <p className="text-2xl font-bold font-poppins bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-400 text-xs mt-1 font-inter">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
