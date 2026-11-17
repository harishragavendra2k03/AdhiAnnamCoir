import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Cpu,
  Factory,
  Globe2,
  HardHat,
  HeartHandshake,
  Layers,
  Leaf,
  MessageCircle,
  Package,
  PhoneCall,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
  Building2,
  ShoppingBag,
} from 'lucide-react'
import ProductHero from '../Components/products/ProductHero'
import { getAllCategories, CATEGORY_IMAGES } from '../data/productsData'

export default function Products() {
  const prefersReducedMotion = useReducedMotion()
  const categories = getAllCategories()

  const breadcrumbItems = [{ label: 'Products' }]

  const whyChooseFeatures = [
    {
      title: 'Eco-Friendly Materials',
      description:
        '100% biodegradable and sustainably harvested coconut coir from South India’s lush Pollachi plantations, ensuring zero microplastics and minimal carbon footprint.',
      icon: Leaf,
    },
    {
      title: 'Innovative Product Solutions',
      description:
        'Pioneering engineered replacements for synthetic foams, non-woven plastics, and fiberglass with bio-based natural fiber technologies.',
      icon: Cpu,
    },
    {
      title: 'Quality-Focused Manufacturing',
      description:
        'Operating under audited ISO 9001:2015 and ISO 14001:2015 standards with advanced needlefelt lines, steam vulcanizing, and precision testing.',
      icon: ShieldCheck,
    },
    {
      title: 'Customization for Different Industries',
      description:
        'Tailored dimensions, custom densities, bespoke CAD molding, private labeling, and flexible palletized container export logistics.',
      icon: Factory,
    },
  ]

  const industriesWeServe = [
    {
      name: 'Agriculture and Horticulture',
      description: 'Peat-free nursery pots, weed mats, coco poles, and hydroponic substrates.',
      icon: Sprout,
      highlight: 'Root Aeration & Moisture Retention',
    },
    {
      name: 'Packaging and Logistics',
      description: 'ISPM-15 exempt protective cushioning, void fillers, and molded pallets.',
      icon: Package,
      highlight: 'Zero Quarantine Customs Delays',
    },
    {
      name: 'Construction and Interiors',
      description: 'Acoustic wall paneling, ceiling insulation, and under-roof thermal barriers.',
      icon: Building2,
      highlight: 'High Sound Absorption & VOC-Free',
    },
    {
      name: 'Hospitality and Healthcare',
      description: 'Ergonomic orthopedic mattresses, medical covers, and eco bath amenities.',
      icon: HeartHandshake,
      highlight: 'Hypoallergenic & Cool Sleeping',
    },
    {
      name: 'Industrial Filtration',
      description: 'Wastewater trickling filter media and paint booth air filtration pads.',
      icon: Layers,
      highlight: 'High Biofilm Surface Area',
    },
    {
      name: 'Corporate and Retail',
      description: 'Handcrafted sustainable desk organizers, laptop risers, and trophies.',
      icon: ShoppingBag,
      highlight: 'Tangible ESG Brand Impact',
    },
  ]

  return (
    <main className="overflow-hidden bg-[#FFFFFF] text-[#252A25] font-['Inter',sans-serif]">
      {/* ====================================================================
          SECTION 1 – HERO BANNER
          ==================================================================== */}
      <ProductHero
        badge="NATURAL FIBRE • GLOBAL QUALITY"
        title="Sustainable Coir Products for a Better Tomorrow"
        description="Discover innovative, eco-friendly coconut coir solutions designed for homes, industries, agriculture and a greener planet."
        breadcrumbItems={breadcrumbItems}
        heroImage={CATEGORY_IMAGES.heroMain}
        primaryCtaText="Explore Our Products"
        primaryCtaHref="#product-categories"
        secondaryCtaText="Contact Sales Team"
        secondaryCtaHref="/contact"
      />

      {/* ====================================================================
          SECTION 2 – INTRODUCTION
          ==================================================================== */}
      <section className="relative py-16 sm:py-24 bg-[#EDE8DA]/30 border-b border-[#DDE7D8]/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#DDE7D8] px-4 py-1.5 text-xs font-semibold text-[#183D2C]">
              <Sparkles size={14} className="text-[#52764B]" />
              <span>Responsible Manufacturing from Pollachi, India</span>
            </div>

            <h2
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-4 text-3xl leading-tight text-[#183D2C] sm:text-4xl lg:text-5xl"
            >
              Nature-Inspired Products. Sustainable Solutions.
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#555B50]">
              At ADHI, we transform natural coconut fibres into innovative, sustainable products that
              serve multiple industries. Our extensive product range combines natural materials, practical
              functionality and responsible manufacturing.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#DDE7D8] pt-8 sm:grid-cols-4">
              <div>
                <p className="font-serif text-3xl text-[#183D2C] font-normal">9+</p>
                <p className="text-xs font-medium text-[#52764B] uppercase tracking-wider mt-1">
                  Product Categories
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#183D2C] font-normal">45+</p>
                <p className="text-xs font-medium text-[#52764B] uppercase tracking-wider mt-1">
                  Engineered Products
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#183D2C] font-normal">100%</p>
                <p className="text-xs font-medium text-[#52764B] uppercase tracking-wider mt-1">
                  Biodegradable Fiber
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#183D2C] font-normal">ISPM-15</p>
                <p className="text-xs font-medium text-[#52764B] uppercase tracking-wider mt-1">
                  Exempt Export Crating
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 3 – PRODUCT CATEGORIES (RESPONSIVE GRID OF 9 CATEGORIES)
          ==================================================================== */}
      <section id="product-categories" className="scroll-mt-24 py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-[#DDE7D8] pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A16A]">
                Comprehensive Portfolio
              </span>
              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-1 text-3xl text-[#183D2C] sm:text-4xl"
              >
                Our Product Categories
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555B50] max-w-md">
              Select a category below to explore technical specifications, product options, and request volume pricing.
            </p>
          </div>

          {/* 9 Category Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between rounded-3xl border border-[#DDE7D8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#183D2C]/40 hover:shadow-xl"
              >
                <div>
                  {/* Category Image with Zoom on Hover */}
                  <Link
                    to={cat.route}
                    aria-label={`Explore ${cat.name}`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-[#EDE8DA]/50"
                  >
                    <img
                      src={cat.heroImage}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src =
                          'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    {/* Badge */}
                    <span className="absolute top-3 left-3 rounded-full bg-[#183D2C]/85 px-3 py-1 text-[11px] font-semibold text-[#C5A16A] backdrop-blur-md">
                      {cat.badge}
                    </span>

                    <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-[#183D2C]">
                      {cat.products.length} Products
                    </span>
                  </Link>

                  {/* Title & Description */}
                  <div className="mt-5">
                    <h3
                      style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                      className="text-2xl text-[#183D2C] transition-colors group-hover:text-[#52764B]"
                    >
                      <Link to={cat.route}>{cat.name}</Link>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#555B50] line-clamp-3">
                      {cat.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Explore Products Button */}
                <div className="mt-6 pt-5 border-t border-[#DDE7D8]/80">
                  <Link
                    to={cat.route}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-[#EDE8DA]/50 px-4 py-3 text-xs font-semibold text-[#183D2C] transition-all group-hover:bg-[#183D2C] group-hover:text-white"
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 4 – WHY CHOOSE ADHI? (FOUR FEATURE BLOCKS)
          ==================================================================== */}
      <section className="bg-[#EDE8DA]/40 py-16 sm:py-24 border-y border-[#DDE7D8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52764B]">
              Manufacturing Integrity
            </span>
            <h2
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-2 text-3xl leading-tight text-[#183D2C] sm:text-4xl"
            >
              Why Choose ADHI?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#555B50] leading-relaxed">
              We merge generations of coconut harvesting expertise in Pollachi with modern engineering,
              reliable logistics, and international compliance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseFeatures.map((feat, index) => {
              const IconComp = feat.icon
              return (
                <motion.div
                  key={feat.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-[#DDE7D8] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#52764B]/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#183D2C] text-[#C5A16A]">
                    <IconComp size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#183D2C]">{feat.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#555B50]">
                    {feat.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 – INDUSTRIES WE SERVE
          ==================================================================== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-[#DDE7D8] pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A16A]">
                Global Sector Applications
              </span>
              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-1 text-3xl text-[#183D2C] sm:text-4xl"
              >
                Industries We Serve
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555B50] max-w-md">
              Supplying custom-manufactured natural coir products to key commercial and industrial sectors worldwide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesWeServe.map((ind, i) => {
              const IndIcon = ind.icon
              return (
                <div
                  key={ind.name}
                  className="group rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/20 p-6 transition-all duration-200 hover:border-[#183D2C]/40 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#183D2C] text-[#C5A16A] transition-colors group-hover:bg-[#52764B]">
                      <IndIcon size={20} />
                    </div>
                    <span className="rounded-full bg-[#DDE7D8] px-2.5 py-0.5 text-[10px] font-semibold text-[#183D2C]">
                      Sector {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#183D2C]">{ind.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#555B50] leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#DDE7D8]/80 flex items-center gap-1.5 text-[11px] font-semibold text-[#52764B]">
                    <CheckCircle2 size={13} />
                    <span>{ind.highlight}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 6 – SUSTAINABILITY BANNER
          ==================================================================== */}
      <section className="relative isolate overflow-hidden bg-[#183D2C] py-20 sm:py-28 text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={CATEGORY_IMAGES.sustainability}
            alt="Aerial view of coconut coir facility promoting sustainability"
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#183D2C]/95 via-[#183D2C]/85 to-[#183D2C]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,161,106,0.2),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-block rounded-full border border-[#C5A16A]/40 bg-[#C5A16A]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A16A]">
              100% Circular Economy
            </span>

            <h2
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl text-white"
            >
              Growing a Greener Future Through Natural Innovation
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#EDE8DA]/90">
              Every metric ton of natural coir utilized saves synthetic plastics from ending up in our
              oceans, landfills, and waterways. Join our global distribution network and partner with us
              to build a truly circular supply chain.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#C5A16A] px-7 py-3.5 text-sm font-semibold text-[#183D2C] shadow-lg transition-all hover:bg-[#EDE8DA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Enquire for Bulk Supply</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/919566294433?text=Hello%20ADHI%2C%20I%20would%20like%20to%20discuss%20sustainable%20coir%20product%20procurement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#183D2C]"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7 – CALL TO ACTION
          ==================================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="rounded-3xl border border-[#DDE7D8] bg-[#EDE8DA]/50 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52764B]">
                Direct Factory Consultation
              </span>
              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-2 text-3xl leading-tight text-[#183D2C] sm:text-4xl"
              >
                Looking for the Right Coir Product?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#555B50] leading-relaxed">
                Connect with our team to explore our product range and find the right sustainable solution
                for your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#183D2C] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#52764B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#183D2C]"
              >
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919566294433"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#183D2C]/30 bg-white px-6 py-4 text-sm font-semibold text-[#183D2C] transition-all hover:border-[#183D2C] hover:bg-[#EDE8DA]"
              >
                <PhoneCall size={16} />
                <span>+91 95662 94433</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
