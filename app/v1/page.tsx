"use client";

import Link from "next/link";

const MAIN_SITE_URL = "https://luxuryjewelrynetwork.com/home";

const sections = [
  { id: "how-it-works", label: "How It Works" },
  { id: "who-for", label: "Who It’s For" },
  { id: "why-us", label: "Why Join" },
  { id: "shows", label: "Today’s Shows" },
  { id: "community", label: "Community" },
  { id: "faq", label: "FAQ" },
];

export default function HomePage() {
  const scrollToSection = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

      {/* Top blur accents */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%)]" />

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        {/* HEADER + NAV */}
        <header className="sticky top-0 z-30 mb-4 border-b border-slate-900/80 bg-slate-950/80 backdrop-blur-xl">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-rose-400 ring-2 ring-amber-300/60">
                <span className="text-sm font-semibold text-slate-950">
                  LJN
                </span>
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.26em] text-amber-200/80">
                  Luxury Jewelry Network
                </p>
                <p className="text-xs text-slate-300/90">
                  Live Jewelry Shopping Shows
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-4 text-[11px] text-slate-100/80 md:flex">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="rounded-full px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-slate-300 transition hover:bg-slate-900 hover:text-amber-200"
                >
                  {s.label}
                </button>
              ))}
              <Link
                href={MAIN_SITE_URL}
                className="rounded-full bg-amber-400 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300"
              >
                Enter Live Show
              </Link>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section
          aria-labelledby="hero-heading"
          className="grid gap-10 py-6 md:grid-cols-[1.1fr,1fr] md:py-10 lg:py-12"
        >
          {/* Hero text */}
          <div className="flex flex-col justify-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[11px] text-amber-100/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Live luxury jewelry shows · 5 days a week
            </p>

            <h1
              id="hero-heading"
              className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
            >
              Watch{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                breathtaking jewelry
              </span>{" "}
              revealed live — then own the pieces you love.
            </h1>

            <p className="mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
              Luxury Jewelry Network is your live destination to discover
              designer pieces, bridal sets, everyday favorites, and rare
              gemstones. See how every ring, necklace, and bracelet moves in the
              light, ask questions in real time, and shop instantly while
              quantities last.
            </p>

            {/* Hero bullets – clarity at a glance */}
            <ul className="mt-5 grid max-w-xl gap-2 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-3 w-3 rounded-full bg-amber-300/80" />
                <span>5+ live shows every week across bridal, gold, gems & more.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-3 w-3 rounded-full bg-emerald-300/80" />
                <span>Exclusive live‑only offers and limited‑edition releases.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-3 w-3 rounded-full bg-sky-300/80" />
                <span>See real movement, sparkle, and scale before you buy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] h-3 w-3 rounded-full bg-rose-300/80" />
                <span>Trusted by 50K+ jewelry lovers worldwide.</span>
              </li>
            </ul>

            {/* Hero CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={MAIN_SITE_URL}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(251,191,36,0.35)] transition hover:bg-amber-300"
              >
                Join Live Show Now
                <span className="ml-2 text-xs">↗</span>
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("how-it-works")}
                className="inline-flex items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm transition hover:border-amber-300 hover:text-amber-200"
              >
                See how it works
              </button>
            </div>

            {/* Social proof row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full border border-slate-900 bg-amber-200/90" />
                <div className="h-7 w-7 rounded-full border border-slate-900 bg-rose-200/90" />
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-900 bg-slate-800 text-[10px] text-slate-200">
                  50K+
                </div>
              </div>
              <p>
                Joined by{" "}
                <span className="font-semibold text-amber-200">
                  50,000+ members
                </span>{" "}
                in over 30 cities.
              </p>
            </div>
          </div>

          {/* Hero visual – clear “what you get” preview */}
          <div
            aria-label="Preview of live show experience"
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 -z-10 blur-3xl">
              <div className="mx-auto h-56 w-56 rounded-full bg-amber-400/20 opacity-80 mix-blend-screen" />
            </div>

            <div className="relative w-full max-w-sm rounded-3xl border border-amber-200/15 bg-gradient-to-b from-slate-900/70 via-slate-950 to-black p-5 shadow-2xl shadow-black/80">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Live show · Ruby Fire Collection
                </span>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-amber-200">
                  Exclusive
                </span>
              </div>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900">
                <div className="relative h-52">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.45),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(244,114,182,0.4),transparent_55%)]" />
                  <div className="relative flex h-full flex-col justify-end p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200/80">
                      Live host on screen
                    </p>
                    <p className="mt-1 text-lg font-semibold text-slate-50">
                      See every angle, ask questions, buy instantly.
                    </p>
                    <p className="mt-2 text-[11px] text-slate-200/85">
                      12 pieces left · show‑only pricing · secure checkout.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                <div className="flex flex-col">
                  <span className="font-medium text-amber-100">
                    2,184 viewers right now
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Join from mobile, tablet, or desktop in seconds.
                  </span>
                </div>
                <Link
                  href={MAIN_SITE_URL}
                  className="inline-flex items-center rounded-full bg-amber-400 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-md shadow-amber-500/50 hover:bg-amber-300"
                >
                  Join show
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="mt-6 scroll-mt-24 border-t border-slate-800/80 pt-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300">
                Simple, clear, and fun
              </p>
              <h2
                id="how-it-works-heading"
                className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                How Luxury Jewelry Network works
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                Think of it as a personal jewelry show streamed just for you. In
                a few steps, you can watch, compare, and own pieces that feel
                like they were made for your style.
              </p>
            </div>
          </div>

          <ol className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Pick a live show",
                description:
                  "Browse today’s schedule and choose the themes you love — bridal, diamonds, modern gold, pearls, or gemstone specials.",
              },
              {
                step: "Step 2",
                title: "Watch in real time",
                description:
                  "Hosts and designers reveal each piece on camera, showing the true color, sparkle, and scale on the hand and neckline.",
              },
              {
                step: "Step 3",
                title: "Buy before it’s gone",
                description:
                  "See live inventory, special show pricing, and secure checkout right on Luxury Jewelry Network. Many pieces sell out quickly.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  {item.step}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-amber-100 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <p>
              Prefer to explore everything at once? Visit the full Luxury
              Jewelry Network site for complete collections, replays, and your
              personal favorites list.
            </p>
            <Link
              href={MAIN_SITE_URL}
              className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-white"
            >
              Go to full experience
              <span className="ml-1 text-xs">↗</span>
            </Link>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section
          id="who-for"
          aria-labelledby="who-for-heading"
          className="mt-12 scroll-mt-24 border-t border-slate-800/80 pt-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300">
                Designed for real people
              </p>
              <h2
                id="who-for-heading"
                className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                Perfect for every kind of jewelry lover
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                Whatever you’re searching for — from a once‑in‑a‑lifetime ring
                to an everyday bracelet — our live shows bring curated
                collections straight to you.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Everyday Luxury Seeker",
                description:
                  "Effortless, wearable pieces you’ll reach for every day — think subtle sparkle, minimal gold, and delicate designs.",
                example:
                  "“Show me dainty rings and simple chains I can wear to work.”",
              },
              {
                title: "Bridal & Occasion Shopper",
                description:
                  "Engagement rings, bridal sets, and heirloom‑worthy pieces for the biggest celebrations in your life.",
                example:
                  "“I want to compare center‑stone shapes live before choosing my ring.”",
              },
              {
                title: "Designer Piece Collector",
                description:
                  "Limited‑run creations from top designers, with storytelling around inspiration, craftsmanship, and materials.",
                example:
                  "“I love owning pieces that no one else in the room will have.”",
              },
              {
                title: "Gemstone & Trend Lover",
                description:
                  "Colored gemstones, trending silhouettes, and fresh styling ideas for your existing collection.",
                example:
                  "“I’m obsessed with sapphires and want to see what’s new.”",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)] transition hover:border-amber-300/70 hover:bg-slate-900/70"
              >
                <div>
                  <h3 className="text-sm font-semibold text-amber-100 sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    {item.description}
                  </p>
                  <p className="mt-3 text-[11px] italic text-slate-400">
                    {item.example}
                  </p>
                </div>
                <Link
                  href={MAIN_SITE_URL}
                  className="mt-4 inline-flex items-center text-[11px] font-semibold text-amber-200 group-hover:text-amber-100"
                >
                  See shows for this style
                  <span className="ml-1 text-xs">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* WHY JOIN */}
        <section
          id="why-us"
          aria-labelledby="why-join-heading"
          className="mt-12 scroll-mt-24 border-t border-slate-800/80 pt-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300">
                More than just a catalog
              </p>
              <h2
                id="why-join-heading"
                className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                Why jewelry lovers can’t get enough
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                Static photos hide how jewelry truly looks and feels. Live
                shows reveal the details you care about most — and give you a
                front‑row seat to every collection.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "01",
                title: "Live show magic",
                description:
                  "Hosts walk you through each piece, describing weight, movement, and how it pairs with outfits you already own.",
                link: "Find your next live show",
              },
              {
                label: "02",
                title: "Spot buys you’ll love",
                description:
                  "Show‑only pricing and limited quantities create real excitement. When you see “last few pieces”, it really means it.",
                link: "See what’s live today",
              },
              {
                label: "03",
                title: "Personal style guidance",
                description:
                  "Follow the metals, stones, and silhouettes you prefer, then join shows that are curated around your taste.",
                link: "Discover shows for your style",
              },
              {
                label: "04",
                title: "VIP member treatment",
                description:
                  "Members enjoy early access, private drops, styling tips, and Q&A with experts that you simply can’t get in a store.",
                link: "Unlock member experience",
              },
            ].map((benefit) => (
              <article
                key={benefit.label}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/70 to-slate-950/20 p-4 shadow-[0_0_30px_rgba(15,23,42,0.9)]"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                    {benefit.label}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-amber-100 sm:text-base">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    {benefit.description}
                  </p>
                </div>
                <Link
                  href={MAIN_SITE_URL}
                  className="mt-4 inline-flex items-center text-[11px] font-semibold text-amber-200 hover:text-amber-100"
                >
                  {benefit.link}
                  <span className="ml-1 text-xs">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* TODAY'S SHOWS / SCHEDULE */}
        <section
          id="shows"
          aria-labelledby="shows-heading"
          className="mt-12 scroll-mt-24 border-t border-slate-800/80 pt-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300">
                Always something to watch
              </p>
              <h2
                id="shows-heading"
                className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                Catch live shows happening today
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                See a clear snapshot of what’s happening right now, what’s
                coming up, and which replays are worth a watch when you have a
                few minutes to browse.
              </p>
            </div>
            <Link
              href={MAIN_SITE_URL}
              className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-white"
            >
              View full weekly schedule
            </Link>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.4fr,1fr]">
            {/* Show cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  status: "Live Now",
                  statusColor: "bg-red-500",
                  title: "Pearl Perfection",
                  time: "Streaming at this moment",
                  description:
                    "Freshwater and South Sea pearls styled for office, events, and weddings. Last pieces remaining.",
                  tag: "Pearl lovers",
                },
                {
                  status: "Upcoming",
                  statusColor: "bg-amber-400",
                  title: "Gold Rush",
                  time: "Starts in 3 hours",
                  description:
                    "Modern gold chains, bangles, and statement pieces that layer beautifully with what you own.",
                  tag: "Modern gold",
                },
                {
                  status: "Tonight",
                  statusColor: "bg-emerald-400",
                  title: "Diamond Nights",
                  time: "Prime‑time feature",
                  description:
                    "High‑impact diamond bracelets and cocktail rings with early access for members.",
                  tag: "Diamonds & cocktails",
                },
                {
                  status: "Replay",
                  statusColor: "bg-sky-400",
                  title: "Sapphire Dreams",
                  time: "Replay on demand",
                  description:
                    "Blue sapphire rings and pendants you can rewatch anytime, with archive pricing on select pieces.",
                  tag: "Gemstone focus",
                },
              ].map((show) => (
                <article
                  key={show.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <div className="inline-flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${show.statusColor}`}
                      />
                      <span className="uppercase tracking-[0.2em]">
                        {show.status}
                      </span>
                    </div>
                    <span className="text-slate-400">{show.time}</span>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-sm font-semibold text-amber-100 sm:text-base">
                      {show.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                      {show.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="rounded-full bg-slate-900/70 px-2 py-0.5">
                      {show.tag}
                    </span>
                    <Link
                      href={MAIN_SITE_URL}
                      className="inline-flex items-center font-semibold text-amber-200 hover:text-amber-100"
                    >
                      Join on Luxury Jewelry Network
                      <span className="ml-1 text-xs">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Trust + key benefits */}
            <aside className="flex flex-col justify-between rounded-2xl border border-amber-300/50 bg-gradient-to-b from-amber-200/15 via-amber-200/5 to-slate-950/90 p-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-200">
                  Join 50K+ members
                </p>
                <h3 className="mt-2 text-lg font-semibold text-amber-50">
                  Never miss a live show that feels made for you.
                </h3>
                <p className="mt-2 text-xs text-amber-50/80 sm:text-sm">
                  When you move to the main Luxury Jewelry Network site, you can
                  follow your favorite looks, get alerts when similar pieces go
                  live, and enjoy show‑only pricing with secure checkout and
                  30‑day returns.
                </p>
              </div>
              <div className="mt-4 space-y-2 text-xs text-amber-50/90">
                <p>✓ Live alerts for your favorite metals and stones</p>
                <p>✓ Member‑only offers and early‑bird access</p>
                <p>✓ Trusted checkout and friendly support team</p>
              </div>
              <Link
                href={MAIN_SITE_URL}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md shadow-amber-400/50 hover:bg-amber-200"
              >
                Join free on Luxury Jewelry Network
            </Link>
            </aside>
          </div>
        </section>

        {/* COMMUNITY & TESTIMONIALS */}
        <section
          id="community"
          aria-labelledby="community-heading"
          className="mt-12 scroll-mt-24 border-t border-slate-800/80 pt-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300">
                Real stories, real sparkle
              </p>
              <h2
                id="community-heading"
                className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                What members are saying
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                Members from Mumbai to London have found their dream pieces —
                from engagement rings to everyday earrings — through our live
                shows on Luxury Jewelry Network.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Priya S.",
                location: "Mumbai",
                quote:
                  "I found my engagement ring during a live show. I could see how it looked on the hand, compare options, and then buy with confidence.",
                badge: "Engagement win",
              },
              {
                name: "Aisha K.",
                location: "Dubai",
                quote:
                  "The sapphire earrings I grabbed last week are already my favorites. It felt like shopping inside a private boutique from my sofa.",
                badge: "Gemstone lover",
              },
              {
                name: "Rachel L.",
                location: "London",
                quote:
                  "I finally discovered colored gemstone pieces that match my style. The hosts make it easy to understand cut, color, and price.",
                badge: "Collector",
              },
            ].map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
              >
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div>
                    <p className="font-semibold text-slate-100">{t.name}</p>
                    <p className="text-[11px]">{t.location}</p>
                  </div>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-amber-200">
                    {t.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-200">“{t.quote}”</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="mt-12 scroll-mt-24 border-t border-slate-800/80 pt-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300">
                Clear answers, no confusion
              </p>
              <h2
                id="faq-heading"
                className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                New to live jewelry shows? Here are simple answers before you
                visit the main Luxury Jewelry Network site.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Do I have to sign up to watch?",
                a: "You can browse live shows and replays as a guest. To save favorites, get alerts, and unlock member‑only benefits, you’ll create a free account on Luxury Jewelry Network.",
              },
              {
                q: "Can I watch on my phone?",
                a: "Yes. Live shows work beautifully on mobile, tablet, and desktop. Many members watch on their phones while relaxing at home.",
              },
              {
                q: "What if my size or style is not available?",
                a: "Hosts will mention available sizes and variants on air. If your exact size isn’t shown, you’ll see options and next steps on the main site — including similar pieces that may suit you.",
              },
              {
                q: "Is it safe to buy during a show?",
                a: "All purchases are handled through the secure Luxury Jewelry Network platform, with trusted payment options and clear return policies, including 30‑day returns on eligible pieces.",
              },
            ].map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4"
              >
                <h3 className="text-sm font-semibold text-amber-100 sm:text-base">
                  {item.q}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {item.a}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <p>Ready to experience it for yourself? The next live show is only a click away.</p>
            <Link
              href={MAIN_SITE_URL}
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-amber-400/40 hover:bg-amber-300"
            >
              Go to Luxury Jewelry Network
              <span className="ml-1 text-xs">↗</span>
            </Link>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-12 border-t border-slate-800/80 pt-10">
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-rose-300/30 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-200">
                  Luxury Jewelry Network
                </p>
                <h2 className="mt-2 text-xl font-semibold text-amber-50 sm:text-2xl">
                  Your front‑row seat to luxury jewelry is one click away.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-amber-50/90">
                  Move from this landing page to the full Luxury Jewelry Network
                  platform to explore live shows, instant buys, replays, and
                  personalized recommendations built around your style.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link
                  href={MAIN_SITE_URL}
                  className="inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-400/60 hover:bg-amber-200"
                >
                  Enter Luxury Jewelry Network
                  <span className="ml-2 text-xs">↗</span>
                </Link>
                <p className="text-[11px] text-amber-50/80">
                  Share this page on your favorite social platforms to invite
                  friends to your next live jewelry show.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-slate-900/80 pt-6 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} Luxury Jewelry Network. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={MAIN_SITE_URL}
                className="text-slate-400 hover:text-amber-200"
              >
                Visit main site
              </Link>
              <span className="text-slate-700">•</span>
              <span>Live shows · Secure checkout · 30‑day returns</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}