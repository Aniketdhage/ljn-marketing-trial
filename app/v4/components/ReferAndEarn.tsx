import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Send, CheckCircle, Gift } from "lucide-react";
import { toast } from "sonner";

const ReferAndEarn = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    referralPhone: "",
    referralEmail: "",
  });

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, email, and phone.");
      return;
    }
    if (!form.referralPhone && !form.referralEmail) {
      toast.error("Please enter your friend's phone or email to invite.");
      return;
    }
    setSent(true);
    toast.success("Invitation sent! You both get $200 in credits! 💎");
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", phone: "", referralPhone: "", referralEmail: "" });
    }, 3000);
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full gold-gradient flex items-center justify-center animate-float">
                  <Gift className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Refer a Friend, <span className="gold-text">Both Earn $200</span>
                </h2>
                <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                  Share the excitement! Invite someone to a live show and you'll both receive $200 in credits to spend on gorgeous jewelry.
                </p>
              </div>

              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-semibold gold-text">Invitation Sent!</h3>
                  <p className="text-muted-foreground mt-2">Your friend will receive the invite shortly. Both of you get $200!</p>
                </div>
              ) : (
                <form onSubmit={handleInvite} className="max-w-md mx-auto space-y-4">
                  {/* Your info */}
                  <div className="space-y-3">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">Your Info</p>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block font-body">Full Name <span className="text-primary">*</span></label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block font-body">Email <span className="text-primary">*</span></label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                        placeholder="you@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block font-body">Phone <span className="text-primary">*</span></label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        placeholder="+1 (555) 123-4567"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 py-1">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">Friend's Info</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-body">Friend's Phone Number</label>
                    <input
                      type="tel"
                      value={form.referralPhone}
                      onChange={handleChange("referralPhone")}
                      placeholder="+1 (555) 987-6543"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-body">Friend's Email</label>
                    <input
                      type="email"
                      value={form.referralEmail}
                      onChange={handleChange("referralEmail")}
                      placeholder="friend@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 gold-gradient rounded-xl text-primary-foreground font-body font-semibold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300 glow-gold"
                  >
                    <Send className="w-5 h-5" />
                    Send Invitation
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ReferAndEarn;
