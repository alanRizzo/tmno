import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;
      const isAtBottom = 
        window.innerHeight + currentScrollPos >= document.documentElement.scrollHeight;

      // Show navigation only when scrolling up or at the top, never at the bottom
      setIsVisible((isScrollingUp || isAtTop) && !isAtBottom);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-[100]"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-16 backdrop-blur-sm bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-4 h-full flex items-center justify-end">
          <div className="flex gap-8">
            {[
              { id: 'home', label: 'Inicio' },
              { id: 'artists', label: 'Artistas' },
              { id: 'location', label: 'Ubicación' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm transition-colors hover:text-primary text-muted-foreground"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}