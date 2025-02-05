import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect, useRef } from "react";

export default function Hero() {
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
            EST. 2024 • DISEÑOS PERSONALIZADOS • ARTE ÚNICO
          </span>
        </div>
      </motion.div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top section with logo */}
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
          <div className="max-w-4xl space-y-8 text-center">
            <motion.a
              href="https://www.instagram.com/tumadrenosodia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/logo.jpg" 
                alt="Tu Madre Nos Odia"
                className="w-64 h-64 object-contain relative"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255,0,0,0.3))",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom section with quote */}
        <motion.div 
          className="p-8 md:p-16 bg-background/5 backdrop-blur-sm"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto gothic-quote">
              El arte en la piel no es solo tinta, es la expresión rebelde del alma que busca libertad en cada trazo
            </p>
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