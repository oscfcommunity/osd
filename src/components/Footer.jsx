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
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C8.396 0 7.999.01 6.756.048 5.517.087 4.718.222 4.016.42c-.717.2-1.251.444-1.82 1.01C1.624 2 1.38 2.535 1.18 3.252c-.198.7-.333 1.499-.372 2.738C.778 7.235.768 7.632.768 11.253c0 3.62.01 4.017.048 5.26.039 1.24.174 2.039.372 2.738.2.717.444 1.251 1.01 1.82.569.568 1.103.813 1.82 1.013.7.198 1.499.333 2.738.372 1.243.038 1.64.048 5.261.048 3.62 0 4.017-.01 5.26-.048 1.24-.039 2.039-.174 2.738-.372.717-.2 1.251-.444 1.82-1.013.568-.569.813-1.103 1.013-1.82.198-.7.333-1.499.372-2.738.038-1.243.048-1.64.048-5.26 0-3.621-.01-4.018-.048-5.261-.039-1.24-.174-2.039-.372-2.738-.2-.717-.444-1.251-1.013-1.82C18.376.434 17.841.19 17.124-.01c-.7-.198-1.499-.333-2.738-.372C13.144.01 12.747 0 12.017 0zm0 2.16c3.56 0 3.983.013 5.39.052 1.3.06 2.005.274 2.476.458.622.242 1.066.53 1.533.997.466.467.755.91.997 1.532.184.471.398 1.176.458 2.476.039 1.407.052 1.83.052 5.39 0 3.56-.013 3.983-.052 5.39-.06 1.3-.274 2.005-.458 2.476-.242.622-.53 1.066-.997 1.533-.467.466-.91.755-1.532.997-.471.184-1.176.398-2.476.458-1.407.039-1.83.052-5.39.052-3.56 0-3.983-.013-5.39-.052-1.3-.06-2.005-.274-2.476-.458-.622-.242-1.066-.53-1.533-.997-.466-.467-.755-.91-.997-1.532-.184-.471-.398-1.176-.458-2.476-.039-1.407-.052-1.83-.052-5.39 0-3.56.013-3.983.052-5.39.06-1.3.274-2.005.458-2.476.242-.622.53-1.066.997-1.533.467-.466.91-.755 1.532-.997.471-.184 1.176-.398 2.476-.458 1.407-.039 1.83-.052 5.39-.052z" />
                  <path d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
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
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
