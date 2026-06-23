import { Zap, Smartphone, Target, Headphones } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const FEATURES = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We deliver projects on time, every time. Our streamlined process means you go live faster without sacrificing quality.',
    stat: '14 Days',
    statLabel: 'Avg. delivery time',
    color: 'cyan',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Every solution we build is fully responsive and optimized for mobile devices — where your customers actually are.',
    stat: '100%',
    statLabel: 'Mobile-first design',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Business Growth Focused',
    description: 'We don\'t just build websites — we build growth engines. Every design decision is made with your business goals in mind.',
    stat: '3x',
    statLabel: 'Average ROI increase',
    color: 'cyan',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Our relationship doesn\'t end at launch. We provide continuous support, updates, and guidance to keep your business growing.',
    stat: '24/7',
    statLabel: 'Support available',
    color: 'purple',
  },
];

export default function WhyChoose() {
  const { ref, inView } = useInView();

  return (
    <section className="section-pad relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Why Choose Us</span>
            <h2 className="section-title mb-4">
              Built for{' '}
              <span className="gradient-text">Business Growth</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We combine design excellence, technical expertise, and a deep understanding of the Sri Lankan market to deliver solutions that work.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const isCyan = feature.color === 'cyan';
            return (
              <div
                key={feature.title}
                className="glass-card p-7 text-center group hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 border-glow"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
                }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 ${
                    isCyan ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-purple-500/10 border border-purple-500/20'
                  }`}
                >
                  <Icon size={26} className={isCyan ? 'text-cyan-400' : 'text-purple-400'} />
                </div>

                <div className="mb-4">
                  <p className={`text-3xl font-bold font-poppins mb-0.5 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`}>
                    {feature.stat}
                  </p>
                  <p className="text-slate-500 text-xs font-inter">{feature.statLabel}</p>
                </div>

                <h3 className="text-white font-bold font-poppins text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-inter">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
