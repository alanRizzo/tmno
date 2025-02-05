import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useRef } from "react";

export default function Hero() {
  const [, navigate] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse follow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  // Spring animations for smooth movement
  const springConfig = { damping: 15, stiffness: 150 };
  const scaleX = useSpring(1, springConfig);
  const scaleY = useSpring(1, springConfig);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove} 
      className="relative min-h-screen flex items-stretch overflow-hidden bg-black"
    >
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
          style={{
            rotateX,
            rotateY,
            perspective: 1000,
          }}
        >
          <div className="max-w-4xl space-y-8 text-right">
            <motion.h1 
              className="relative text-[8vw] font-black leading-none"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block text-primary relative">
                BREAK
                <span className="absolute inset-0 text-primary/80 animate-[glitch_3s_infinite]">BREAK</span>
              </span>
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
              className="bg-primary/20 hover:bg-primary/30 border border-primary text-primary hover:text-primary relative group overflow-hidden"
            >
              <span className="relative z-10">Break Free</span>
              <motion.div 
                className="absolute inset-0 bg-primary/10"
                initial={false}
                whileHover={{ scale: 1.5, rotate: 12 }}
                transition={{ duration: 0.4 }}
              />
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
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[2px] animate-[scanline_4s_linear_infinite]" />
        {/* Noise effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] animate-[noise_8s_steps(10,end)_infinite]" />
      </motion.div>
    </div>
  );
}