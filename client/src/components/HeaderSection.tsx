
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <section id="logo" className="py-6">
      <div className="container mx-auto px-4 flex flex-row items-center justify-between md:flex-row">
        <a
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:text-red-600 md:hidden"
        >
          INSTAGRAM
        </a>
        
        <a
          href="/"
          className="flex items-center space-x-3"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 transition-all duration-300 hover:brightness-150 md:w-16 md:h-16"
          />
          <span className="text-lg font-bold hidden md:inline">
            TU MADRE NOS ODIA
          </span>
        </a>

        <a
          href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs hover:text-red-600 md:hidden"
        >
          ¿CÓMO LLEGAR?
        </a>
      </div>
    </section>
  );
}
