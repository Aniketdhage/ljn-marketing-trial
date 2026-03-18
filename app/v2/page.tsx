"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Invite modal state
  const [showModal, setShowModal] = useState(false);
  const [inviteName, setInviteName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [invitePhone, setInvitePhone] = useState("");
  const [inviteeEmail, setInviteeEmail] = useState("");
  const [inviteSubmitted, setInviteSubmitted] = useState(false);

  const handleInviteSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!inviteEmail || !inviteName || !invitePhone || !inviteeEmail) return;
    console.log({ inviteEmail, inviteName, invitePhone, inviteeEmail });
    setInviteSubmitted(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setInviteSubmitted(false);
    setInviteName("");
    setInviteEmail("");
    setInvitePhone("");
    setInviteeEmail("");
  };

  const handleEmailSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) return;
    setStep(2);
  };

  const handleFinalSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({ email, name, phone });
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Invite & Earn Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
            onClick={closeModal}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="relative w-full max-w-lg bg-linear-to-br from-[#1a1208]/95 via-[#0f0c05]/95 to-[#1a1208]/95 border border-yellow-400/30 rounded-3xl shadow-[0_8px_60px_rgba(201,169,110,0.25)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold shimmer top bar */}
              <div className="h-1 w-full bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-600" />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl leading-none transition"
                  aria-label="Close"
                >
                  ×
                </button>

                <AnimatePresence mode="wait">
                  {!inviteSubmitted ? (
                    <motion.div
                      key="invite-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {/* Header */}
                      <div className="text-center mb-6">
                        <p className="text-yellow-400 text-xs tracking-widest uppercase font-semibold mb-2">Refer & Reward</p>
                        <h2 className="text-2xl font-bold text-white">
                          Invite a Friend,{" "}
                          <span className="text-yellow-400">Earn Together</span>
                        </h2>
                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                          Sign in and invite someone you love. When they join,{" "}
                          <span className="text-yellow-300">both of you unlock $200 in exclusive credits</span> — shop live shows together.
                        </p>
                      </div>

                      {/* Perks row */}
                      <div className="flex gap-3 mb-6">
                        {[
                          { icon: "🎁", text: "$200 for you" },
                          { icon: "💌", text: "$200 for them" },
                          { icon: "🏆", text: "VIP access" },
                        ].map((p) => (
                          <div key={p.text} className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 text-center">
                            <p className="text-lg">{p.icon}</p>
                            <p className="text-xs text-gray-300 mt-1">{p.text}</p>
                          </div>
                        ))}
                      </div>

                      <form onSubmit={handleInviteSubmit} className="space-y-3">
                        <p className="text-xs text-yellow-400/80 uppercase tracking-widest font-semibold">Your Details</p>
                        <input
                          type="text"
                          placeholder="Your Full Name"
                          value={inviteName}
                          onChange={(e) => setInviteName(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 text-sm"
                        />
                        <input
                          type="email"
                          placeholder="Your Email Address"
                          value={inviteEmail}
                          onChange={(e) => setInviteEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 text-sm"
                        />
                        <input
                          type="tel"
                          placeholder="Your Phone (+91 98765 43210)"
                          value={invitePhone}
                          onChange={(e) => setInvitePhone(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 text-sm"
                        />

                        <p className="text-xs text-yellow-400/80 uppercase tracking-widest font-semibold pt-2">Friend&apos;s Email</p>
                        <input
                          type="email"
                          placeholder="Friend's Email Address"
                          value={inviteeEmail}
                          onChange={(e) => setInviteeEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 text-sm"
                        />

                        <button
                          type="submit"
                          className="w-full py-3 mt-1 rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-lg hover:scale-105 transition text-sm tracking-wide"
                        >
                          Send Invite & Claim Credits 🎁
                        </button>
                        <p className="text-xs text-center text-gray-500">Your friend gets a personal invite from you — no spam, ever.</p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="invite-success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6 space-y-4"
                    >
                      <div className="text-6xl">🎉</div>
                      <h3 className="text-2xl font-bold text-white">Invite Sent!</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Your friend will receive a personal invite. Once they sign up,{" "}
                        <span className="text-yellow-400 font-semibold">both of you unlock $200 in credits</span> for live shows.
                      </p>
                      <div className="bg-white/5 border border-yellow-400/20 rounded-xl px-5 py-4 text-sm text-gray-400">
                        Keep an eye on your inbox — we&apos;ll notify you the moment your friend joins.
                      </div>
                      <button
                        onClick={closeModal}
                        className="mt-2 px-8 py-3 rounded-xl bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-bold hover:scale-105 transition"
                      >
                        Done
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="https://cdn1.ljn.live/LJN_Content/app_asset/videos/desktop.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/80 via-black/50 to-black/30" />

      {/* Main Content */}
      <div className="relative z-2 px-6 md:px-16 py-12">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-semibold tracking-widest text-yellow-400">LJN</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-2 rounded-full bg-yellow-500 text-black font-medium shadow-lg hover:scale-105 transition"
          >
            Invite &amp; Earn
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl md:text-4xl font-bold leading-tight"
            >
             Discover Breathtaking Luxury Jewelry
– Live Shows, Exclusive
Designs & Instant Buys <br />
              <span className="text-yellow-400">Live & Exclusive</span>
            </motion.h1>

            <p className="text-gray-300 text-lg max-w-lg">
              Experience live luxury shopping like never before. Bid, buy, and
              unlock exclusive deals with premium collections.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="bg-white/5 px-4 py-2 rounded-lg">💎 50K+ Buyers</div>
              <div className="bg-white/5 px-4 py-2 rounded-lg">🎥 Live Shows Daily</div>
              <div className="bg-white/5 px-4 py-2 rounded-lg">🎁 $200 Credit</div>
            </div>

            {/* How it works */}
            <div className="mt-8 space-y-3">
              <p className="text-yellow-400 font-semibold">How it works:</p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>1. Sign up & unlock credits</li>
                <li>2. Join live jewelry shows</li>
                <li>3. Buy premium pieces at best prices</li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleEmailSubmit}
                    className="space-y-5"
                  >
                    <h2 className="text-2xl font-semibold text-center">
                      Unlock Your <span className="text-yellow-400">$200 Credit</span>
                    </h2>

                    {/* Value quote */}
                    <div className="border-l-2 border-yellow-400/60 pl-4 py-1 bg-white/5 rounded-r-lg">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Join thousands of jewelry lovers who catch stunning new collections during our live shows.{' '}
                        <span className="text-yellow-300/90">Watch designers unveil pieces, shop on the spot, and own luxury you love.</span>
                      </p>
                    </div>
                    <p className="text-center text-gray-300 text-sm">
                      Enter your email to access exclusive live shows
                    </p>


                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-lg hover:scale-105 transition"
                    >
                      Unlock $200 Credit
                    </button>

                    <p className="text-xs text-center text-gray-400">
                     We send value, not noise.<br/>Live show invites &amp; exclusive member alerts only.
                    </p>
                  </motion.form>
                ) : (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleFinalSubmit}
                    className="space-y-5"
                  >
                    <h2 className="text-2xl font-semibold text-center">
                      Almost There 🎉
                    </h2>

                    <div className="text-center space-y-1">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Your <span className="text-yellow-400 font-semibold">$200 credit</span> is reserved — just one more step.
                      </p>
                      <p className="text-gray-400 text-xs">
                        Tell us your name and phone so we can send your live show invites &amp; exclusive member alerts directly to you.
                      </p>
                    </div>

                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30"
                    />

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-linear-to-r from-yellow-400 to-yellow-600 text-black font-semibold shadow-lg hover:scale-105 transition"
                    >
                      Activate My VIP Access
                    </button>

                    <p className="text-xs text-center text-gray-400">
                      Secure & private. We respect your data.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-300">
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-5 hover:bg-white/15 transition">
            <p className="text-3xl font-bold text-yellow-400">50K+</p>
            <p className="text-sm mt-1 text-gray-300">Happy Buyers</p>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-5 hover:bg-white/15 transition">
            <p className="text-3xl font-bold text-yellow-400">200+</p>
            <p className="text-sm mt-1 text-gray-300">Live Shows</p>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-5 hover:bg-white/15 transition">
            <p className="text-3xl font-bold text-yellow-400">$200</p>
            <p className="text-sm mt-1 text-gray-300">Free Credits</p>
          </div>
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl px-4 py-5 hover:bg-white/15 transition">
            <p className="text-3xl font-bold text-yellow-400">24/7</p>
            <p className="text-sm mt-1 text-gray-300">Live Access</p>
          </div>
        </div>
      </div>
    </div>
  );
}
