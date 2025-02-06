import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { artists } from "../data";

export default function ArtistSection() {
  return (
    <section id="artists" className="py-10 bg-background/60">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        ></motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[500px] overflow-hidden rounded-lg"
            >
              <img
                loading="lazy"
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
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
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-0 group-hover:opacity-100"
              >
                <SiInstagram className="text-2xl text-white" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
