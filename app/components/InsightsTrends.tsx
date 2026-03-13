'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar } from 'lucide-react'

const articles = [
  {
    time: '11:00 AM',
    status: 'Live Now',
    statusColor: '#E85555',
    title: 'Pearl Perfection',
    description:
      'Freshwater and South Sea pearls for classic elegance. 8 pieces remaining—join to secure yours.',
    cta: 'Join Live',
    accentColor: '#C9A96E',
    barColor: '#C9A96E',
  },
  {
    time: '3:00 PM',
    status: 'Upcoming',
    statusColor: '#D4A843',
    title: 'Gold Rush',
    description:
      'Modern gold designs with innovative chains and settings. Starts in 4 hours—set a reminder now.',
    cta: 'Set Reminder',
    accentColor: '#E8D5B0',
    barColor: '#E8D5B0',
  },
  {
    time: '8:00 PM',
    status: 'Tonight',
    statusColor: '#6B9AD2',
    title: 'Diamond Nights',
    description:
      'Sparkling diamond bracelets and cocktail rings. Members get early access 15 minutes before opening.',
    cta: 'Reserve Spot',
    accentColor: '#C9A96E',
    barColor: '#C9A96E',
  },
]

export default function InsightsTrends() {
  return (
    <section className="py-24 md:py-36 bg-[#0E0C08] relative">
      <div className="divider-gold absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label block mb-5">Today&apos;s Schedule</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[54px] text-[#F5F0E8] font-bold leading-tight">
            Catch These{' '}
            <span className="text-gold-gradient italic">Live Shows Today</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="luxury-card rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Top accent bar */}
                <div
                  className="h-[3px] w-full"
                  style={{
                    background: `linear-gradient(90deg, ${article.barColor}, transparent)`,
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Time + status */}
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border rounded-full"
                      style={{
                        color: article.accentColor,
                        borderColor: `${article.accentColor}30`,
                        background: `${article.accentColor}0a`,
                      }}
                    >
                      <Clock className="w-2.5 h-2.5" />
                      {article.time}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border rounded-full"
                      style={{
                        color: article.statusColor,
                        borderColor: `${article.statusColor}30`,
                        background: `${article.statusColor}0a`,
                      }}
                    >
                      {article.status}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl text-[#F5F0E8] font-semibold leading-snug mb-4 group-hover:text-[#E8D5B0] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[#A89880] text-sm leading-relaxed flex-1 mb-6">
                    {article.description}
                  </p>

                  <a
                    href="#join"
                    className="btn-gold w-full py-2.5 gap-2 text-xs justify-center"
                  >
                    {article.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Weekly schedule CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a href="#" className="btn-gold-outline px-10 py-3.5 gap-2.5 inline-flex items-center">
            See Full Weekly Schedule
            <Calendar className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <div className="divider-gold absolute bottom-0 left-0 right-0" />
    </section>
  )
}
