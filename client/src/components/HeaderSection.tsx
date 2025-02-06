
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <section id="logo" className="py-6">
      <div className="container mx-auto px-4 flex flex-row items-center justify-between">
        <a
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm hover:text-red-600 order-1 sm:order-1"
        >
          INSTAGRAM
        </a>
        
        <a
          href="/"
          className="flex items-center space-x-3 order-2 sm:order-2"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-16 h-16 sm:w-12 sm:h-12 transition-all duration-300 hover:brightness-150"
          />
          <span className="text-lg font-bold hidden sm:inline">
            TU MADRE NOS ODIA
          </span>
        </a>

        <a
          href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm hover:text-red-600 order-3 sm:order-3"
        >
          ¿CÓMO LLEGAR?
        </a>
      </div>
    </section>
  );
}
