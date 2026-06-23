import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const TESTIMONIALS = [
  {
    name: 'Kamal Perera',
    role: 'Owner',
    company: 'Kamal\'s Bakery',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Moonbox Digital completely transformed our business. Our new website brought in 3x more customers within the first month. The WhatsApp automation saves us hours every week. Truly exceptional service!',
    stars: 5,
  },
  {
    name: 'Dilani Fernando',
    role: 'CEO',
    company: 'StyleHub Fashion',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The social media strategy they created for us doubled our Instagram following in 60 days. Our online sales have grown significantly. The team is professional, responsive, and genuinely cares about your success.',
    stars: 5,
  },
  {
    name: 'Ruwan Silva',
    role: 'Director',
    company: 'PrimeProperty SL',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Working with Moonbox Digital was a game changer for our real estate business. The new platform with automated lead capture has increased our inquiry rate by over 200%. Highly recommend!',
    stars: 5,
  },
  {
    name: 'Nisha Jayawardena',
    role: 'Founder',
    company: 'MedCare Wellness',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The online booking system they built has made our clinic so much more efficient. Patients love being able to book appointments instantly. The support team is always available and incredibly helpful.',
    stars: 5,
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Client Stories</span>
            <h2 className="section-title mb-4">
              Real Results for{' '}
              <span className="gradient-text">Real Businesses</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Don't just take our word for it — hear from the business owners we've helped grow online.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="glass-card p-6 flex flex-col border-glow group hover:bg-white/[0.05] hover:border-white/12 transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
              }}
            >
              {/* Quote icon */}
              <Quote size={20} className="text-cyan-500/30 mb-4 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 font-inter mb-5">
                "{t.text}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-cyan-500/20"
                />
                <div>
                  <p className="text-white text-sm font-semibold font-poppins">{t.name}</p>
                  <p className="text-slate-500 text-xs font-inter">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-12 mt-16">
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '100%', label: 'Satisfaction Rate' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold font-poppins gradient-text">{s.value}</p>
              <p className="text-slate-400 text-sm font-inter mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
