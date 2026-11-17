import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Layers,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Sliders,
  Sprout,
} from 'lucide-react'
import Breadcrumb from '../Components/products/Breadcrumb'
import ProductCard from '../Components/products/ProductCard'
import EnquiryForm from '../Components/products/EnquiryForm'
import {
  getProductBySlug,
  getRelatedProducts,
  getCategoryBySlug,
} from '../data/productsData'
import { useState } from 'react'

export default function ProductDetails() {
  const prefersReducedMotion = useReducedMotion()
  const { categorySlug, slug, productSlug } = useParams()

  // Support both /products/:categorySlug/:productSlug and /products/:slug
  const activeProductSlug = productSlug || slug
  const product = getProductBySlug(categorySlug, activeProductSlug)

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!product) {
    // If not found, redirect to main products directory
    return (
      <main className="py-24 text-center">
        <div className="mx-auto max-w-md px-4">
          <h1
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            className="text-3xl text-[#183D2C]"
          >
            Product Not Found
          </h1>
          <p className="mt-3 text-sm text-[#555B50]">
            The product you are looking for may have been updated or moved.
          </p>
          <div className="mt-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-[#183D2C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#52764B]"
            >
              <ArrowLeft size={14} />
              <span>Back to Products Directory</span>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // Gallery array
  const gallery = [product.image, ...(product.gallery || [])]

  // Related products
  const relatedProducts = getRelatedProducts(product.id, product.categorySlug, 3)

  // Breadcrumbs
  const breadcrumbItems = [
    { label: 'Products', to: '/products' },
    {
      label: product.categoryName || 'Category',
      to: `/products/${product.categorySlug}`,
    },
    { label: product.name },
  ]

  return (
    <main className="overflow-hidden bg-[#FFFFFF] text-[#252A25] font-['Inter',sans-serif]">
      {/* Top Breadcrumb & Header Bar */}
      <section className="bg-[#183D2C] pt-32 pb-10 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#C5A16A]/20 border border-[#C5A16A]/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#C5A16A]">
                {product.categoryName}
              </span>
              <h1
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="mt-2 text-3xl sm:text-4xl lg:text-5xl text-white font-normal"
              >
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#enquiry-section"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C5A16A] px-5 py-3 text-xs font-semibold text-[#183D2C] hover:bg-[#EDE8DA] transition-all"
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </a>
              <a
                href={`https://wa.me/919566294433?text=Hello%20ADHI%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-semibold text-white hover:bg-white hover:text-[#183D2C] transition-all"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview: Gallery & Highlights */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Gallery Column */}
            <div className="lg:col-span-6">
              <div className="sticky top-28 space-y-4">
                {/* Main Large Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/50 shadow-sm">
                  <motion.img
                    key={activeImageIndex}
                    src={gallery[activeImageIndex] || product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src =
                        'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png'
                    }}
                    initial={prefersReducedMotion ? false : { opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full object-cover"
                  />
                  {product.categoryBadge && (
                    <span className="absolute top-4 left-4 rounded-full bg-[#183D2C]/85 px-3 py-1 text-xs font-semibold tracking-wider text-[#C5A16A] backdrop-blur-md">
                      {product.categoryBadge}
                    </span>
                  )}
                </div>

                {/* Thumbnails if gallery has multiple photos */}
                {gallery.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                          activeImageIndex === idx
                            ? 'border-[#183D2C] ring-2 ring-[#183D2C]/20'
                            : 'border-[#DDE7D8] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null
                            e.currentTarget.src =
                              'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png'
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Direct Factory Tag */}
                <div className="rounded-xl border border-[#DDE7D8] bg-[#EDE8DA]/30 p-4 text-xs text-[#555B50] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#52764B]" />
                    <span>ISO 9001:2015 &amp; 14001:2015 Certified Production</span>
                  </div>
                  <span className="font-semibold text-[#183D2C]">Pollachi, India</span>
                </div>
              </div>
            </div>

            {/* Description & Specification Column */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52764B]">
                  Product Overview
                </p>
                <h2
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="mt-1 text-2xl sm:text-3xl text-[#183D2C]"
                >
                  {product.name}
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#555B50]">
                  {product.fullDescription || product.shortDescription}
                </p>
              </div>

              {/* Key Features */}
              {product.features && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D2C] mb-3">
                    Key Features
                  </h3>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 rounded-xl border border-[#DDE7D8] bg-[#EDE8DA]/20 p-3">
                        <CheckCircle2 size={16} className="text-[#52764B] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-[#252A25]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {product.benefits && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D2C] mb-3">
                    Advantages &amp; Benefits
                  </h3>
                  <div className="space-y-2">
                    {product.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555B50]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C5A16A] mt-2 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D2C] mb-3">
                    Practical Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-[#DDE7D8] px-3 py-1.5 text-xs font-semibold text-[#183D2C]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA]/30 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={16} className="text-[#52764B]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D2C]">
                      Technical Specifications
                    </h3>
                  </div>

                  <div className="divide-y divide-[#DDE7D8] text-xs sm:text-sm">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-2">
                        <span className="font-medium text-[#555B50] capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="font-semibold text-[#183D2C] text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Customization Options */}
              <div className="rounded-2xl border border-[#C5A16A]/40 bg-[#C5A16A]/10 p-5">
                <div className="flex items-center gap-2">
                  <Sliders size={16} className="text-[#183D2C]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#183D2C]">
                    Customization &amp; Export Packaging
                  </h3>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-[#555B50] leading-relaxed">
                  We offer bespoke dimension cutting, density tuning, OEM private labeling, palletization,
                  and export container consolidation directly from our factory in Pollachi, Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products from same category */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#EDE8DA]/30 py-16 border-t border-[#DDE7D8]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#52764B]">
                  More from {product.categoryName}
                </p>
                <h2
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="mt-1 text-2xl text-[#183D2C] sm:text-3xl"
                >
                  Related Products
                </h2>
              </div>
              <Link
                to={`/products/${product.categorySlug}`}
                className="text-xs font-semibold text-[#183D2C] hover:underline inline-flex items-center gap-1"
              >
                <span>View Category</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relProd) => (
                <ProductCard key={relProd.id} product={relProd} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pre-filled Enquiry Form */}
      <EnquiryForm
        prefilledProduct={product.name}
        title={`Request a Quote for ${product.name}`}
        subtitle={`Connect with our export desk for pricing, minimum order quantities (MOQ), and shipping estimates.`}
      />
    </main>
  )
}
