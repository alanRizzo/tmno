export default function HeaderSection() {
  return (
    <section id="logo" className="mx-6 py-10">
      <div className="container mx-auto px-4">
        {/* Desktop Header - Visible on screens larger than sm */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a
              href="https://www.instagram.com/tumadrenosodia/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3"
            >
              <img src="/logo.png" alt="logo" className="w-16 h-16" />
              <span className="text-2xl">TU MADRE NOS ODIA</span>
            </a>
          </div>

          {/* Links for Instagram and location */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/tumadrenosodia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-red-600"
            >
              INSTAGRAM
            </a>
            <a
              href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-red-600"
            >
              DIRECCIÓN
            </a>
          </div>
        </div>

        {/* Mobile Header - Visible on screens smaller than sm */}
        <div className="sm:hidden flex items-center justify-between">
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/tumadrenosodia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-600 flex-1 text-left"
          >
            INSTAGRAM
          </a>

          {/* Logo - Centered */}
          <div className="flex items-center justify-center flex-1">
            <img
              src="/logo.png"
              alt="logo"
              className="w-20 h-20 transition-all duration-300"
            />
          </div>

          {/* Location link */}
          <a
            href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-600 flex-1 text-right"
          >
            DIRECCIÓN
          </a>
        </div>
      </div>
    </section>
  );
}
