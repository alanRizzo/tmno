import { useMemo } from "react";
import { shuffleArray } from "../shuffle";
import { artists } from "../data";
import ArtistCard from "./ui/ArtistCard";

export default function ArtistSection() {
  const shuffledArtists = useMemo(() => shuffleArray(artists), []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section id="artists" className="mx-6 py-10 sm:bg-background/60 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shuffledArtists.map((artist, index) => (
            <ArtistCard
              key={artist.name}
              artist={artist}
              index={index}
              cardVariants={cardVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
