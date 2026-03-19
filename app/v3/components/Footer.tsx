'use client'

import { Gem, Instagram, Youtube, ArrowRight } from 'lucide-react'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

const socialLinks = [
  { icon: Instagram, label: 'Instagram Live', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: WhatsAppIcon, label: 'WhatsApp Alerts', href: '#' },
  { icon: TelegramIcon, label: 'Telegram', href: '#' },
]

const navLinks = ['Live Now', 'Schedule', 'My Favorites', 'Profile', 'Help']

export default function Footer() {
  return (
    <footer className="bg-[#060402] border-t border-[#C9A96E]/10">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group w-max">
              <div className="w-9 h-9 border border-[#C9A96E]/55 flex items-center justify-center group-hover:border-[#C9A96E] transition-colors">
                <Gem className="w-4 h-4 text-[#C9A96E]" />
              </div>
              <div className="leading-none">
                <span className="font-playfair text-[#F5F0E8] font-bold text-lg block">LJN</span>
                <span className="text-[#C9A96E]/45 text-[9px] tracking-[0.25em] uppercase mt-0.5 block">
                  Luxury Jewelry Network
                </span>
              </div>
            </a>

            <p className="text-[#A89880]/65 text-sm leading-relaxed max-w-xs mb-7">
              Luxury Jewelry Network – Live shows for jewelry lovers.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-[#C9A96E]/18 flex items-center justify-center text-[#A89880] hover:text-[#C9A96E] hover:border-[#C9A96E]/45 transition-all duration-300 rounded"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation col */}
          <div>
            <h4 className="text-[#F5F0E8] text-xs tracking-[0.2em] uppercase font-semibold mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#A89880]/65 hover:text-[#C9A96E] text-sm transition-colors tracking-wide"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter col */}
          <div>
            <h4 className="text-[#F5F0E8] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
              Never Miss a Live Show
            </h4>
            <p className="text-[#A89880]/60 text-sm mb-5 leading-relaxed">
              Never miss a live show! Get alerts for your style.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2.5"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="input-luxury"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn-gold w-full py-3 gap-2 text-xs">
                Get Alerts
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mb-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A89880]/35 text-xs tracking-wide">
          <span>© 2026 Luxury Jewelry Network. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span
              className="w-1 h-1 rounded-full bg-[#C9A96E]/30 block"
              aria-hidden="true"
            />
            <span>Built for the finest in fine jewelry</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
