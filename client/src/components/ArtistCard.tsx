import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import type { Artist } from "@shared/schema";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden bg-card hover:bg-card/90 transition-colors">
        <CardHeader className="p-0">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-64 object-cover"
          />
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">{artist.name}</h3>
          <p className="text-muted-foreground">{artist.bio}</p>
          <div className="flex flex-wrap gap-2">
            {artist.specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
