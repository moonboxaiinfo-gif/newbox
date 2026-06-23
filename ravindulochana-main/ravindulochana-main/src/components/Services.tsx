import { Globe, Palette, BarChart3, Cpu, ShoppingCart, Bot } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const SERVICES = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Professional websites designed to attract customers, build trust, and convert visitors into clients.',
    features: ['Responsive Design', 'Fast Loading', 'SEO Ready'],
    color: 'cyan',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Build a memorable brand identity that stands out in your market and resonates with your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    color: 'purple',
  },
  {
    icon: BarChart3,
    title: 'Social Media Marketing',
    description: 'Increase visibility, grow your audience, and drive real customer engagement across all major platforms.',
    features: ['Content Creation', 'Growth Strategy', 'Analytics'],
    color: 'cyan',
  },
  {
    icon: Cpu,
    title: 'Business Digitalization',
    description: 'Transform traditional business processes into efficient digital systems that save time and reduce costs.',
    features: ['Process Automation', 'Digital Workflows', 'CRM Setup'],
    color: 'purple',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Automate repetitive tasks, handle customer inquiries 24/7, and improve overall business efficiency.',
    features: ['WhatsApp Bots', 'Task Automation', 'Smart Responses'],
    color: 'cyan',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Sell your products and services online with a seamless shopping experience and secure payment gateway.',
    features: ['Online Store', 'Payment Gateway', 'Inventory Mgmt'],
    color: 'purple',
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Our Services</span>
            <h2 className="section-title mb-4">
              Everything Your Business{' '}
              <span className="gradient-text">Needs to Grow</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We offer a full suite of digital services designed to help businesses of all sizes establish a strong online presence and grow their customer base.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isCyan = service.color === 'cyan';
            return (
              <div
                key={service.title}
                className="glass-card p-7 border-glow-hover group"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s ease ${i * 60}ms, background 0.3s, border-color 0.3s, box-shadow 0.3s`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                    isCyan
                      ? 'bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20'
                      : 'bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20'
                  }`}
                >
                  <Icon size={22} className={isCyan ? 'text-cyan-400' : 'text-purple-400'} />
                </div>
                <h3 className="text-white font-bold text-lg font-poppins mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-inter">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        isCyan
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
