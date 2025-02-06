export default function LocationSection() {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <a
          href="https://www.instagram.com/tumadrenosodia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo.png" alt="Loading" className="relative w-24 h-24" />
        </a>
        <a
          href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xl text-muted-foreground mt-4">Libertad 2864</p>
          <p className="text-xl text-muted-foreground">San Francisco</p>
        </a>
      </div>
    </section>
  );
}
