import AnimatedSection from "./AnimatedSection";
import { Play, Eye } from "lucide-react";

const pastShows = [
  {
    title: "Valentine's Special Collection",
    date: "Feb 14, 2026",
    views: "12.5K",
    thumbnail: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/245_desktop.jpg",
  },
  {
    title: "Emerald Extravaganza",
    date: "Feb 10, 2026",
    views: "8.2K",
    thumbnail: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/251_desktop.jpg",
  },
  {
    title: "Sunday Diamond Deals",
    date: "Feb 8, 2026",
    views: "15.1K",
    thumbnail: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/248_desktop.jpg",
  },
  {
    title: "Sapphire Saturday",
    date: "Feb 5, 2026",
    views: "9.7K",
    thumbnail: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/249_desktop.jpg",
  },
  {
    title: "Gold Rush Auction",
    date: "Feb 1, 2026",
    views: "18.3K",
    thumbnail: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/250_desktop.jpg",
  },
  {
    title: "New Year's Kickoff Sale",
    date: "Jan 28, 2026",
    views: "22.1K",
    thumbnail: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/245_desktop.jpg",
  },
];

const PastShows = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Replay</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
            Past Show <span className="gold-text">Playlist</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Missed a show? Catch up on all our previous events and get inspired.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastShows.map((show, i) => (
            <AnimatedSection key={show.title} delay={i * 0.08}>
              <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={show.thumbnail}
                    alt={show.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center glow-gold">
                      <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{show.title}</h3>
                  <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <span>{show.date}</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {show.views} views
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastShows;
