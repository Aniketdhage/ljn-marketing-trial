import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Play, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/clip1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Split Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left: Message */}
        <div className="order-last lg:order-first">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase font-semibold">
              Luxury Jewelry Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
          >
            Where <em className="gold-text not-italic">Entertainment</em>
            <br />
            Meets <em className="gold-text not-italic">Stunning Jewelry</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 font-light"
          >
            Join our exclusive live shopping shows and discover breathtaking pieces at unbelievable prices.
            Get <span className="text-primary font-semibold">$25 off</span> when you join your first show!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-4 mb-10"
          >
            <a
              href="#upcoming"
              className="hidden lg:flex px-8 py-4 rounded-full border border-primary/30 text-primary font-body font-medium hover:bg-primary/10 transition-all duration-300 items-center gap-2"
            >
              <Play className="w-4 h-4" />
              View Schedule
            </a>
            <a
              href="#hero-form"
              className="lg:hidden px-8 py-4 gold-gradient rounded-full text-primary-foreground font-body font-semibold flex items-center gap-2 hover:scale-105 transition-transform glow-gold"
            >
              <Sparkles className="w-4 h-4" />
              Join Live Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-3 gap-6 max-w-sm"
          >
            {[
              { value: "50K+", label: "Happy Buyers" },
              { value: "200+", label: "Shows Aired" },
              { value: "$25", label: "Off First Order" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-display font-bold gold-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Join Form */}
        <motion.div className="order-first lg:order-last"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div id="hero-form" className="glass-card rounded-3xl p-8 md:p-10 border border-primary/20">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full gold-gradient flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold gold-text mb-3">See You There! ✨</h2>
                <p className="text-muted-foreground mb-1">
                  You're all set, <span className="text-foreground font-semibold">{form.name}</span>!
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  We'll send details to <span className="text-primary">{form.email}</span>.
                  <br />Your <span className="text-primary font-semibold">$25 off</span> is waiting!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", mobile: "" }); }}
                  className="px-8 py-3 gold-gradient rounded-full text-primary-foreground font-body font-semibold hover:scale-105 transition-transform"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <Sparkles className="w-7 h-7 text-primary mx-auto mb-2" />
                  <h2 className="text-xl md:text-2xl font-display font-bold">
                    $25 Off <span className="gold-text">Sophia Fiori</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1.5">
                    Livestream Event - Wed at 3pm PT
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-body">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-body">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="john@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-body">
                      Mobile Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.mobile}
                      onChange={handleChange("mobile")}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 gold-gradient rounded-xl text-primary-foreground font-body font-semibold text-lg hover:scale-[1.02] transition-transform duration-300 glow-gold mt-2"
                  >
                    Reserve My Spot — Get $25 Off
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
