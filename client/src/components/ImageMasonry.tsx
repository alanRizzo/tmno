import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { Gallery } from "@shared/schema";

interface ImageMasonryProps {
  images: Gallery[];
}

export default function ImageMasonry({ images }: ImageMasonryProps) {
  const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 px-4">
        {images.map((image, idx) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "break-inside-avoid mb-4 cursor-pointer",
              "transition-transform hover:scale-[1.02]"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-muted-foreground">Style: {selectedImage.style}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
