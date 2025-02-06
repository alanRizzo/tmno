
import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { artists } from "../data";
import { useRef } from "react";

export default function ArtistSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Create a duplicate array for infinite scroll effect
  const duplicatedArtists = [...artists, ...artists];

  return (
    <section id="artists" className="py-20 bg-background/30 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        ></motion.h2>

        <motion.div
          ref={carouselRef}
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ right: 0, left: -2000 }}
          initial={{ x: 0 }}
          animate={{
            x: [-2000, 0],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            },
          }}
          whileHover={{ scale: 0.98 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {duplicatedArtists.map((artist, index) => (
            <motion.div
              key={`${artist.name}-${index}`}
              className="relative group h-[500px] min-w-[300px] overflow-hidden rounded-lg flex-shrink-0"
            >
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block absolute inset-0"
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <SiInstagram className="text-5xl text-white" />
                </div>
              </a>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                <p className="text-gray-200 mb-3">{artist.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {artist.styles.map((style) => (
                    <span
                      key={style}
                      className="text-xs px-2 py-1 bg-white/10 text-white rounded-sm backdrop-blur-sm"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
