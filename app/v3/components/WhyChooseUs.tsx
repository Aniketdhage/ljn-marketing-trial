'use client'

import { motion } from 'framer-motion'
import { Play, ShoppingBag, Bell, Crown, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Play,
    number: '01',
    title: 'Live Show Magic',
    description:
      'Watch real-time reveals with designers explaining every piece. No more boring catalogs—pure excitement as collections come to life on screen.',
    cta: { label: 'Find Next Show', href: '#collections' },
  },
  {
    icon: ShoppingBag,
    number: '02',
    title: "Spot Buys You'll Love",
    description:
      'Special show-only pricing and limited quantities. Many pieces sell out in minutes—our members get first access to the most coveted designs.',
    cta: { label: "See Today's Deals", href: '#join' },
  },
  {
    icon: Bell,
    number: '03',
    title: 'Your Style, Delivered',
    description:
      "Save looks you love and get instant alerts when similar pieces drop live. Your personal style profile means you never miss a piece made for you.",
    cta: { label: 'Set My Alerts', href: '#join' },
  },
  {
    icon: Crown,
    number: '04',
    title: 'VIP Access',
    description:
      "Members get early show access, private sales, and exclusive designer Q&A sessions. Upgrade your jewelry experience with benefits built for true enthusiasts.",
    cta: null,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-36 bg-[#0A0804] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-label block mb-5">Why Join Us</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[54px] text-[#F5F0E8] font-bold leading-tight max-w-3xl mx-auto">
            Why Jewelry Lovers{' '}
            <span className="text-gold-gradient italic">Can&apos;t Get Enough</span>
          </h2>
        </div>

        {/* Benefits  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: (i % 2) * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="luxury-card rounded-2xl p-8 lg:p-10 group"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 border border-[#C9A96E]/22 flex items-center justify-center group-hover:border-[#C9A96E]/50 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C9A96E]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Number line */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#C9A96E]/35 text-xs font-mono tracking-[0.3em]">
                        {benefit.number}
                      </span>
                      <div className="h-px flex-1 bg-[#C9A96E]/10" />
                    </div>

                    <h3 className="font-playfair text-xl md:text-2xl text-[#F5F0E8] font-semibold mb-4 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-[#A89880] leading-relaxed text-[15px]">
                      {benefit.description}
                    </p>

                    {benefit.cta && (
                      <a
                        href={benefit.cta.href}
                        className="inline-flex items-center gap-2 mt-6 text-[#C9A96E] text-sm tracking-wide hover:text-[#E8D5B0] transition-colors group/link"
                      >
                        {benefit.cta.label}
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
