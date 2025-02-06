
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
  const duplicatedArtists = [...artists, ...artists]; // Duplicate for seamless loop

  return (
    <section id="artists" className="py-20 bg-background/30 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        ></motion.h2>

        <div className="relative">
          <div className="flex gap-8 animate-carousel hover:pause">
            {duplicatedArtists.map((artist, index) => (
              <motion.div
                key={`${artist.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group min-w-[300px] transition-all duration-300 hover:scale-110 hover:z-10"
              >
                <a
                  href={artist.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
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
      </div>
    </section>
  );
}
