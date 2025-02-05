import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/book", label: "Book Now" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-primary">Ink Masters</a>
        </Link>
        
        <div className="flex gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}>
              <a className="relative">
                <span className={cn(
                  "text-sm transition-colors hover:text-primary",
                  location === href ? "text-primary" : "text-muted-foreground"
                )}>
                  {label}
                </span>
                {location === href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-[-4px]"
                  />
                )}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
