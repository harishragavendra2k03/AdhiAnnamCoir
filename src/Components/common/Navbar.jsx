import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Trade Shows', to: '/tradeShows' },
  { label: 'Blog' ,to:'/blog'},
  { label: 'Contact', to: '/contact' },
]

const products = [
  { label: 'Coir Packaging', to: '/products/coir-packaging' },
  { label: 'Coir Filtration', to: '/products/coir-filtration' },
  { label: 'Coir Interior Panels', to: '/products/coir-interior-panels' },
  { label: 'Coir Scrubbers', to: '/products/coir-scrubbers' },
  { label: 'Coir Horticulture', to: '/products/coir-horticulture' },
  { label: 'Coir Rolls & Sheets', to: '/products/coir-rolls-and-sheets' },
  { label: 'Coir Erosion Control', to: '/products/coir-erosion-control' },
  { label: 'Coir Mattresses', to: '/products/coir-mattresses' },
  { label: 'Coir Corporate Gifts', to: '/products/coir-corporate-gifts' },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [hasLogoError, setHasLogoError] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  const closeMenus = () => {
    setIsMobileMenuOpen(false)
    setIsProductsOpen(false)
  }

  const isSolid = isScrolled || isMobileMenuOpen || pathname !== '/'
  const textColor =
    isSolid ? 'text-[#183D2C]' : 'text-white'
  const linkHoverColor =
    isSolid
      ? 'hover:text-[#52764B]'
      : 'hover:text-[#EDE8DA]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ease-in-out ${
        isSolid
          ? 'border-[#183D2C]/10 bg-[#EDE8DA]/95 shadow-[0_8px_24px_rgba(24,61,44,0.12)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        style={{ fontFamily: 'Inter, sans-serif' }}
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10 ${
          isScrolled ? 'min-h-16 py-2' : 'min-h-20 py-3'
        }`}
      >
        <Link
          to="/"
          onClick={closeMenus}
          aria-label="Adhi Annam Coir Comforts home"
          className={`flex shrink-0 items-center rounded-md bg-white/90 px-2 shadow-sm transition-all duration-300 ${
            isScrolled ? 'h-10' : 'h-12'
          }`}
        >
          {hasLogoError ? (
            <span
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className={`text-xl font-semibold tracking-[0.1em] ${textColor}`}
            >
              ADHI ANNAM
            </span>
          ) : (
            <img
              src="/New%20Logo%20updated%20design%20(23_01_2025).avif"
              alt="Adhi Annam Coir Comforts"
              onError={() => setHasLogoError(true)}
              className="h-full w-44 object-contain object-left"
            />
          )}
        </Link>

        <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navigationLinks.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${textColor} ${linkHoverColor}`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isProductsOpen}
              aria-controls="desktop-products-menu"
              onClick={() => setIsProductsOpen((isOpen) => !isOpen)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setIsProductsOpen(false)
              }}
              className={`flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors duration-200 ${textColor} ${linkHoverColor}`}
            >
              Products
              <ChevronDown
                size={15}
                aria-hidden="true"
                className={`transition-transform duration-200 ${
                  isProductsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isProductsOpen && (
              <div
                id="desktop-products-menu"
                className="absolute left-1/2 top-full z-50 grid w-[34rem] -translate-x-1/2 grid-cols-2 gap-1 rounded-xl border border-[#183D2C]/10 bg-white p-3 shadow-xl"
              >
                {products.map((product) => (
                  <Link
                    key={product.label}
                    to={product.to}
                    onClick={() => setIsProductsOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-[#183D2C] transition-colors duration-150 hover:bg-[#EDE8DA] hover:text-[#52764B]"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navigationLinks.slice(2).map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${textColor} ${linkHoverColor}`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
              isSolid
                ? 'bg-[#183D2C] text-white hover:bg-[#52764B]'
                : 'bg-[#C5A16A] text-[#183D2C] hover:bg-[#EDE8DA]'
            }`}
          >
            Get a Quote
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          className={`rounded-md p-2 transition-colors xl:hidden ${
            isSolid
              ? 'text-[#183D2C] hover:bg-[#183D2C]/10'
              : 'text-white hover:bg-white/10'
          }`}
        >
          {isMobileMenuOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <Menu size={25} aria-hidden="true" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#183D2C]/10 bg-[#EDE8DA] px-5 pb-6 pt-3 shadow-lg xl:hidden sm:px-8"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigationLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenus}
                className="border-b border-[#183D2C]/10 py-3.5 text-sm font-medium text-[#183D2C] transition-colors hover:text-[#52764B]"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-b border-[#183D2C]/10">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isProductsOpen}
                aria-controls="mobile-products-menu"
                onClick={() => setIsProductsOpen((isOpen) => !isOpen)}
                className="flex w-full items-center justify-between py-3.5 text-left text-sm font-medium text-[#183D2C] transition-colors hover:text-[#52764B]"
              >
                Products
                <ChevronDown
                  size={17}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${
                    isProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div id="mobile-products-menu" className="grid grid-cols-2 pb-3 pl-2">
                  {products.map((product) => (
                    <Link
                      key={product.label}
                      to={product.to}
                      onClick={closeMenus}
                      className="py-2 pr-2 text-sm text-[#52764B] transition-colors hover:text-[#183D2C]"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigationLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenus}
                className="border-b border-[#183D2C]/10 py-3.5 text-sm font-medium text-[#183D2C] transition-colors hover:text-[#52764B]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#183D2C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#52764B]"
            >
              Get a Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
