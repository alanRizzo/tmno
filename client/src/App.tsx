
import { useEffect, useState } from "react";
import ArtistSection from "@/components/ArtistSection";
import HeaderSection from "@/components/HeaderSection";

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p>Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

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
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 bg-white rounded-full animate-ping opacity-20"></div>
          </div>
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
    <ErrorBoundary>
      <main>
        <HeaderSection />
        <ArtistSection />
      </main>
    </ErrorBoundary>
  );
}

export default App;
