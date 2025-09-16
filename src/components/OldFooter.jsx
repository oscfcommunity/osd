import { FOOTER, BRANDING, SITE, SOCIAL_LINKS, CONTACT } from "../config.ts";
import PhoneIcon from "@/assets/icons/phone.svg";
import MailIcon from "@/assets/icons/mail.svg";
import LocationIcon from "@/assets/icons/location.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-green-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img
                  src={BRANDING.logos.main.src}
                  alt="OSW Logo"
                  className="w-12 h-12 mr-3"
                />
                <h3 className="text-3xl font-bold gradient-text">
                  {SITE.shortTitle}
                </h3>
              </div>
              <p className="text-black max-w-md">{FOOTER.description}</p>
            </div>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((media, index) => (
                <a
                  href={media.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 text-black-600"
                  aria-label={media.name}
                >
                  <img
                    src={media.icon.src}
                    alt={media.description}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div class="text-right">
            <h4 className="text-lg font-semibold text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FOOTER.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-black hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              {CONTACT.title}
            </h4>
            <ul className="space-y-2 text-black">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-green-600 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={MailIcon.src}
                      alt={"Mail Icon"}
                      className="w-5 h-5"
                    />
                    {CONTACT.email}
                  </div>
                </a>
              </li>
              {/* Render each phone number as a separate link */}
              {Array.isArray(CONTACT.phone) ? (
                CONTACT.phone.map((phone, idx) => (
                  <li key={idx}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={PhoneIcon.src}
                          alt={"Phone Icon"}
                          className="w-5 h-5"
                        />
                        {phone}
                      </div>
                    </a>
                  </li>
                ))
              ) : (
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={PhoneIcon.src}
                          alt={"Phone Icon"}
                          className="w-5 h-5"
                        />
                        {CONTACT.phone}
                      </div>
                    </div>
                  </a>
                </li>
              )}
              <li className="text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={LocationIcon.src}
                    alt={"Location Icon"}
                    className="w-5 h-5"
                  />
                  <div>
                    {CONTACT.address.venue}
                    <br />
                    {CONTACT.address.city}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm mb-4 md:mb-0">{FOOTER.credits}</p>
          <div className="flex space-x-6 text-sm">
            {FOOTER.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-black hover:text-green-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
