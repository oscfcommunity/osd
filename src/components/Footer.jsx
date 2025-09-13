import { FOOTER, BRANDING, SITE, SOCIAL_LINKS, CONTACT } from "../config.ts";

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
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 text-black-600"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 text-black-600"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 text-black-600"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 text-black-600"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200 text-black-600"
                aria-label="Medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">
              {FOOTER.quickLinks.title}
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
          </div>

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
                  {CONTACT.email}
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
                      {phone}
                    </a>
                  </li>
                ))
              ) : (
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
              )}
              <li className="text-sm">
                {CONTACT.address.venue}
                <br />
                {CONTACT.address.city}
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
