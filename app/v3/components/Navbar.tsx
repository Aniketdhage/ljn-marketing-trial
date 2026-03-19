'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Gem } from 'lucide-react'

const navLinks = ['Live Now', 'Schedule', 'My Favorites', 'Help']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0804]/93 backdrop-blur-xl border-b border-[#C9A96E]/10 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-[#C9A96E]/60 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors duration-300">
            <Gem className="w-4 h-4 text-[#C9A96E]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-playfair text-[#F5F0E8] font-bold text-xl">LJN</span>
            <span className="hidden sm:block text-[#C9A96E]/50 text-[9px] tracking-[0.25em] uppercase mt-0.5">
              Luxury Jewelry Network
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#A89880] hover:text-[#C9A96E] text-sm tracking-wide transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A96E] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-[#A89880] hover:text-[#C9A96E] text-sm tracking-wide transition-colors duration-300"
          >
            Sign In
          </a>
          <a href="#join" className="btn-gold px-6 py-2.5 text-xs">
            Join Live Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-[#C9A96E] p-2 hover:bg-[#C9A96E]/10 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#0A0804]/97 backdrop-blur-xl border-t border-[#C9A96E]/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#A89880] hover:text-[#C9A96E] py-3 text-sm tracking-wide border-b border-[#C9A96E]/8 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#join"
                className="btn-gold px-6 py-3.5 mt-4 w-full text-center text-xs"
                onClick={() => setMobileOpen(false)}
              >
                Join Live Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
