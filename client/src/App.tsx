import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArtistSection from "@/components/ArtistSection";

function LocationSection() {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Ubicación</h2>
        <p className="text-xl text-muted-foreground">
          Libertad 2864 - San Francisco
        </p>
      </div>
    </section>
  );
}

function App() {
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