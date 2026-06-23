import { MessageSquare, FileText, Code2, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We start with a free consultation to understand your business, goals, and challenges. No jargon — just a clear conversation about how we can help.',
    color: 'cyan',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Planning',
    description: 'We create a detailed project plan, timeline, and strategy tailored specifically to your business goals and budget.',
    color: 'purple',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    description: 'Our team gets to work building your solution with regular updates and feedback loops to ensure everything meets your expectations.',
    color: 'cyan',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We launch your project and provide ongoing support, training, and optimization to ensure continued growth and success.',
    color: 'purple',
  },
];

export default function HowWeWork() {
  const { ref, inView } = useInView();

  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Our Process</span>
            <h2 className="section-title mb-4">
              How We{' '}
              <span className="gradient-text">Make It Happen</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A clear, proven four-step process that takes your business from idea to a powerful digital presence.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isCyan = step.color === 'cyan';
              return (
                <div
                  key={step.number}
                  className="relative text-center"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(28px)',
                    transition: `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
                  }}
                >
                  {/* Step number badge */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center relative z-10 ${
                        isCyan
                          ? 'bg-cyan-500/15 border-2 border-cyan-500/50'
                          : 'bg-purple-500/15 border-2 border-purple-500/50'
                      }`}
                    >
                      <Icon size={22} className={isCyan ? 'text-cyan-400' : 'text-purple-400'} />
                    </div>
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-full blur-lg ${
                        isCyan ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                      }`}
                    />
                  </div>

                  {/* Step number */}
                  <div className="mb-3">
                    <span className={`text-xs font-bold tracking-widest font-poppins ${isCyan ? 'text-cyan-500/60' : 'text-purple-500/60'}`}>
                      STEP {step.number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold font-poppins text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-inter">{step.description}</p>

                  {/* Connector arrow (mobile) */}
                  {i < STEPS.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <div className="w-px h-8 bg-gradient-to-b from-white/10 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary text-base px-8 py-3.5">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
