import AnimatedSection from "./AnimatedSection";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface UpcomingShowsProps {
  onJoinShow: () => void;
}

const shows = [
  {
    title: "Designing Your Dream Ring",
    date: "Monday, March 16",
    time: "5:00 PM EST",
    image: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/245_desktop.jpg",
    tag: "LIVE NOW",
  },
  {
    title: "Live Auction - Battles of the Green!",
    date: "Wednesday, March 18",
    time: "6:00 PM EST",
    image: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/251_desktop.jpg",
    tag: "AUCTION",
  },
  {
    title: "Saturday Morning Live - Breakfast at LJN!",
    date: "Saturday, March 21",
    time: "1:00 PM EST",
    image: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/248_desktop.jpg",
    tag: "SPECIAL",
  },
  {
    title: "Crafting the Perfect Piece",
    date: "Monday, March 23",
    time: "5:00 PM EST",
    image: "https://cdn1.ljn.live/LJN_Content/Shopping_Show/tiles/249_desktop.jpg",
    tag: "NEW",
  },
];

const UpcomingShows = ({ onJoinShow }: UpcomingShowsProps) => {
  return (
    <section id="upcoming" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Don't Miss Out</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
            Upcoming <span className="gold-text">Live Shows</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Each show features exclusive deals, live auctions, and pieces you won't find anywhere else.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {shows.map((show, i) => (
            <AnimatedSection key={show.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-48 h-40 sm:h-auto relative overflow-hidden flex-shrink-0">
                    <img
                      src={show.image}
                      alt={show.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold font-body ${
                        show.tag === "LIVE NOW"
                          ? "gold-gradient text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}>
                        {show.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                        {show.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary" />
                          {show.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary" />
                          {show.time}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={onJoinShow}
                      className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all"
                    >
                      Reserve Your Spot <ArrowRight className="w-4 h-4" />
                    </button>
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

export default UpcomingShows;
