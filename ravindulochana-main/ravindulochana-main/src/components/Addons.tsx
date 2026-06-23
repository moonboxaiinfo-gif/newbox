import { Link } from 'react-router-dom';
import { B, useLang } from '../context/LanguageContext';
import { MessageCircle, Share2, Briefcase, Eye } from 'lucide-react';

const addons = [
  {
    icon: MessageCircle,
    en: {
      name: 'WhatsApp Bot',
      desc: 'Standalone chat automation — greeting, FAQs, and order routing.',
    },
    si: {
      name: 'WhatsApp බොට්',
      desc: 'ස්වාධීන චැට් ස්වයංක්‍රීයකරණය — ආචාරය, FAQ සහ ඇණවුත් රවුටිං.',
    },
    price: 'LKR 11,990 setup + LKR 2,490/mo',
    waKey: 'WhatsApp Bot',
  },
  {
    icon: Share2,
    en: {
      name: 'Social Media Content',
      desc: 'Professional graphic posts, captions, and hashtag strategy.',
    },
    si: {
      name: 'සමාජ මාධ්‍ය අන්තර්ගතය',
      desc: 'වෘත්තීය ග්‍රැෆික් පෝස්ට්, කැප්ෂන් සහ හැෂ්ටැග් උපාය.',
    },
    price: 'LKR 6,990/mo',
    waKey: 'Social Media Content',
  },
  {
    icon: Briefcase,
    en: {
      name: 'Business Identity Pack',
      desc: 'Logo design, business card, letterhead, and brand guidelines.',
    },
    si: {
      name: 'ව්‍යාපාර අනන්‍යතා පැක්',
      desc: 'ලෝගෝ නිර්මාණය, ව්‍යාපාර කාඩ්පත, ලිපිලේඛන ශීර්ෂය සහ වෙළඳ නාම මාර්ගෝපදේශ.',
    },
    price: 'LKR 8,990 (one-time)',
    waKey: 'Business Identity Pack',
  },
];

export default function Addons() {
  const { lang } = useLang();

  return (
    <section id="addons" className="relative py-24 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-400 font-semibold text-sm tracking-widest uppercase mb-3">
            <B en="Standalone Add-ons" si="ස්වාධීන අමතර" />
          </p>
          <h2 className="section-title">
            <B en="Boost Your Setup" si="ඔබේ පිහිටුවීම අවධානය කරන්න" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((addon, i) => {
            const Icon = addon.icon;
            const content = lang === 'en' ? addon.en : addon.si;
            const waMessage = encodeURIComponent(
              lang === 'en'
                ? `I am interested in the ${addon.waKey} add-on!`
                : `මම ${addon.waKey} අමතරයට උනන්දු වෙමි!`
            );

            return (
              <div
                key={i}
                className="card-hover bg-cyber-800/50 border border-slate-700/50 rounded-2xl p-6 glow-border text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-neon-500/10 border border-neon-500/30 flex items-center justify-center mb-5">
                  <Icon className="text-neon-400" size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{content.name}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{content.desc}</p>
                <p className="text-neon-400 font-bold text-lg mb-5">{addon.price}</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/94752520376?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 text-sm py-2.5"
                  >
                    <MessageCircle size={15} />
                    <B en="Get This Add-on" si="මෙම අමතරය ලබා ගන්න" />
                  </a>
                  <Link
                    to="/samples/starter"
                    className="btn-secondary flex items-center justify-center gap-2 text-sm py-2.5"
                  >
                    <Eye size={15} />
                    <B en="View Sample" si="නියැදිය බලන්න" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
