'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

function DiamondSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,2 78,40 40,78 2,40" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.8" />
      <polygon points="40,14 66,40 40,66 14,40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
      <polygon points="40,26 54,40 40,54 26,40" stroke="currentColor" strokeWidth="0.4" fill="currentColor" fillOpacity="0.07" opacity="0.6" />
      <circle cx="40" cy="40" r="1.5" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0804]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(201,169,110,0.075) 0%, transparent 68%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-2/3"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgba(201,169,110,0.055) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96"
          style={{
            background:
              'radial-gradient(ellipse at bottom left, rgba(201,169,110,0.04) 0%, transparent 65%)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Decorative floating diamonds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-16 -right-16 text-[#C9A96E] w-72 h-72 opacity-10"
        >
          <DiamondSVG className="w-full h-full" />
        </motion.div>
        <DiamondSVG className="absolute top-28 right-16 text-[#C9A96E] w-14 h-14 opacity-25" />
        <DiamondSVG className="absolute bottom-36 left-10 text-[#C9A96E] w-9 h-9 opacity-20" />
        <DiamondSVG className="absolute top-1/2 right-1/4 text-[#C9A96E] w-5 h-5 opacity-30 rotate-45" />
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-44 right-12 text-[#C9A96E] w-7 h-7 opacity-20"
        >
          <DiamondSVG className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 left-16 text-[#C9A96E] w-4 h-4 opacity-15"
        >
          <DiamondSVG className="w-full h-full" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-3 mb-10"
        >
          <div className="h-px w-10 bg-[#C9A96E]/40" />
          <span className="section-label">Live Shows &middot; Luxury Jewelry</span>
          <div className="h-px w-10 bg-[#C9A96E]/40" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp(0.12)}
          initial="hidden"
          animate="visible"
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-bold text-[#F5F0E8] leading-[1.06] mb-8 max-w-5xl mx-auto"
        >
          Discover Breathtaking{' '}
          <span className="text-gold-gradient italic">Luxury Jewelry</span>
          <br className="hidden md:block" /> – Live Shows, Exclusive
          <br className="hidden lg:block" />
          Designs &amp; Instant Buys
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp(0.25)}
          initial="hidden"
          animate="visible"
          className="text-[#A89880] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Join thousands of jewelry lovers who catch stunning new collections during our live shows.
          Watch designers unveil pieces, shop on the spot, and own luxury you love.
        </motion.p>

        {/* Key benefit pills */}
        <motion.div
          variants={fadeUp(0.35)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {[
            'Live shows 5 days a week',
            'Exclusive collections',
            'Instant show buys',
            'Alerts for your style',
          ].map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-sm text-[#A89880] border border-[#C9A96E]/15 px-4 py-2 rounded-full bg-[#1A1510]/50 backdrop-blur-sm"
            >
              <span className="w-1 h-1 rounded-full bg-[#C9A96E] block flex-shrink-0" />
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#join" className="btn-gold px-8 py-4 gap-2.5 group">
            Join Live Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#collections"
            className="text-[#C9A96E] text-sm tracking-wide hover:text-[#E8D5B0] transition-colors border-b border-[#C9A96E]/30 hover:border-[#C9A96E] pb-0.5"
          >
            Or see what&apos;s live today
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="visible"
          className="mt-14 flex flex-col items-center gap-3"
        >
          <div className="divider-gold max-w-sm mx-auto" />
          <p className="text-[#A89880]/50 text-xs tracking-[0.18em] uppercase">
            Loved by 50K+ jewelry enthusiasts worldwide
          </p>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#C9A96E]/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
