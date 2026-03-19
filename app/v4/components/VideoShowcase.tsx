import AnimatedSection from "./AnimatedSection";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

const clips = [
  { src: "/videos/clip1.mp4", title: "Exclusive Diamond Collection" },
  { src: "/videos/clip2.mp4", title: "Behind the Scenes" },
  { src: "/videos/clip3.mp4", title: "Live Show Highlights" },
];

const VideoShowcase = () => {
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playing === index) {
        video.pause();
        setPlaying(null);
      } else {
        // Pause any currently playing
        videoRefs.current.forEach((v, i) => {
          if (v && i !== index) v.pause();
        });
        video.play();
        setPlaying(index);
      }
    }
  };

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">Sneak Peek</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
            A Glimpse of the <span className="gold-text">Magic</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Watch clips from our recent shows and see why thousands tune in every week.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {clips.map((clip, i) => (
            <AnimatedSection key={clip.src} delay={i * 0.15}>
              <div
                className="relative rounded-2xl overflow-hidden glass-card group cursor-pointer aspect-video"
                onClick={() => handlePlay(i)}
              >
                <video
                  ref={(el) => { videoRefs.current[i] = el; }}
                  src={clip.src}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  autoPlay
                  playsInline
                  preload="metadata"
                  onEnded={() => setPlaying(null)}
                />
                {playing !== i && (
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-gold">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <h3 className="font-display font-semibold text-lg">{clip.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
