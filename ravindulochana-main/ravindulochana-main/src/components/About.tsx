import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const VALUES = [
  'Client-first approach in everything we do',
  'Transparent communication throughout every project',
  'Delivering measurable business results, not just websites',
  'Continuous support and long-term partnerships',
  'Local market expertise with global standards',
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="section-label mb-5 inline-flex">About Us</span>
            <h2 className="section-title mb-6">
              We Are{' '}
              <span className="gradient-text">Moonbox Digital</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-inter">
              We help businesses embrace the digital world through innovative websites, branding, marketing, and automation solutions.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-inter">
              Founded in Sri Lanka, Moonbox Digital is a full-service digital agency dedicated to helping local businesses compete and succeed in the digital landscape. We combine creative excellence with technical expertise to deliver solutions that actually grow your business.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-inter">
              Whether you're a new business looking to establish your online presence or an established company looking to grow, we have the skills and experience to help you achieve your goals.
            </p>

            {/* Values */}
            <div className="space-y-3">
              {VALUES.map((v) => (
                <div key={v} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm font-inter">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Mission card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl scale-95" />
              <div className="relative glass-card p-8 rounded-3xl border-glow">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/WhatsApp_Image_2026-06-01_at_18.24.11.jpeg"
                    alt="Moonbox Digital"
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  <div>
                    <p className="text-white font-bold text-lg font-poppins">Moonbox Digital</p>
                    <p className="text-slate-400 text-sm font-inter">moonboxdigital.com</p>
                  </div>
                </div>

                {/* Mission */}
                <blockquote className="text-slate-200 text-xl font-medium leading-relaxed font-poppins italic mb-6 border-l-2 border-cyan-500/50 pl-5">
                  "We help businesses embrace the digital world through innovative websites, branding, marketing, and automation solutions."
                </blockquote>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '50+', label: 'Projects Delivered' },
                    { value: '3+', label: 'Years of Experience' },
                    { value: '98%', label: 'Client Retention' },
                    { value: '10+', label: 'Industries Served' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.04] rounded-xl p-4 text-center border border-white/[0.06]"
                    >
                      <p className="text-2xl font-bold font-poppins gradient-text">{stat.value}</p>
                      <p className="text-slate-500 text-xs mt-1 font-inter">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
