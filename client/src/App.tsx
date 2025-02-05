
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtistSection from "@/components/ArtistSection";

function LocationSection() {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Dirección</h2>
        <p className="text-xl text-muted-foreground">
          Libertad 2864 - San Francisco
        </p>
      </div>
    </section>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <img src="/logo.svg" alt="Loading" className="w-32 h-32 animate-fade-in" />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <ArtistSection />
        <LocationSection />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
