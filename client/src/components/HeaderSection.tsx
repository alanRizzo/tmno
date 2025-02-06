import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <section id="logo" className="py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-12 h-12 transition-all duration-300 hover:brightness-150"
          />
          <span className="text-lg font-bold">TU MADRE NOS ODIA</span>
        </a>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/tumadrenosodia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-red-600"
          >
            INSTAGRAM
          </a>
          <a
            href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-red-600"
          >
            ¿CÓMO LLEGAR?
          </a>
        </div>
      </div>
    </section>
  );
}
