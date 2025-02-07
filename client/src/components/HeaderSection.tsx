import { LuMapPinHouse, LuInstagram } from "react-icons/lu";

const IconLink = ({ href, label, Icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className="group"  // mark the anchor as a group
    >
      <Icon
        className="text-3xl text-white"
      />
    </a>
  );
};

export default function HeaderSection() {
  return (
    <header id="header" className="mx-6 py-10" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left column */}
          <div className="flex-1 flex justify-start">
            <div className="md:hidden">
              <IconLink
                href="https://www.instagram.com/tumadrenosodia/"
                label="Follow us on Instagram"
                Icon={LuInstagram}
              />
            </div>
            <div className="hidden md:block">{/* Placeholder if needed */}</div>
          </div>

          {/* Center column: logo */}
          <div className="flex-1 flex justify-center">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-28 h-28 sm:w-48 sm:h-48"
            />
          </div>

          {/* Right column */}
          <div className="flex-1 flex justify-end">
            <div className="md:hidden">
              <IconLink
                href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
                label="Find us on Google Maps"
                Icon={LuMapPinHouse}
              />
            </div>
            <div className="hidden md:flex items-center gap-4">
              <IconLink
                href="https://www.instagram.com/tumadrenosodia/"
                label="Follow us on Instagram"
                Icon={LuInstagram}
              />
              <IconLink
                href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
                label="Find us on Google Maps"
                Icon={LuMapPinHouse}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
