import { motion } from "framer-motion";
import { LuInstagram } from "react-icons/lu";

export default function ArtistCard({ artist, index, cardVariants }) {
  return (
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/0" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white">
        {/* Name at the top-right */}
        <h3 className="absolute top-6 right-6 text-3xl font-bold text-right">
          {artist.name.toUpperCase()}
        </h3>

        {/* Bio centered in the middle */}
        <p className="text-lg text-center max-w-[80%]">{artist.bio}</p>

        {/* Styles at the bottom */}
        <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 text-left">
          {artist.styles.map((style) => (
            <span
              key={style}
              className="text-xs px-2 py-1 bg-white/10 text-white rounded-sm"
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
        aria-label={`Visit ${artist.name}'s Instagram`}
        className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 transition opacity-0 group-hover:opacity-100"
      >
        <LuInstagram className="text-2xl text-white" />
      </a>
    </motion.div>
  );
}