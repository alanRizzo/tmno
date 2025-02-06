import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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

export default function ArtistSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [speed, setSpeed] = useState(0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => (prev < 3 ? prev + 0.1 : prev));
      if (scrollRef.current && hovered === null) {
        scrollRef.current.scrollTop += speed;
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [hovered, speed]);

  return (
    <section
      id="artists"
      className={`py-20 bg-background/30 backdrop-blur-sm overflow-hidden h-screen ${
        hovered !== null ? "grayscale" : ""
      }`}
      ref={scrollRef}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Artists
        </motion.h2>

        <div className="flex flex-col space-y-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ scale: 1 }}
              animate={{ scale: hovered === index ? 1.1 : 1 }}
              className="relative group overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-64 h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <SiInstagram className="text-5xl text-white" />
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
