import { useQuery } from "@tanstack/react-query";
import ImageMasonry from "@/components/ImageMasonry";
import { motion } from "framer-motion";
import type { Gallery } from "@shared/schema";

export default function GalleryPage() {
  const { data: images, isLoading } = useQuery<Gallery[]>({
    queryKey: ["/api/gallery"],
  });

  return (
    <div className="min-h-screen pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Work</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto px-4">
          Explore our portfolio of custom tattoos, each piece telling its own unique story.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-lg bg-card/50 animate-pulse"
              />
            ))}
          </div>
        </div>
      ) : (
        <ImageMasonry images={images || []} />
      )}
    </div>
  );
}
