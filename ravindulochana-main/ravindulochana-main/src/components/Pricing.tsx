import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, MessageCircle, Eye, Globe, Bot, Palette, Shield, Video, BarChart3 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FeatureGroup {
  icon: React.ElementType;
  title: string;
  items: string[];
}

interface Tier {
  id: string;
  name: string;
  badge?: string;
  monthly: string;
  setup: string;
  groups: FeatureGroup[];
  highlight?: boolean;
  accentColor: 'cyan' | 'purple';
  gradientFrom: string;
  gradientTo: string;
}

const TIERS: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 'LKR 7,990',
    setup: 'LKR 14,990',
    accentColor: 'cyan',
    gradientFrom: 'from-cyan-500/20',
    gradientTo: 'to-navy-800',
    groups: [
      {
        icon: Globe,
        title: 'Professional Website',
        items: [
          'Single-Page scrolling design',
          'Fully Responsive & Mobile-optimized',
          'Fast load performance',
          'WhatsApp contact button',
        ],
      },
      {
        icon: Bot,
        title: 'Basic WhatsApp Bot',
        items: [
          '24/7 Active — always available',
          '5x FAQ auto-responses',
          'Professional welcome message',
        ],
      },
      {
        icon: Palette,
        title: 'Social Media Content',
        items: [
          '8x Creative posts/month',
          'Engaging captions included',
        ],
      },
      {
        icon: Shield,
        title: 'Monthly Support',
        items: [
          'Monthly system backup',
          'Basic analytics report',
        ],
      },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    monthly: 'LKR 15,990',
    setup: 'LKR 29,990',
    highlight: true,
    accentColor: 'cyan',
    gradientFrom: 'from-cyan-500/30',
    gradientTo: 'to-purple-500/20',
    groups: [
      {
        icon: Globe,
        title: 'Complete Business Website',
        items: [
          '3-5 Pages (Home, About, Services, Contact)',
          'Fully Responsive + Fast loading',
          'Appointment/Order booking system',
        ],
      },
      {
        icon: Bot,
        title: 'WhatsApp Sales Bot Pro',
        items: [
          'Digital product catalog',
          'Automated ordering & invoice',
          '24/7 Priority customer support',
        ],
      },
      {
        icon: Video,
        title: 'Social Media King Plan',
        items: [
          '15x Premium posts/month',
          '2x Short-form promo videos',
          'Strategic captions & SEO hashtags',
        ],
      },
      {
        icon: BarChart3,
        title: 'SEO & Priority Support',
        items: [
          'Basic SEO optimization',
          '24/7 Priority technical support',
        ],
      },
    ],
  },
  {
    id: 'dominate',
    name: 'Dominate',
    monthly: 'LKR 27,990',
    setup: 'LKR 49,990',
    accentColor: 'purple',
    gradientFrom: 'from-purple-500/20',
    gradientTo: 'to-navy-800',
    groups: [
      {
        icon: Globe,
        title: 'Elite Multi-Page Platform',
        items: [
          '5-10+ Pages full ecosystem',
          'E-Commerce + payment gateway',
          'Custom admin dashboard',
          'Multi-language support',
        ],
      },
      {
        icon: Bot,
        title: 'AI WhatsApp Command Center',
        items: [
          'Full AI-powered bot',
          'Complete order pipeline',
          'CRM integration',
          'Multi-agent department routing',
        ],
      },
      {
        icon: Video,
        title: 'Social Media Domination',
        items: [
          '30x Premium posts/month',
          '4x Short-form videos',
          '1x Brand documentary video',
          'Influencer outreach strategy',
        ],
      },
      {
        icon: BarChart3,
        title: 'SEO Pro & Dedicated Manager',
        items: [
          'Full SEO optimization',
          'Google Business Profile setup',
          '24/7 Dedicated account manager',
          'Quarterly strategy reviews',
        ],
      },
    ],
  },
];

function TierCard({ tier }: { tier: Tier }) {
  const waMessage = encodeURIComponent(`Hi Moonbox Digital! I want to get started with the ${tier.name} package.`);
  const waLink = `https://wa.me/94752520376?text=${waMessage}`;
  const isCyan = tier.accentColor === 'cyan';

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        tier.highlight
          ? 'border-2 border-cyan-500/50 bg-gradient-to-b from-cyan-500/[0.08] to-navy-800/80 shadow-[0_0_40px_rgba(0,229,255,0.12)]'
          : 'border border-white/[0.08] bg-navy-800/50'
      }`}
    >
      {/* Popular badge */}
      {tier.badge && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500 text-navy-950 text-xs font-bold font-poppins shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <Star size={11} />
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier header */}
      <div className={`p-6 pb-5 bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo}`}>
        <h3
          className={`text-xl font-bold font-poppins mb-1 ${
            tier.highlight ? 'text-cyan-300' : 'text-white'
          }`}
        >
          {tier.name}
        </h3>
        <div className="flex items-baseline gap-1.5 mt-3">
          <span className="text-3xl font-bold font-poppins text-white">{tier.monthly}</span>
          <span className="text-slate-400 text-sm">/month</span>
        </div>
        <p className="text-slate-500 text-xs mt-1">+ {tier.setup} setup fee (one-time)</p>
      </div>

      {/* Features */}
      <div className="flex-1 p-6 space-y-5">
        {tier.groups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title}>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                    isCyan ? 'bg-cyan-500/15' : 'bg-purple-500/15'
                  }`}
                >
                  <Icon size={13} className={isCyan ? 'text-cyan-400' : 'text-purple-400'} />
                </div>
                <h4
                  className={`text-xs font-semibold font-poppins ${
                    isCyan ? 'text-cyan-400' : 'text-purple-400'
                  }`}
                >
                  {group.title}
                </h4>
              </div>
              <ul className="space-y-1.5 pl-8">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-400 font-inter">
                    <Check size={11} className="text-cyan-500/50 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="p-6 pt-0 flex flex-col gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm font-poppins transition-all duration-300 ${
            tier.highlight
              ? 'bg-cyan-500 text-navy-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.25)]'
              : 'bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1] hover:border-white/20'
          }`}
        >
          <MessageCircle size={15} />
          {tier.highlight ? 'Get Started' : 'Book Consultation'}
        </a>
        <Link
          to={`/samples/${tier.id}`}
          className="flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-xs text-slate-400 hover:text-cyan-400 transition-colors border border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/5"
        >
          <Eye size={13} />
          View Sample Work
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  const { ref, inView } = useInView();

  return (
    <section id="pricing" className="section-pad relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/40 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div ref={ref} className="text-center mb-16">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="section-label mb-4 inline-flex">Pricing Packages</span>
            <h2 className="section-title mb-4">
              Choose the Right Plan for{' '}
              <span className="gradient-text">Your Business</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              All prices in Sri Lankan Rupees (LKR). Setup fee is one-time. Monthly fee billed every 30 days.
            </p>
          </div>
        </div>

        <div
          className="grid lg:grid-cols-3 gap-8 items-start"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          {TIERS.map((tier, i) => (
            <div key={tier.id} className={tier.highlight ? 'lg:scale-105 lg:-mt-2' : ''} style={{ transitionDelay: `${i * 100}ms` }}>
              <TierCard tier={tier} />
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10 font-inter">
          Not sure which plan is right for you?{' '}
          <a href="#contact" className="text-cyan-400 hover:underline">Get a free consultation</a>{' '}
          and we'll help you choose.
        </p>
      </div>
    </section>
  );
}
