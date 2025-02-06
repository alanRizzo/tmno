import { useEffect, useState } from "react";
import ArtistSection from "@/components/ArtistSection";
import LocationSection from "@/components/LocationSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <img
          src="/logo.svg"
          alt="Loading"
          className="w-32 h-32 animate-fade-in"
        />
      </div>
    );
  }

  return (
    <main>
      <ArtistSection />
      <LocationSection />
    </main>
  );
}

export default App;
