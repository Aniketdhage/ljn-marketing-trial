import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-primary" />
        <span className="font-display text-xl font-bold gold-text">Luxury Jewelry Network</span>
        <Sparkles className="w-5 h-5 text-primary" />
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Where entertainment meets stunning jewelry. Live shows, exclusive deals, and pieces you'll love forever.
      </p>
      <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
        <a href="#upcoming" className="hover:text-primary transition-colors">Shows</a>
        <a href="#" className="hover:text-primary transition-colors">Diamond Club</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
      </div>
      <p className="text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Luxury Jewelry Network. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
