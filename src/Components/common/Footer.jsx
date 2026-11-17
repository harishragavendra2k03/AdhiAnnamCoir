import { Globe2, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'TradeShows', to:'/TradeShows'},
  { label: 'Blog', to:'/blog'},
  { label: 'Contact', to: '/contact' },
]

const productLinks = [
  { label: 'Coir Packaging', to: '/products/coir-packaging' },
  { label: 'Coir Filtration', to: '/products/coir-filtration' },
  { label: 'Coir Interior Panels', to: '/products/coir-interior-panels' },
  { label: 'Coir Horticulture', to: '/products/coir-horticulture' },
  { label: 'Coir Mattresses', to: '/products/coir-mattresses' },
  { label: 'Coir Erosion Control', to: '/products/coir-erosion-control' },
]

// WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12.04 2C6.58 2 2.14 6.43 2.14 11.89c0 1.75.46 3.45 1.34 4.95L2.05 22l5.3-1.39c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.43 9.9-9.89C22 6.47 17.5 2 12.04 2zm5.77 14.14c-.24.68-1.39 1.3-1.92 1.39-.5.08-1.13.12-1.83-.1-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.18-4.94-4.37-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.42.26-.29.57-.37.76-.37h.55c.17 0 .41-.06.64.49.24.57.83 2 .9 2.14.07.15.12.32.02.51-.1.2-.15.32-.29.49-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.76 1.26 1.63 2.05 1.12.99 2.05 1.3 2.34 1.45.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.3.39-.25.66-.15.27.1 1.7.8 1.99.94.29.15.49.22.56.34.07.13.07.71-.17 1.38z" />
  </svg>
)

const brandActionLinks = [
  {
    label: 'Official Website',
    href: 'https://www.adhiannamcoir.com',
    Icon: Globe2,
    isExternal: true,
  },
  {
    label: 'Email',
    href: 'mailto:hello@adhiannamcoir.com',
    Icon: Mail,
    isExternal: false,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919566294433?text=Hello%20Adhi%20Annam%20Coir%20Comforts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.',
    Icon: WhatsAppIcon,
    isExternal: true,
  },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-[#183D2C] text-[#EDE8DA]"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          <section aria-labelledby="footer-company">
            <h2 id="footer-company" className="sr-only">
              Company
            </h2>
            <Link
              to="/"
              aria-label="Adhi Annam Coir Comforts home"
              className="inline-flex rounded-lg bg-[#EDE8DA] px-3 py-2 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <img
                src="/New%20Logo%20updated%20design%20(23_01_2025).avif"
                alt="Adhi Annam Coir Comforts Pvt. Ltd."
                className="h-12 w-48 object-contain object-left"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#EDE8DA]/75">
              Natural-fibre coir solutions crafted with care for comfort,
              industry, and a more sustainable future.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {brandActionLinks.map(({ label, href, Icon, isExternal }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#EDE8DA]/20 text-[#EDE8DA]/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C5A16A] hover:bg-[#C5A16A] hover:text-[#183D2C]"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>

          <section aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#EDE8DA]/75 transition-colors duration-200 hover:text-[#C5A16A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-product-categories">
            <h2
              id="footer-product-categories"
              className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Product Categories
            </h2>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#EDE8DA]/75 transition-colors duration-200 hover:text-[#C5A16A]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-white"
            >
              Contact
            </h2>
            <ul className="space-y-5 text-sm leading-6 text-[#EDE8DA]/75">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#C5A16A]"
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Adhi+Annam+Coir+Comforts+Pvt+Ltd+2%2F154-1+Unjavelampatti+Udumalai+Road+Pollachi+Coimbatore+642003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[#C5A16A]"
                >
                  Adhi Annam Coir Comforts Pvt Ltd.​, 2/154-1, Unjavelampatti Udumalai Road, Pollachi, Coimbatore - 642003
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#C5A16A]"
                />
                <a
                  href="mailto:hello@adhiannamcoir.com"
                  className="transition-colors duration-200 hover:text-[#C5A16A]"
                >
                  hello@adhiannamcoir.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[#C5A16A]"
                />
                <a
                  href="tel:+919566294433"
                  className="transition-colors duration-200 hover:text-[#C5A16A]"
                >
                  +91 95662 94433
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#EDE8DA]/15 pt-6 text-xs text-[#EDE8DA]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} Adhi Annam Coir Comforts Pvt. Ltd. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-200 hover:text-[#C5A16A]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="transition-colors duration-200 hover:text-[#C5A16A]"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
