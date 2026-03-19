'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const tabs = [
  { id: 'live', label: '🔴 Live Now' },
  { id: 'upcoming', label: '🟡 Upcoming Today' },
  { id: 'replays', label: '🟢 Watch Replays' },
  { id: 'bridal', label: 'Bridal Shows' },
  { id: 'members', label: '⭐ Members Only' },
]

const collections = [
  {
    brand: 'Ruby Fire Collection',
    tagline: '🔴 Live Now · 12 pieces left',
    description:
      'Bold ruby statement necklaces for evening glamour. Join now to secure yours before they sell out.',
    btnLabel: 'Join Live',
    gradientFrom: '#2A1212',
    gradientTo: '#1A1010',
    accentColor: '#E85555',
    shape: 'diamond',
  },
  {
    brand: 'Bridal Bliss',
    tagline: '🟡 Starts in 45 min',
    description:
      'Timeless engagement rings with perfect diamond settings. Reserve your spot before it fills up.',
    btnLabel: 'Reserve Spot',
    gradientFrom: '#1A1510',
    gradientTo: '#151218',
    accentColor: '#C9A96E',
    shape: 'oval',
  },
  {
    brand: 'Sapphire Dreams',
    tagline: '🟢 Watch Replay',
    description:
      'Everyday blue sapphire pieces that shine all day. Catch the full show and shop archive pricing.',
    btnLabel: 'Watch Replay',
    gradientFrom: '#0F1520',
    gradientTo: '#1A1510',
    accentColor: '#6B9AD2',
    shape: 'hexagon',
  },
]

function GemShape({ shape, color }: { shape: string; color: string }) {
  if (shape === 'oval') {
    return (
      <svg viewBox="0 0 100 120" fill="none" className="w-20 h-24">
        <ellipse cx="50" cy="60" rx="38" ry="52" stroke={color} strokeWidth="1.2" opacity="0.6" />
        <ellipse cx="50" cy="60" rx="24" ry="36" stroke={color} strokeWidth="0.8" opacity="0.4" />
        <ellipse cx="50" cy="60" rx="10" ry="16" fill={color} fillOpacity="0.07" stroke={color} strokeWidth="0.5" opacity="0.5" />
        <circle cx="50" cy="60" r="1.5" fill={color} opacity="0.7" />
      </svg>
    )
  }
  if (shape === 'hexagon') {
    return (
      <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
        <polygon points="50,4 93,27 93,73 50,96 7,73 7,27" stroke={color} strokeWidth="1.2" opacity="0.6" />
        <polygon points="50,18 79,34 79,66 50,82 21,66 21,34" stroke={color} strokeWidth="0.8" opacity="0.4" />
        <polygon points="50,32 65,41 65,59 50,68 35,59 35,41" fill={color} fillOpacity="0.07" stroke={color} strokeWidth="0.5" opacity="0.5" />
        <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.7" />
      </svg>
    )
  }
  // diamond (default)
  return (
    <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
      <polygon points="50,4 96,50 50,96 4,50" stroke={color} strokeWidth="1.2" opacity="0.6" />
      <polygon points="50,18 80,50 50,82 20,50" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <polygon points="50,34 66,50 50,66 34,50" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" opacity="0.6" />
      <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.7" />
    </svg>
  )
}

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState('high-jewelry')

  return (
    <section id="collections" className="py-24 md:py-36 bg-[#0E0C08] relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label block mb-5">Live Shows &amp; Collections</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[54px] text-[#F5F0E8] font-bold leading-tight mb-5">
            Catch Live Shows{' '}
            <span className="text-gold-gradient italic">Happening Now</span>
          </h2>
          <p className="text-[#A89880] text-lg max-w-lg mx-auto">
            5+ live shows weekly. Tap to join current broadcasts or catch a replay.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 text-sm tracking-wide transition-all duration-300 rounded-full border ${
                activeTab === tab.id
                  ? 'border-[#C9A96E] text-[#0A0804] bg-[#C9A96E] font-semibold'
                  : 'border-[#C9A96E]/20 text-[#A89880] hover:border-[#C9A96E]/40 hover:text-[#C9A96E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
          >
            {collections.map((col, i) => (
              <motion.div
                key={col.brand + activeTab}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="luxury-card rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Image area */}
                <div
                  className="h-52 relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${col.gradientFrom}, ${col.gradientTo})`,
                  }}
                >
                  <div className="opacity-30 group-hover:opacity-45 transition-opacity duration-500">
                    <GemShape shape={col.shape} color={col.accentColor} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1510]/60" />
                  {/* Tagline badge */}
                  <div className="absolute bottom-4 left-5">
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded"
                      style={{
                        color: col.accentColor,
                        background: `${col.accentColor}18`,
                        border: `1px solid ${col.accentColor}35`,
                      }}
                    >
                      {col.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-playfair text-xl text-[#F5F0E8] font-semibold mb-3">
                    {col.brand}
                  </h3>
                  <p className="text-[#A89880] text-sm leading-relaxed flex-1 mb-6">
                    {col.description}
                  </p>
                  <a
                    href="#"
                    className="btn-gold-outline w-full py-2.5 gap-2 group/btn text-xs"
                  >
                    {col.btnLabel}
                    <ExternalLink className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#1A1510] border border-[#C9A96E]/14 rounded-2xl px-8 py-8 max-w-2xl">
            <p className="text-[#A89880] leading-relaxed mb-6">
              Love gems or gold? Tell us &rarr; we&apos;ll show your perfect live shows.
            </p>
            <a href="#join" className="btn-gold px-8 py-3.5 gap-2.5">
              Set My Preferences
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  )
}
