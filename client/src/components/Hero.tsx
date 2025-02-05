import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Hero() {
  const [, navigate] = useLocation();

  return (
    <div className="relative min-h-screen flex items-stretch overflow-hidden bg-black">
      {/* Vertical text on the left */}
      <motion.div 
        className="absolute left-8 top-0 bottom-0 flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="transform -rotate-90 origin-center whitespace-nowrap">
          <span className="text-primary/50 font-mono tracking-widest text-xl">
            EST. 2024 • INK MASTERS • CUSTOM DESIGNS
          </span>
        </div>
      </motion.div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top section with dramatic heading */}
        <motion.div 
          className="flex-1 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="max-w-4xl space-y-8 text-right">
            <motion.h1 
              className="text-[8vw] font-black leading-none"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block text-primary">BREAK</span>
              <span className="block text-primary/80">THE</span>
              <span className="block bg-gradient-to-r from-primary to-primary/20 bg-clip-text text-transparent">
                ORDINARY
              </span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Bottom section with description and CTA */}
        <motion.div 
          className="p-8 md:p-16 bg-background/5 backdrop-blur-sm"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Where rebellion meets skin. Our artists don't just create tattoos—they 
              forge permanent statements of defiance.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate("/book")}
              className="bg-primary/20 hover:bg-primary/30 border border-primary text-primary hover:text-primary"
            >
              Break Free
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(var(--primary),0.15),transparent_70%)]" />
      </motion.div>
    </div>
  );
}