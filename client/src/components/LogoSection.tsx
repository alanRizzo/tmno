export default function LogoSection() {
  return (
    <section id="logo" className="py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <a
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="relative w-64 h-64 transition-all duration-300 hover:brightness-150"
          />
        </a>
      </div>
    </section>
  );
}
