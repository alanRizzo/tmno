import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Hero() {
  const [, navigate] = useLocation();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1445510861639-5651173bc5d5')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.2)"
        }}
      />

      <motion.div 
        className="relative z-10 text-center space-y-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Transform Your Vision Into Art
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Where creativity meets skin. Our award-winning artists bring your ideas to life 
          with precision and passion.
        </p>
        <Button 
          size="lg"
          onClick={() => navigate("/book")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Book Your Session
        </Button>
      </motion.div>
    </div>
  );
}