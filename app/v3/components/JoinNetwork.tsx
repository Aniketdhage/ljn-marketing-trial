'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Check } from 'lucide-react'

const loveOptions = [
  { id: 'everyday', label: 'Everyday pieces' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'designer', label: 'Designer' },
  { id: 'gemstones', label: 'Gemstones' },
  { id: 'all', label: 'All styles' },
]

const valuePoints = [
  'Instant live show alerts via email & SMS',
  'Show-only pricing on limited pieces',
  'Early access for members before public opens',
  'Personalized recommendations for your style',
]

export default function JoinNetwork() {
  const [loves, setLoves] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
  })

  const toggleLove = (id: string) => {
    setLoves((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const handleInput =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="join" className="py-24 md:py-36 bg-[#0D0B07] relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Value prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label block mb-5">Join the Community</span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-[52px] text-[#F5F0E8] font-bold leading-tight mb-6">
              Join 50K+
              <br />
              <span className="text-gold-gradient italic">Jewelry Lovers</span>
            </h2>
            <p className="text-[#A89880] text-lg leading-relaxed mb-10">
              Get live show alerts, save favorites, and never miss a must-have piece.
            </p>

            {/* Value points */}
            <div className="flex flex-col gap-4">
              {valuePoints.map((point) => (
                <div key={point} className="flex items-start gap-3.5">
                  <div className="mt-0.5 w-5 h-5 border border-[#C9A96E]/35 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-sm" />
                  </div>
                  <span className="text-[#A89880] text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="mt-12 border-l-2 border-[#C9A96E]/30 pl-5">
              <p className="font-playfair italic text-[#F5F0E8]/70 text-base leading-relaxed">
                &ldquo;Bought my ring during a live show—perfect and 20% less than retail!&rdquo;
              </p>
              <p className="text-[#C9A96E]/50 text-xs tracking-widest uppercase mt-2">
                — Priya S., Mumbai
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="luxury-card rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#C9A96E]" />
                </div>
                <h3 className="font-playfair text-2xl text-[#F5F0E8] font-semibold mb-4">
                  You&apos;re In. Welcome!
                </h3>
                <p className="text-[#A89880] leading-relaxed">
                  Live show alerts are on their way. Check your inbox for your first show
                  invitation and member-exclusive pricing access.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="luxury-card rounded-2xl p-8 flex flex-col gap-5"
              >
                {/* I love selector */}
                <div>
                  <p className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase mb-3">
                    I love
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {loveOptions.map((opt) => {
                      const isActive = loves.includes(opt.id)
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => toggleLove(opt.id)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs tracking-wide border rounded-full transition-all duration-200 ${
                            isActive
                              ? 'border-[#C9A96E] text-[#0A0804] bg-[#C9A96E]'
                              : 'border-[#C9A96E]/18 text-[#A89880] hover:border-[#C9A96E]/38'
                          }`}
                        >
                          {isActive && <Check className="w-2.5 h-2.5" />}
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Text inputs */}
                <div>
                  <label className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    required
                    value={form.firstName}
                    onChange={handleInput('firstName')}
                    className="input-luxury rounded"
                  />
                </div>

                <div>
                  <label className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={handleInput('email')}
                    className="input-luxury rounded"
                  />
                </div>

                <div>
                  <label className="text-[#C9A96E] text-xs tracking-[0.2em] uppercase block mb-2">
                    Phone{' '}
                    <span className="text-[#A89880]/45 normal-case tracking-normal">
                      (optional – for SMS show alerts)
                    </span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 234 567 8900"
                    value={form.phone}
                    onChange={handleInput('phone')}
                    className="input-luxury rounded"
                  />
                </div>

                {/* Consent */}
                <p className="text-[#A89880]/55 text-xs leading-relaxed border-t border-[#C9A96E]/10 pt-4">
                  Get instant live show notifications and exclusive member pricing. Unsubscribe anytime.
                </p>

                {/* Submit */}
                <button type="submit" className="btn-gold w-full py-4 gap-2.5 text-xs">
                  Join Free – Get Live Alerts
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Guest link */}
                <p className="text-center text-[#A89880]/45 text-xs">
                  Just browsing?{' '}
                  <a
                    href="#"
                    className="text-[#C9A96E]/65 hover:text-[#C9A96E] underline transition-colors"
                  >
                    Watch current show as guest
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  )
}
