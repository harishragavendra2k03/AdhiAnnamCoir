import { motion, useReducedMotion } from 'framer-motion'
import Breadcrumb from './Breadcrumb'

export default function ProductHero({
  badge = 'ADHI COIR PRODUCTS',
  title = 'Sustainable Coir Products for a Better Tomorrow',
  description = 'Discover innovative, eco-friendly coconut coir solutions designed for homes, industries, agriculture and a greener planet.',
  breadcrumbItems = [],
  heroImage,
  primaryCtaText = 'Explore Our Products',
  primaryCtaHref = '#product-collection',
  secondaryCtaText,
  secondaryCtaHref,
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      aria-label={title}
      className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#183D2C] pb-16 pt-32 text-white sm:min-h-[560px] sm:pb-20 lg:min-h-[600px]"
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {heroImage && (
          <motion.img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            initial={prefersReducedMotion ? false : { scale: 1.08 }}
            animate={prefersReducedMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C] via-[#183D2C]/85 to-[#183D2C]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,161,106,0.22),transparent_55%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Content */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A16A]/35 bg-[#C5A16A]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A16A]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#EDE8DA] sm:text-xs">
                {badge}
              </p>
            </div>
          )}

          <h1
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            className="mt-4 text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#EDE8DA]/90 sm:text-lg">
            {description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {primaryCtaText && (
              <a
                href={primaryCtaHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#C5A16A] px-6 py-3.5 text-sm font-semibold text-[#183D2C] shadow-md transition-all hover:bg-[#EDE8DA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {primaryCtaText}
              </a>
            )}

            {secondaryCtaText && (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-[#183D2C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
