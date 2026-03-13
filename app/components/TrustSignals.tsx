'use client'

import { motion } from 'framer-motion'
import { Users, Tv, ShieldCheck, RotateCcw } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Bought my engagement ring during a live show – perfect and 20% less than retail!',
    author: 'Priya S.',
    location: 'Mumbai',
    initial: 'P',
  },
  {
    quote:
      "The sapphire earrings from last week's show are my new favorites. So easy!",
    author: 'Aisha K.',
    location: 'Dubai',
    initial: 'A',
  },
  {
    quote:
      'Finally found colored gemstone pieces I love, all during live shows.',
    author: 'Rachel L.',
    location: 'London',
    initial: 'R',
  },
]

const badges = [
  { icon: Users, label: '50K+ happy members' },
  { icon: Tv, label: 'Live shows 5 days/week' },
  { icon: ShieldCheck, label: 'Secure checkout' },
  { icon: RotateCcw, label: '30-day returns' },
]

export default function TrustSignals() {
  return (
    <section className="py-24 md:py-36 bg-[#0A0804] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-5">Real Customer Love</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#F5F0E8] font-bold">
            What Members{' '}
            <span className="text-gold-gradient italic">Are Saying</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="luxury-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              {/* Large decorative quote */}
              <div
                className="absolute top-2 right-5 font-playfair font-bold leading-none text-[#C9A96E]/05 select-none pointer-events-none"
                style={{ fontSize: '130px' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Gold accent bar */}
              <div className="h-px w-14 bg-gradient-to-r from-[#C9A96E] to-transparent mb-7" />

              <blockquote className="font-playfair text-lg md:text-xl text-[#F5F0E8] leading-relaxed mb-7 relative">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#C9A96E]/12 border border-[#C9A96E]/28 flex items-center justify-center text-xs font-bold text-[#C9A96E] flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-[#F5F0E8] text-sm font-semibold">— {t.author}</p>
                  <p className="text-[#A89880]/55 text-xs tracking-wide">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="divider-gold mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center gap-3.5 py-7 px-5 border border-[#C9A96E]/10 rounded-xl hover:border-[#C9A96E]/28 transition-colors duration-300 bg-[#1A1510]/40"
              >
                <div className="w-11 h-11 border border-[#C9A96E]/28 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-[#C9A96E]" style={{ width: 18, height: 18 }} />
                </div>
                <span className="text-[#A89880] text-sm leading-tight">{badge.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
