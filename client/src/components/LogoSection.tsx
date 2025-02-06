export default function logoSection() {
  return (
    <section id="logo" className="py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <a
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo.png" alt="logo" className="relative w-64 h-64" />
        </a>
      </div>
    </section>
  );
}
