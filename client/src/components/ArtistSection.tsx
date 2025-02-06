
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram } from "react-icons/si";

interface Artist {
  name: string;
  instagram: string;
  image: string;
  styles: string[];
  bio: string;
}

const artists: Artist[] = [
  {
    name: "Huevo",
    instagram: "https://www.instagram.com/huevo.tmno",
    image: "https://placehold.co/400x500",
    styles: ["Traditional", "Neo-Traditional"],
    bio: "Especializado en diseños tradicionales con un toque moderno.",
  },
  {
    name: "Emi",
    instagram: "https://www.instagram.com/emi_tatuero",
    image: "https://placehold.co/400x500",
    styles: ["Blackwork", "Dotwork"],
    bio: "Creando patrones intrincados y diseños en blackwork.",
  },
  {
    name: "Pity",
    instagram: "https://www.instagram.com/pitylocuras",
    image: "https://placehold.co/400x500",
    styles: ["Japanese", "Color"],
    bio: "Maestro del color y arte inspirado en el estilo japonés.",
  },
  {
    name: "Dalma",
    instagram: "https://www.instagram.com/d.almatattoo",
    image: "https://placehold.co/400x500",
    styles: ["Fine Line", "Minimalist"],
    bio: "Especializada en diseños delicados y minimalistas.",
  },
];

const ArtistCard = ({ artist, isHovered, onHover }: {
  artist: Artist;
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative group overflow-hidden cursor-pointer"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a
        href={artist.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
      >
        <motion.img
          src={artist.image}
          alt={artist.name}
          className="w-64 h-64 object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <SiInstagram className="text-5xl text-white" />
        </motion.div>
      </a>

      <div className="mt-4 space-y-2">
        <h3 className="text-xl font-bold">{artist.name}</h3>
        <p className="text-muted-foreground">{artist.bio}</p>
        <div className="flex flex-wrap gap-2">
          {artist.styles.map((style) => (
            <span
              key={style}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-sm"
            >
              {style}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ArtistSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    if (!autoScroll) return;
    
    setScrollPosition((prev) => {
      const newPosition = prev + 1;
      return newPosition > window.innerHeight ? 0 : newPosition;
    });
  }, [autoScroll]);

  useEffect(() => {
    const interval = setInterval(handleScroll, 50);
    return () => clearInterval(interval);
  }, [handleScroll]);

  return (
    <section
      id="artists"
      className="py-20 bg-background/30 backdrop-blur-sm overflow-hidden h-screen"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
      style={{ transform: `translateY(-${scrollPosition}px)` }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Artists
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {artists.map((artist, index) => (
              <ArtistCard
                key={artist.name}
                artist={artist}
                isHovered={hoveredId === index}
                onHover={(isHovered) => setHoveredId(isHovered ? index : null)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
