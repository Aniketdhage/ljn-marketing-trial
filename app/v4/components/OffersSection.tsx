import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Gift, Users, Zap, Crown, Sparkles, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface OffersSectionProps {
  onJoinShow: () => void;
}

const perks = [
  {
    icon: Gift,
    title: "$200 Welcome Credit",
    desc: "Get $200 in show credits just for joining your first live event. No strings attached.",
  },
  {
    icon: Users,
    title: "Refer & Both Earn $200",
    desc: "Invite a friend and you both get $200 in credits. Share the sparkle!",
  },
  {
    icon: Zap,
    title: "Flash Deals & Auctions",
    desc: "Exclusive prices only available during live shows. Up to 70% off retail.",
  },
  {
    icon: Crown,
    title: "VIP Early Access",
    desc: "Regulars get first dibs on new collections and private show invitations.",
  },
];

const OffersSection = ({ onJoinShow }: OffersSectionProps) => {
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
    <section id="offers" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Exclusive Perks</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
            Why Join Our <span className="gold-text">Live Shows?</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Perks */}
          <div className="grid sm:grid-cols-2 gap-6">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk.title} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <perk.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-3">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right: Join Form */}
          <AnimatedSection delay={0.3}>
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-primary/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full gold-gradient flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-display font-bold gold-text mb-3">You're In! ✨</h2>
                  <p className="text-muted-foreground mb-1">
                    Welcome, <span className="text-foreground font-semibold">{form.name}</span>!
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Your <span className="text-primary font-semibold">$200 welcome credit</span> is ready.
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
                      Claim Your <span className="gold-text">$200 Credit</span>
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1.5">
                      Sign up now and start shopping live!
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
                      Get My $200 Credit
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
