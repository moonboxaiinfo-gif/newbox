/** Custom SVG hero illustrations for each pricing tier */

export function StarterIllustration() {
  return (
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="si-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#070d18" />
          <stop offset="100%" stopColor="#0d1a26" />
        </linearGradient>
        <linearGradient id="si-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="si-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#060e1a" />
        </linearGradient>
        <filter id="si-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="si-radial" cx="52%" cy="48%" r="40%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="200" fill="url(#si-bg)" />
      <rect width="480" height="200" fill="url(#si-radial)" />

      {/* Subtle grid */}
      {[40,80,120,160].map(y => (
        <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="#06b6d4" strokeWidth="0.3" strokeOpacity="0.1" />
      ))}
      {[80,160,240,320,400].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#06b6d4" strokeWidth="0.3" strokeOpacity="0.1" />
      ))}

      {/* Laptop shell */}
      <rect x="130" y="45" width="220" height="130" rx="9" fill="#0d1829" stroke="#06b6d4" strokeWidth="1.4" strokeOpacity="0.55" />
      {/* Laptop base */}
      <rect x="116" y="175" width="248" height="11" rx="3.5" fill="#111f30" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.35" />
      <rect x="200" y="174" width="80" height="4" rx="2" fill="#06b6d4" fillOpacity="0.18" />
      {/* Screen bezel */}
      <rect x="139" y="53" width="202" height="114" rx="5" fill="url(#si-screen)" />

      {/* ── Website wireframe inside screen ── */}
      {/* Nav bar */}
      <rect x="139" y="53" width="202" height="17" rx="5" fill="#0d1f30" />
      <rect x="143" y="57.5" width="18" height="8" rx="2" fill="#06b6d4" fillOpacity="0.7" />
      <rect x="278" y="58.5" width="11" height="5" rx="1.5" fill="#1a3048" />
      <rect x="293" y="58.5" width="11" height="5" rx="1.5" fill="#1a3048" />
      <rect x="308" y="58.5" width="11" height="5" rx="1.5" fill="#1a3048" />
      {/* Hero block */}
      <rect x="151" y="78" width="178" height="36" rx="5" fill="#0e2236" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" />
      <rect x="172" y="85" width="80" height="7" rx="2" fill="#06b6d4" fillOpacity="0.45" />
      <rect x="182" y="96" width="60" height="5" rx="1.5" fill="#1a3a50" />
      {/* CTA button */}
      <rect x="195" y="108" width="50" height="12" rx="3.5" fill="#06b6d4" fillOpacity="0.75" />
      <rect x="204" y="111.5" width="32" height="5" rx="1.5" fill="#060e18" />
      {/* 3-card row */}
      {[151, 214, 277].map((x, i) => (
        <g key={i}>
          <rect x={x} y="127" width="55" height="32" rx="3.5" fill="#0b1e30" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx={x + 11} cy={136} r="6" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.5" />
          <rect x={x + 4} y={145} width="38" height="3.5" rx="1.5" fill="#1a3048" />
          <rect x={x + 4} y={151} width="26" height="3" rx="1.5" fill="#142535" />
        </g>
      ))}

      {/* WhatsApp badge */}
      <g filter="url(#si-glow)">
        <circle cx="66" cy="105" r="16" fill="#0b2218" stroke="#22c55e" strokeWidth="1.2" strokeOpacity="0.7" />
        <text x="66" y="108.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="#22c55e" fillOpacity="0.85">WA</text>
      </g>
      <line x1="82" y1="105" x2="130" y2="100" stroke="#22c55e" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="4,3" />

      {/* Floating particles */}
      {[[40,38,4],[410,45,3],[422,145,4],[55,155,3],[430,80,2.5]].map(([x,y,r],i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="#06b6d4" fillOpacity="0.35" filter="url(#si-glow)" />
      ))}
      {/* Sparkle top-right */}
      <g filter="url(#si-glow)">
        <line x1="420" y1="26" x2="420" y2="40" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.65" />
        <line x1="413" y1="33" x2="427" y2="33" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.65" />
        <line x1="415" y1="28" x2="425" y2="38" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="425" y1="28" x2="415" y2="38" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.35" />
      </g>
      {/* Sparkle bottom-left */}
      <g filter="url(#si-glow)">
        <line x1="45" y1="162" x2="45" y2="172" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
        <line x1="40" y1="167" x2="50" y2="167" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
      </g>

      {/* Rocket illustration (top-left) */}
      <g filter="url(#si-glow)" transform="translate(48 48) rotate(-35)">
        <ellipse cx="0" cy="0" rx="5" ry="12" fill="#06b6d4" fillOpacity="0.7" />
        <polygon points="-5,8 5,8 0,16" fill="#22d3ee" fillOpacity="0.5" />
        <circle cx="0" cy="-2" r="3" fill="#060e18" stroke="#22d3ee" strokeWidth="0.8" />
        <line x1="-2" y1="12" x2="-6" y2="18" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="2" y1="12" x2="6" y2="18" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.6" />
      </g>

      <text x="240" y="195" textAnchor="middle" fontSize="7.5" fill="#06b6d4" fillOpacity="0.45" letterSpacing="4">STARTER PACK</text>
    </svg>
  );
}

