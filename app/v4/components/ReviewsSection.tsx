import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    review: "Absolutely blown away by the quality! Got a stunning diamond pendant for half the retail price. The live show experience is addicting!",
  },
  {
    name: "David Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    review: "Bought my wife's engagement ring through LJN. The hosts are knowledgeable and the auction format makes it so exciting. Saved over $3,000!",
  },
  {
    name: "Amanda Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    review: "I've been watching for 6 months now and have built an incredible collection. The $200 welcome credit was a great start. Highly recommend!",
  },
  {
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    rating: 4,
    review: "The flash deals during live shows are unreal. I got an emerald bracelet that appraised for 3x what I paid. Can't stop tuning in!",
  },
  {
    name: "Jessica Park",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    review: "Referred my sister and we both got $200 credits! The whole experience feels like a luxury event. Love the VIP early access perks.",
  },
  {
    name: "Robert Williams",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
    rating: 5,
    review: "Best kept secret in jewelry shopping. The hosts make it fun, the prices are unbeatable, and the pieces arrive beautifully packaged.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
            What Our <span className="gold-text">Buyers Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Join thousands of happy customers who discovered their dream jewelry through our live shows.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-primary/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-sm">{review.name}</h4>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-3.5 h-3.5 ${si < review.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{review.review}"</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
