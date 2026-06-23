import { ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    title: 'LuxeInteriors — Home Decor Brand',
    industry: 'E-Commerce',
    description: 'Full e-commerce platform with product catalog, payment gateway, and custom branding identity.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Dev', 'Branding', 'E-Commerce'],
    accent: 'cyan',
  },
  {
    title: 'MedCare Clinic — Healthcare Provider',
    industry: 'Healthcare',
    description: 'Professional clinic website with online appointment booking and WhatsApp automation.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Dev', 'Automation', 'SEO'],
    accent: 'purple',
  },
  {
    title: 'GreenBite Restaurant',
    industry: 'Food & Beverage',
    description: 'Modern restaurant website with online menu, table reservations, and social media content strategy.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Dev', 'Social Media', 'Branding'],
    accent: 'cyan',
  },
  {
    title: 'PrimeProperty — Real Estate',
    industry: 'Real Estate',
    description: 'Property listing platform with advanced search, virtual tours, and lead generation automation.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Dev', 'Digital Marketing', 'CRM'],
    accent: 'purple',
  },
  {
    title: 'StyleHub — Fashion Retail',
    industry: 'Fashion',
    description: 'Fashion brand digital transformation including e-commerce store and Instagram growth strategy.',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-Commerce', 'Social Media', 'Branding'],
    accent: 'cyan',
  },
  {
    title: 'TechFlow Solutions — B2B SaaS',
    industry: 'Technology',
    description: 'Corporate website redesign with lead capture, case studies, and automated email sequences.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Dev', 'Automation', 'Marketing'],
    accent: 'purple',
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView();

  return (
    <section id="portfolio" className="section-pad relative">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Our Work</span>
            <h2 className="section-title mb-4">
              Projects That{' '}
              <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We've helped businesses across Sri Lanka and beyond transform their digital presence and grow their revenue.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="group relative glass-card overflow-hidden border-glow-hover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
              }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-navy-950/60">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-navy-950 font-semibold text-sm hover:bg-cyan-400 transition-colors"
                  >
                    <ExternalLink size={15} />
                    View Project
                  </a>
                </div>

                {/* Industry badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      project.accent === 'cyan'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}
                  >
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-white font-bold font-poppins text-base mb-1.5">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-inter">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 border border-white/10 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Start Your Project Today
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
