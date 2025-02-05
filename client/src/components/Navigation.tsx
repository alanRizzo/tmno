import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";

export default function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/logo.jpg" 
            alt="Tu Madre Nos Odia" 
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold text-primary">Tu Madre Nos Odia</span>
        </a>

        <div className="flex gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'artists', label: 'Artists' },
            { id: 'location', label: 'Location' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="relative text-sm transition-colors hover:text-primary text-muted-foreground"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}