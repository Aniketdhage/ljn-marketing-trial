import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

interface NavbarProps {
  onJoinShow: () => void;
}

const navItems = [
  { label: "Live Now", href: "#hero" },
  { label: "Schedule", href: "#upcoming" },
  { label: "My Favorites", href: "#videos" },
  { label: "Help", href: "#offers" },
];

const Navbar = ({ onJoinShow }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
            className="flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold gold-text tracking-wide">LJN</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNav("#hero")}
              className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onJoinShow}
              className="px-5 py-2 gold-gradient rounded-full text-primary-foreground font-body font-semibold text-sm hover:scale-105 transition-transform glow-gold"
            >
              Join Live Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <button
                  onClick={() => handleNav("#hero")}
                  className="block w-full text-left px-4 py-3 text-sm font-body font-medium text-muted-foreground hover:text-primary rounded-lg transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setMobileOpen(false); onJoinShow(); }}
                  className="w-full py-3 gold-gradient rounded-xl text-primary-foreground font-body font-semibold text-sm"
                >
                  Join Live Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
