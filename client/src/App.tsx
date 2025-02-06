import { useEffect, useState } from "react";
import ArtistSection from "@/components/ArtistSection";
import LocationSection from "@/components/LocationSection";
import LogoSection from "@/components/LogoSection";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glowing Pulse Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-white rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Rotating Image */}
          <img
            src="/logo.png"
            alt="Loading"
            className="relative w-64 h-64 animate-spin-slow"
          />
        </div>
      </div>
    );
  }

  return (
    <main>
      <LogoSection />
      <ArtistSection />
      <LocationSection />
    </main>
  );
}

export default App;
