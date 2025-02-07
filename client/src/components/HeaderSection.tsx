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
    <header id="header" className="w-full py-10 px-6 md:px-12" role="banner">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between gap-x-4">
          {/* Left column (Icons) */}
          <div className="w-auto max-w-lg flex justify-start">
            <div className="md:hidden">
              <IconLink
                href="https://www.instagram.com/tumadrenosodia/"
                label="Follow us on Instagram"
                Icon={LuInstagram}
              />
            </div>
          </div>

          {/* Center column (Logo) */}
          <div className="flex justify-center flex-1">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-28 h-28 sm:w-40 sm:h-40"
            />
          </div>

          {/* Right column (Icons) */}
          <div className="w-auto max-w-lg flex justify-end">
            <div className="md:hidden">
              <IconLink
                href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
                label="Find us on Google Maps"
                Icon={LuMapPinHouse}
              />
            </div>
            <div className="hidden md:flex flex-col items-center gap-4">
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
