import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle, ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface JoinShowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinShowModal = ({ isOpen, onClose }: JoinShowModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [showReferral, setShowReferral] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    referralPhone: "",
    referralEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setShowReferral(false);
    setForm({ name: "", email: "", mobile: "", address: "", referralPhone: "", referralEmail: "" });
    onClose();
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative glass-card rounded-3xl p-8 md:p-10 max-w-lg w-full border border-primary/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full gold-gradient flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-display font-bold gold-text mb-3">See You There! ✨</h2>
                <p className="text-muted-foreground mb-2">
                  You're all set, <span className="text-foreground font-semibold">{form.name}</span>!
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  We'll send details to <span className="text-primary">{form.email}</span>.
                  <br />Your <span className="text-primary font-semibold">$200 welcome credit</span> is waiting!
                </p>
                {(form.referralPhone || form.referralEmail) && (
                  <p className="text-muted-foreground text-sm mb-4">
                    🎁 Your friend will receive an invite — you'll both earn <span className="text-primary font-semibold">$200</span>!
                  </p>
                )}
                <button
                  onClick={handleClose}
                  className="px-8 py-3 gold-gradient rounded-full text-primary-foreground font-body font-semibold hover:scale-105 transition-transform"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h2 className="text-2xl md:text-3xl font-display font-bold">
                    Join the <span className="gold-text">Live Show</span>
                  </h2>
                  <p className="text-muted-foreground text-sm mt-2">
                    Reserve your spot and get $200 in credits!
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
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block font-body">
                      Address <span className="text-xs text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      value={form.address}
                      onChange={handleChange("address")}
                      placeholder="Your shipping address"
                      rows={2}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground font-body resize-none"
                    />
                  </div>

                  {/* Referral section - optional collapsible */}
                  <div className="border border-primary/10 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setShowReferral(!showReferral)}
                      className="w-full px-4 py-3 flex items-center justify-between text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        🎁 <span className="text-primary font-semibold">Refer a Friend</span> — Both get $200!
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showReferral ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {showReferral && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 space-y-3">
                            <div>
                              <label className="text-sm text-muted-foreground mb-1.5 block font-body">Friend's Phone</label>
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
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 gold-gradient rounded-xl text-primary-foreground font-body font-semibold text-lg hover:scale-[1.02] transition-transform duration-300 glow-gold mt-2"
                  >
                    Reserve My Spot — Get $200 Credit
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinShowModal;
