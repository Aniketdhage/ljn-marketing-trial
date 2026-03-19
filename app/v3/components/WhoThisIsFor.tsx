'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Award, Flame, ArrowRight } from 'lucide-react'

const profiles = [
  {
    id: 'everyday',
    icon: Sparkles,
    title: 'Everyday Luxury Seeker',
    description:
      'Catch elegant pieces for daily wear during live reveals. Find your perfect everyday ring, necklace, or bracelet live.',
  },
  {
    id: 'bridal',
    icon: Heart,
    title: 'Bridal & Special Occasion Hunter',
    description:
      "Find engagement rings, heirlooms, and celebration jewelry live. Our bridal shows feature curated selections for your big moment.",
  },
  {
    id: 'collector',
    icon: Award,
    title: 'Designer Piece Collector',
    description:
      'Discover limited edition designs from top artisans worldwide. Be first to own signature pieces before they sell out.',
  },
  {
    id: 'gemstone',
    icon: Flame,
    title: 'Trend & Gemstone Fan',
    description:
      "Explore colored gems, new cuts, and what's hot right now. Our gem specialists reveal extraordinary finds each week.",
  },
]

export default function WhoThisIsFor() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="py-24 md:py-36 bg-[#0D0B07] relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-5">Who This Is For</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[54px] text-[#F5F0E8] font-bold leading-tight mb-6">
            Perfect for Every
            <br className="hidden sm:block" />
            <span className="text-gold-gradient italic"> Jewelry Lover</span>
          </h2>
          <p className="text-[#A89880] text-lg max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re building your collection or hunting statement pieces, our live shows bring luxury to you.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((profile, i) => {
            const Icon = profile.icon
            const isSelected = selected === profile.id

            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(isSelected ? null : profile.id)}
                className={`luxury-card rounded-xl p-7 cursor-pointer relative overflow-hidden group ${
                  isSelected ? 'border-[#C9A96E]/55 !translate-y-[-4px]' : ''
                }`}
              >
                {isSelected && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse at top left, rgba(201,169,110,0.07) 0%, transparent 70%)',
                    }}
                  />
                )}

                {/* Icon box */}
                <div
                  className={`w-12 h-12 flex items-center justify-center border mb-5 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#C9A96E] bg-[#C9A96E]/12'
                      : 'border-[#C9A96E]/22 group-hover:border-[#C9A96E]/50'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isSelected ? 'text-[#C9A96E]' : 'text-[#C9A96E]/55 group-hover:text-[#C9A96E]'
                    }`}
                  />
                </div>

                <h3
                  className={`font-playfair text-lg font-semibold mb-3 transition-colors duration-300 ${
                    isSelected ? 'text-[#E8D5B0]' : 'text-[#F5F0E8]'
                  }`}
                >
                  {profile.title}
                </h3>
                <p className="text-[#A89880]/80 text-sm leading-relaxed mb-6">
                  {profile.description}
                </p>

                <button
                  className={`w-full py-2.5 text-xs tracking-[0.1em] uppercase font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                    isSelected ? 'btn-gold' : 'btn-gold-outline'
                  }`}
                >
                  Join My Style
                  <ArrowRight className="w-3 h-3" />
                </button>

                {/* Selected tick */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-4 right-4 w-6 h-6 bg-[#C9A96E] flex items-center justify-center rounded-full"
                  >
                    <svg viewBox="0 0 12 9" fill="none" className="w-3 h-2.5">
                      <path
                        d="M1 4L4.5 7.5L11 1"
                        stroke="#0A0804"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Micro-CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-center text-[#C9A96E]/55 text-sm mt-10 tracking-wide"
        >
          Pick your passion to see perfect shows →
        </motion.p>
      </div>

      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  )
}
