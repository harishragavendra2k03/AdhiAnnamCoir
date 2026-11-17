import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Globe2,
  Leaf,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import ProductHero from '../../Components/products/ProductHero'
import ProductGrid from '../../Components/products/ProductGrid'
import EnquiryForm from '../../Components/products/EnquiryForm'
import { getAllCategories } from '../../data/productsData'

export default function CategoryTemplate({
  category,
  customBanner,
}) {
  const prefersReducedMotion = useReducedMotion()
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState('')

  if (!category) return null

  const allCategories = getAllCategories()
  const relatedCategories = allCategories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 3)

  const handleEnquire = (product) => {
    setSelectedProductForEnquiry(product.name)
    const el = document.getElementById('enquiry-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const breadcrumbItems = [
    { label: 'Products', to: '/products' },
    { label: category.name },
  ]

  return (
    <main className="overflow-hidden bg-[#FFFFFF] text-[#252A25] font-['Inter',sans-serif]">
      {/* 1. Category-specific Hero Banner with Breadcrumbs */}
      <ProductHero
        badge={category.badge || 'ADHI COIR SOLUTIONS'}
        title={category.mainHeading || category.name}
        description={category.supportingHeading || category.shortDescription}
        breadcrumbItems={breadcrumbItems}
        heroImage={category.heroImage}
        primaryCtaText="View Product Collection"
        primaryCtaHref="#product-collection"
        secondaryCtaText="Request a Quote"
        secondaryCtaHref="#enquiry-section"
      />

      {/* Optional custom banner (e.g. ISPM-15 Exempt highlight for packaging) */}
      {customBanner}

      {/* 2. Category Introduction Section */}
      <section className="relative py-16 sm:py-20 bg-[#EDE8DA]/30 border-b border-[#DDE7D8]/80">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-[#DDE7D8] px-3.5 py-1 text-xs font-semibold text-[#183D2C]">
                <Sparkles size={14} className="text-[#52764B]" />
                <span>Engineered Natural Fiber</span>
              </div>

              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-3 text-3xl leading-tight text-[#183D2C] sm:text-4xl"
              >
                {category.name}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#555B50] sm:text-lg">
                {category.fullDescription}
              </p>

              {/* Highlights List */}
              {category.highlights && (
                <div className="mt-6 space-y-3">
                  {category.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DDE7D8] text-[#183D2C]">
                        <CheckCircle2 size={14} />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-[#252A25]">{h}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Visual Feature Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative lg:col-span-5"
            >
              <div className="overflow-hidden rounded-2xl border border-[#DDE7D8] bg-white p-6 shadow-md">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#EDE8DA]">
                  <img
                    src={category.heroImage}
                    alt={category.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src =
                        'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png'
                    }}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-[#555B50]">
                  <span>Pollachi Manufacturing Facility</span>
                  <span className="font-semibold text-[#183D2C]">100% Eco-Certified</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Product Collection Grid */}
      <section id="product-collection" className="scroll-mt-24 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-[#DDE7D8] pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A16A]">
                Product Catalogue
              </p>
              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-1 text-3xl text-[#183D2C] sm:text-4xl"
              >
                Available {category.name} ({category.products?.length || 0})
              </h2>
            </div>
            <p className="text-xs text-[#555B50] sm:text-sm">
              All items customisable by dimension, density, and export volume.
            </p>
          </div>

          <div className="mt-10">
            <ProductGrid products={category.products} onEnquire={handleEnquire} />
          </div>
        </div>
      </section>

      {/* 4. Applications and Use Cases */}
      {category.applications && category.applications.length > 0 && (
        <section className="bg-[#EDE8DA]/40 py-16 sm:py-20 border-y border-[#DDE7D8]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52764B]">
                Versatile Implementations
              </span>
              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-2 text-3xl text-[#183D2C] sm:text-4xl"
              >
                Key Applications &amp; Use Cases
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#555B50]">
                Engineered to meet specific industry standards and challenging operating environments.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#DDE7D8] bg-white p-6 shadow-sm transition-all hover:border-[#52764B]/40 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#183D2C] text-[#C5A16A]">
                    <Layers size={20} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#183D2C]">{app}</h3>
                  <p className="mt-2 text-xs text-[#555B50] leading-relaxed">
                    Designed for heavy-duty reliability, eco-compliance, and seamless integration into commercial processes.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Why Choose ADHI Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52764B]">
              Manufacturing Advantages
            </span>
            <h2
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-2 text-3xl text-[#183D2C] sm:text-4xl"
            >
              Why Choose ADHI for {category.name}?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/20 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#183D2C] text-[#C5A16A]">
                <Leaf size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#183D2C]">100% Organic Sourcing</h3>
              <p className="mt-2 text-xs text-[#555B50] leading-relaxed">
                Direct access to south India’s premier coconut belt in Pollachi ensures prime, long-strand fiber.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/20 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#183D2C] text-[#C5A16A]">
                <Factory size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#183D2C]">Automated Precision</h3>
              <p className="mt-2 text-xs text-[#555B50] leading-relaxed">
                Modern non-woven lines ensure consistent density, moisture limits, and high dimensional accuracy.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/20 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#183D2C] text-[#C5A16A]">
                <ShieldCheck size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#183D2C]">Audited Quality</h3>
              <p className="mt-2 text-xs text-[#555B50] leading-relaxed">
                Manufactured under ISO 9001:2015 and ISO 14001:2015 certified quality systems.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/20 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#183D2C] text-[#C5A16A]">
                <Globe2 size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-[#183D2C]">Worldwide Export Ready</h3>
              <p className="mt-2 text-xs text-[#555B50] leading-relaxed">
                Convenient seaport container haulage via Cochin and Tuticorin with complete fumigation and export docs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Related Product Categories */}
      <section className="border-t border-[#DDE7D8] bg-[#EDE8DA]/30 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52764B]">
                Explore Further
              </p>
              <h2
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-1 text-2xl text-[#183D2C] sm:text-3xl"
              >
                Related Product Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183D2C] hover:underline"
            >
              <span>View All 9 Categories</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {relatedCategories.map((relCat) => (
              <Link
                key={relCat.id}
                to={relCat.route}
                className="group relative overflow-hidden rounded-2xl border border-[#DDE7D8] bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#183D2C] hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-[#EDE8DA]">
                  <img
                    src={relCat.heroImage}
                    alt={relCat.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src =
                        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'
                    }}
                  />
                </div>
                <h3
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="mt-4 text-xl text-[#183D2C] group-hover:text-[#52764B] transition-colors"
                >
                  {relCat.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-[#555B50]">
                  {relCat.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#183D2C] group-hover:text-[#52764B]">
                  Explore Category &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Product Enquiry Section */}
      <EnquiryForm
        prefilledProduct={selectedProductForEnquiry}
        productList={category.products}
        title={`Request a Quote for ${category.name}`}
        subtitle={`Connect with our export desk for volume pricing, custom sizes, or delivery schedules.`}
      />
    </main>
  )
}
