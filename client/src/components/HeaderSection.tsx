import { LuMapPinHouse, LuInstagram } from "react-icons/lu";

const IconLink = ({ href, label, Icon, align = "center" }) => {
  const alignmentClass =
    align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      aria-label={label}
      className={`flex-1 flex items-center ${alignmentClass} hover:text-red-600`}
    >
      <Icon className="text-3xl text-white" />
    </a>
  );
};

export default function HeaderSection() {
  return (
    <header id="header" className="mx-6 py-10" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <IconLink
            href="https://www.instagram.com/tumadrenosodia/"
            label="Follow us on Instagram"
            Icon={LuInstagram}
            align="left"
          />

          <div className="flex-1 flex justify-center">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-32 h-32 sm:w-48 sm:h-48"
            />
          </div>

          <IconLink
            href="https://maps.app.goo.gl/JMPjuxhZwpQeyPBc8"
            label="Find us on Google Maps"
            Icon={LuMapPinHouse}
            align="right"
          />
        </div>
      </div>
    </header>
  );
}