export function GrowthIllustration() {
  const bars = [
    { x: 74, h: 24 }, { x: 116, h: 40 }, { x: 158, h: 58 },
    { x: 200, h: 76 }, { x: 242, h: 96 }, { x: 284, h: 116 }, { x: 326, h: 132 },
  ];
  const linePoints = bars.map(b => `${b.x + 18},${164 - b.h}`).join(' ');
  const areaPoints = `${bars[0].x + 18},164 ${linePoints} ${bars[bars.length-1].x + 18},164`;

  return (
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gi-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060d18" />
          <stop offset="100%" stopColor="#0a1524" />
        </linearGradient>
        <linearGradient id="gi-bar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="gi-baralt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="gi-area" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
        <filter id="gi-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="gi-radial" cx="65%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="200" fill="url(#gi-bg)" />
      <rect width="480" height="200" fill="url(#gi-radial)" />

      {/* Horizontal grid rules */}
      {[28,64,100,136].map(y => (
        <line key={y} x1="58" y1={y} x2="400" y2={y} stroke="#06b6d4" strokeWidth="0.4" strokeOpacity="0.14" strokeDasharray="5,4" />
      ))}
      {/* Y axis labels */}
      {['100%','75%','50%','25%'].map((v,i) => (
        <text key={i} x="52" y={32 + i*36} textAnchor="end" fontSize="8" fill="#06b6d4" fillOpacity="0.45">{v}</text>
      ))}

      {/* Bars */}
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={164 - b.h} width={36} height={b.h} rx="3"
          fill={i % 2 === 0 ? 'url(#gi-bar)' : 'url(#gi-baralt)'} />
      ))}

      {/* Area fill under line */}
      <polygon points={areaPoints} fill="url(#gi-area)" />

      {/* Trend line */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        filter="url(#gi-glow)"
      />

      {/* Data point dots */}
      {bars.map((b, i) => (
        <g key={i}>
          <circle cx={b.x + 18} cy={164 - b.h} r="5" fill="#060e18" stroke="#22d3ee" strokeWidth="2" filter="url(#gi-glow)" />
          <circle cx={b.x + 18} cy={164 - b.h} r="2" fill="#22d3ee" />
        </g>
      ))}

      {/* Arrow extending trend */}
      <g filter="url(#gi-glow)">
        <line x1="344" y1="32" x2="376" y2="14" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="376,10 369,18 380,20" fill="#22d3ee" />
      </g>

      {/* +247% badge */}
      <rect x="368" y="26" width="70" height="24" rx="5" fill="#081e28" stroke="#06b6d4" strokeWidth="1.2" strokeOpacity="0.7" />
      <text x="403" y="42" textAnchor="middle" fontSize="12" fontWeight="800" fill="#22d3ee" filter="url(#gi-glow)">+247%</text>

      {/* Stat chips row */}
      {[
        { x: 58, label: '15x Posts' },
        { x: 150, label: '2x Videos' },
        { x: 242, label: 'SEO Boost' },
        { x: 334, label: '24/7 Bot' },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y="174" width="70" height="18" rx="4" fill="#0a1c2c" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.45" />
          <text x={c.x + 35} y="186" textAnchor="middle" fontSize="8" fontWeight="600" fill="#22d3ee">{c.label}</text>
        </g>
      ))}

      {/* Floating dots */}
      {[[430,55,3.5],[445,110,2.5],[430,160,3],[460,85,2]].map(([x,y,r],i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="#06b6d4" fillOpacity="0.4" filter="url(#gi-glow)" />
      ))}

      {/* Stars */}
      <g filter="url(#gi-glow)">
        <line x1="448" y1="32" x2="448" y2="44" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="442" y1="38" x2="454" y2="38" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.6" />
      </g>

      <text x="240" y="197" textAnchor="middle" fontSize="7.5" fill="#06b6d4" fillOpacity="0.45" letterSpacing="4">GROWTH PACK</text>
    </svg>
  );
}

