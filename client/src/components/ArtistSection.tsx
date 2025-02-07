import { useMemo } from "react";
import { motion } from "framer-motion";
import { LuInstagram } from "react-icons/lu";
import { artists } from "../data";
import { shuffleArray } from "../shuffle";

export default function ArtistSection() {
  // Memoize shuffled artists to prevent re-shuffling on each render
  const shuffledArtists = useMemo(() => shuffleArray(artists), []);

  // Motion variants for the artist card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="artists" className="mx-6 py-10 sm:bg-background/60 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shuffledArtists.map((artist, index) => (
            <motion.div
              key={artist.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative group h-[500px] overflow-hidden rounded-lg shadow-2xl"
            >
              <motion.img
                loading="lazy"
                src={artist.image}
                alt={`Artist ${artist.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
              {/* Artist info overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {artist.name.toUpperCase()}
                </h3>
                <p className="text-gray-200 mb-3">{artist.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {artist.styles.map((style) => (
                    <span
                      key={style}
                      className="text-xs px-2 py-1 bg-white/10 text-white rounded-sm backdrop-blur-sm hover:text-red-500 transition-colors duration-300"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
              {/* Instagram link */}
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${artist.name}'s Instagram`}
                className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-0 group-hover:opacity-100"
              >
                <LuInstagram className="text-2xl text-white" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
