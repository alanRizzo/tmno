import { useQuery } from "@tanstack/react-query";
import Hero from "@/components/Hero";
import ArtistCard from "@/components/ArtistCard";
import { motion } from "framer-motion";
import type { Artist } from "@shared/schema";

export default function Home() {
  const { data: artists, isLoading } = useQuery<Artist[]>({
    queryKey: ["/api/artists"],
  });

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-20 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Artists</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our talented team of artists, each bringing their unique style and expertise
            to create stunning, personalized tattoos.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-96 rounded-lg bg-card/50 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists?.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