export function DominateIllustration() {
  const nodes = [
    { cx: 76, cy: 52 }, { cx: 58, cy: 128 }, { cx: 110, cy: 174 },
    { cx: 404, cy: 58 }, { cx: 422, cy: 132 }, { cx: 368, cy: 176 },
    { cx: 148, cy: 32 }, { cx: 346, cy: 28 },
  ];

  return (
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="di-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060810" />
          <stop offset="100%" stopColor="#08101e" />
        </linearGradient>
        <linearGradient id="di-globe" x1="20%" y1="20%" x2="80%" y2="80%">
          <stop offset="0%" stopColor="#0d2840" />
          <stop offset="100%" stopColor="#06111e" />
        </linearGradient>
        <filter id="di-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="di-glow-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="di-radial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="di-gglw" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        <clipPath id="di-clip">
          <circle cx="240" cy="100" r="60" />
        </clipPath>
      </defs>

      <rect width="480" height="200" fill="url(#di-bg)" />
      <rect width="480" height="200" fill="url(#di-radial)" />

      {/* Outer orbit ring */}
      <ellipse cx="240" cy="100" rx="178" ry="62" fill="none"
        stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.2" strokeDasharray="7,5" />
      {/* Inner orbit ring */}
      <ellipse cx="240" cy="100" rx="122" ry="44" fill="none"
        stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.14" strokeDasharray="4,6" />

      {/* Connection lines from globe to nodes */}
      {nodes.map((n, i) => (
        <line key={i} x1={n.cx} y1={n.cy} x2="240" y2="100"
          stroke="#06b6d4" strokeWidth="0.8" strokeOpacity="0.18" strokeDasharray="3,3" />
      ))}

      {/* Globe body */}
      <circle cx="240" cy="100" r="60" fill="url(#di-globe)"
        stroke="#06b6d4" strokeWidth="1.6" strokeOpacity="0.65" filter="url(#di-glow)" />
      <circle cx="240" cy="100" r="60" fill="url(#di-gglw)" />

      {/* Globe lines (clipped) */}
      <g clipPath="url(#di-clip)" stroke="#06b6d4" strokeOpacity="0.3" fill="none">
        {/* Equator */}
        <ellipse cx="240" cy="100" rx="60" ry="19" strokeWidth="0.8" />
        {/* Tropics */}
        <ellipse cx="240" cy="100" rx="60" ry="40" strokeWidth="0.5" />
        {/* Prime meridian */}
        <line x1="240" y1="40" x2="240" y2="160" strokeWidth="0.8" />
        {/* Other meridian */}
        <ellipse cx="240" cy="100" rx="30" ry="60" strokeWidth="0.7" />
      </g>

      {/* Continent blobs */}
      <g clipPath="url(#di-clip)" fill="#06b6d4" fillOpacity="0.14" stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.5">
        <path d="M210 80 Q222 72 232 77 Q240 84 232 90 Q220 95 210 88 Z" />
        <path d="M246 84 Q258 78 266 86 Q270 95 260 99 Q250 102 244 94 Z" />
        <path d="M218 106 Q228 100 236 106 Q239 116 230 120 Q220 122 216 113 Z" />
        <path d="M247 108 Q256 105 262 112 Q263 120 255 123 Q247 123 244 115 Z" />
      </g>

      {/* Crown */}
      <g filter="url(#di-glow)">
        <path d="M220 34 L228 20 L236 32 L240 16 L244 32 L252 20 L260 34 Z"
          fill="none" stroke="#22d3ee" strokeWidth="2.2" strokeLinejoin="round" />
        <rect x="218" y="34" width="44" height="9" rx="2.5" fill="#06b6d4" fillOpacity="0.55" />
        <circle cx="240" cy="17" r="3.5" fill="#22d3ee" />
        <circle cx="228" cy="21" r="2.5" fill="#22d3ee" fillOpacity="0.7" />
        <circle cx="252" cy="21" r="2.5" fill="#22d3ee" fillOpacity="0.7" />
      </g>

      {/* Network nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="13" fill="#06b6d4" fillOpacity="0.05"
            stroke="#06b6d4" strokeWidth="0.6" strokeOpacity="0.25" />
          <circle cx={n.cx} cy={n.cy} r="7" fill="#0a1a28"
            stroke="#06b6d4" strokeWidth="1.3" strokeOpacity="0.65" filter="url(#di-glow-sm)" />
          <circle cx={n.cx} cy={n.cy} r="2.8" fill="#06b6d4" fillOpacity="0.85" />
        </g>
      ))}

      {/* Pulse rings on select nodes */}
      {[nodes[0], nodes[3], nodes[4]].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="11" fill="none"
          stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.25" />
      ))}

      {/* Corner sparkles */}
      {[[28,38],[452,28],[450,172],[26,166]].map(([x,y],i)=>(
        <g key={i} filter="url(#di-glow-sm)">
          <line x1={x} y1={y-5} x2={x} y2={y+5} stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.65" />
          <line x1={x-5} y1={y} x2={x+5} y2={y} stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.65" />
        </g>
      ))}

      {/* Floating accent dots */}
      {[[38,98,2.5],[442,96,2.5],[240,168,3]].map(([x,y,r],i)=>(
        <circle key={i} cx={x} cy={y} r={r} fill="#06b6d4" fillOpacity="0.5" filter="url(#di-glow-sm)" />
      ))}

      <text x="240" y="196" textAnchor="middle" fontSize="7.5" fill="#06b6d4" fillOpacity="0.45" letterSpacing="4">DOMINATE PACK</text>
    </svg>
  );
}
