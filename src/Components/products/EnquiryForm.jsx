import { useEffect, useState } from 'react'
import { CheckCircle2, Clock, Lock, MessageCircle, RefreshCw, Send } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

export default function EnquiryForm({
  prefilledProduct = '',
  productList = [],
  title = 'Request a Product Quotation',
  subtitle = 'Share your volume and specification needs. Our B2B export desk in Pollachi will respond within 24 business hours.',
}) {
  const prefersReducedMotion = useReducedMotion()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: prefilledProduct,
    quantity: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionReceipt, setSubmissionReceipt] = useState(null)

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, product: prefilledProduct }))
    }
  }, [prefilledProduct])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Full name is required.'
    if (!formData.email.trim()) {
      errs.email = 'Business email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.'
    }
    if (!formData.company.trim()) errs.company = 'Company name is required.'
    if (!formData.product.trim()) errs.product = 'Please select or enter the product.'
    if (!formData.message.trim()) {
      errs.message = 'Please describe your requirement or specifications.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Simulated B2B quotation submission
    setTimeout(() => {
      setSubmissionReceipt({
        referenceId: `ADHI-QUO-${Math.floor(100000 + Math.random() * 900000)}`,
        product: formData.product,
        company: formData.company,
        timestamp: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 850)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: prefilledProduct || '',
      quantity: '',
      message: '',
    })
    setIsSubmitted(false)
    setSubmissionReceipt(null)
    setErrors({})
  }

  return (
    <section id="enquiry-section" className="relative scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#183D2C]/10 bg-white p-6 shadow-[0_16px_50px_rgba(24,61,44,0.08)] sm:p-10 lg:p-12">
        {/* Header */}
        <div className="border-b border-[#DDE7D8]/80 pb-6 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#DDE7D8] px-3 py-1 text-xs font-semibold text-[#183D2C]">
            <Clock size={13} className="text-[#52764B]" />
            <span>Fast B2B Response</span>
          </div>

          <h2
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            className="mt-3 text-2xl text-[#183D2C] sm:text-3xl lg:text-4xl"
          >
            {title}
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#555B50] leading-relaxed">
            {subtitle}
          </p>
        </div>

        {isSubmitted && submissionReceipt ? (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
            className="py-10 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#183D2C] text-[#C5A16A]">
              <CheckCircle2 size={36} />
            </div>

            <h3
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-4 text-2xl text-[#183D2C]"
            >
              Quotation Request Received!
            </h3>

            <p className="mt-2 text-sm text-[#555B50]">
              Thank you. Your enquiry for <strong className="text-[#183D2C]">{submissionReceipt.product}</strong> on
              behalf of <strong className="text-[#183D2C]">{submissionReceipt.company}</strong> has been logged.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border border-[#DDE7D8] bg-[#EDE8DA]/30 p-4 text-left text-xs sm:text-sm">
              <div className="flex justify-between border-b border-[#DDE7D8] pb-2 font-mono">
                <span className="text-[#555B50]">Reference ID:</span>
                <span className="font-bold text-[#183D2C]">{submissionReceipt.referenceId}</span>
              </div>
              <div className="pt-2 text-[#555B50]">
                <span>Our Pollachi export manager will review specs and provide a FOB/CIF estimate.</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl bg-[#183D2C] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#52764B]"
              >
                <RefreshCw size={14} />
                <span>Submit Another Request</span>
              </button>

              <a
                href="https://wa.me/919566294433?text=Hello%20ADHI%20Team%2C%20I%20have%20an%20enquiry%20regarding%20coir%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-5 py-3 text-xs font-semibold text-[#183D2C] transition-colors hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={15} />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
            {/* Name & Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Krishnan"
                  className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-400' : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                  Business Email <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-400' : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="mt-1.5 w-full rounded-xl border border-[#DDE7D8] bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:border-[#52764B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#52764B]/30"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. AgriGreen Logistics Ltd."
                  className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                    errors.company ? 'border-red-500 focus:ring-red-400' : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                  }`}
                />
                {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
              </div>
            </div>

            {/* Selected Product & Estimated Quantity */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="selectedProduct" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                  Selected Product <span className="text-red-600">*</span>
                </label>
                {productList && productList.length > 0 ? (
                  <select
                    id="selectedProduct"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="mt-1.5 w-full rounded-xl border border-[#DDE7D8] bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:border-[#52764B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#52764B]/30"
                  >
                    <option value="">Select a product...</option>
                    {productList.map((p) => (
                      <option key={p.id || p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id="selectedProduct"
                    name="product"
                    type="text"
                    value={formData.product}
                    onChange={handleInputChange}
                    placeholder="e.g. Coir Bubble Wrap / Coir Pots"
                    className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.product ? 'border-red-500 focus:ring-red-400' : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                    }`}
                  />
                )}
                {errors.product && <p className="mt-1 text-xs text-red-600">{errors.product}</p>}
              </div>

              <div>
                <label htmlFor="quantity" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                  Estimated Quantity / Volume
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g. 1 x 40ft FCL container / 5000 pcs"
                  className="mt-1.5 w-full rounded-xl border border-[#DDE7D8] bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:border-[#52764B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#52764B]/30"
                />
              </div>
            </div>

            {/* Message / Requirements */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]">
                Specifications &amp; Requirements <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mention desired dimensions, target delivery port (FOB Cochin/Tuticorin or CIF destination), packaging format..."
                className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                  errors.message ? 'border-red-500 focus:ring-red-400' : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#183D2C] px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#52764B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2C] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw size={18} className="animate-spin text-[#C5A16A]" />
                  <span>Processing Quotation Request...</span>
                </>
              ) : (
                <>
                  <span>Submit Quotation Request</span>
                  <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {/* Privacy notice */}
            <div className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-[#555B50]">
              <Lock size={13} className="text-[#52764B]" />
              <span>Confidential B2B communication. Your contact details are never shared with third parties.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
