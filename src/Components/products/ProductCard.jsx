import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

export default function ProductCard({ product, onEnquire }) {
  const prefersReducedMotion = useReducedMotion()
  const detailUrl = `/products/${product.categorySlug || 'all'}/${product.slug}`

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col justify-between rounded-2xl border border-[#DDE7D8] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#52764B]/40 hover:shadow-lg"
    >
      <div>
        {/* Clickable Image Container */}
        <Link
          to={detailUrl}
          aria-label={`View details for ${product.name}`}
          title={`Click to view details for ${product.name}`}
          className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-[#EDE8DA]/40 cursor-pointer group/img"
        >
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src =
                'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png'
            }}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-110 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle Dark Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/80 via-[#183D2C]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 group-hover:opacity-100" />
          
          {/* Floating 'View Product' Link Button that appears on Hover */}
          <div className="absolute inset-0 flex items-center justify-center p-3 opacity-0 transition-all duration-300 group-hover/img:opacity-100 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#183D2C] shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105">
              <span>View Product</span>
              <ArrowUpRight size={14} className="text-[#C5A16A]" />
            </span>
          </div>

          {/* Badge */}
          {product.categoryBadge && (
            <span className="absolute top-3 left-3 z-10 rounded-full bg-[#183D2C]/85 px-3 py-1 text-[10px] font-semibold tracking-wider text-[#C5A16A] backdrop-blur-md">
              {product.categoryBadge}
            </span>
          )}
        </Link>

        {/* Text Content */}
        <div className="mt-4">
          {product.categoryName && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#52764B]">
              {product.categoryName}
            </p>
          )}

          <h3
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            className="mt-1 text-xl font-normal leading-snug text-[#183D2C] transition-colors group-hover:text-[#52764B]"
          >
            <Link to={detailUrl}>{product.name}</Link>
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#555B50] sm:text-sm">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center gap-2.5 border-t border-[#DDE7D8]/70 pt-4">
        <Link
          to={detailUrl}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#183D2C] px-3.5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#52764B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#183D2C]"
        >
          <span>View Details</span>
          <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          onClick={() => {
            if (onEnquire) {
              onEnquire(product)
            } else {
              const el = document.getElementById('enquiry-section')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
                const select = document.getElementById('selectedProduct')
                if (select) select.value = product.name
              }
            }
          }}
          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#DDE7D8] bg-[#EDE8DA]/30 px-3.5 py-2.5 text-xs font-semibold text-[#183D2C] transition-all hover:border-[#52764B] hover:bg-[#DDE7D8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#52764B]"
          aria-label={`Enquire now about ${product.name}`}
        >
          <MessageCircle size={14} className="text-[#52764B]" />
          <span>Enquire Now</span>
        </button>
      </div>
    </motion.div>
  )
}
