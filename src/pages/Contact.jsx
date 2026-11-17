import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RefreshCw,
  Send,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

// Reusable components from project
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'
import WhatsAppFloat from "./Components/common/WhatsAppFloat";

/* ==========================================================================
   CONFIGURABLE ASSETS & COMPANY INFORMATION
   (Easily updated or replaced with local assets as needed)
   ========================================================================== */
const COMPANY_INFO = {
  name: 'Adhi Annam Coir Comforts Pvt. Ltd.',
  tagline: 'Natural Fibre. Global Quality. Sustainable Comfort.',
  description:
    'Adhi Annam Coir Comforts Pvt. Ltd. is a leading manufacturer and exporter of eco-friendly coir products, promoting sustainability through innovation and quality craftsmanship.',
  address:
    '2/154-1, Unjavelampatti Udumalai Road, Pollachi, Coimbatore - 642003, India',
  phone: '+91 95662 94433',
  phoneRaw: '+919566294433',
  secondaryPhone: '+91 95000 70146',
  email: 'hello@adhiannamcoir.com',
  workingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM (IST)',
  whatsappNumber: '919566294433',
  whatsappUrl:
    'https://wa.me/919566294433?text=Hello%20Adhi%20Annam%20Coir%20Comforts%2C%20I%20would%20like%20to%20request%20a%20product%20quote.',
  linkedinUrl: 'https://www.linkedin.com/company/adhi-annam-coir',
  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Adhi+Annam+Coir+Comforts+Pvt.+Limited+Pollachi+Tamil+Nadu',
  // Verified Google Maps Embed URL for the official Pollachi manufacturing unit (no API key required)
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1960.5105011767712!2d77.0633889!3d10.6554761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba839d51e3fac99%3A0x89ca2ec4703d1734!2sAdhi%20Annam%20Coir%20Comforts%20Pvt.%20Limited!5e0!3m2!1sen!2sin!4v1794812287931!5m2!1sen!2sin',
}

// Authentic company manufacturing imagery
const IMAGES = {
  hero: 'https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png',
  productionProcess:
    'https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg',
  finishedProducts:
    'https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png',
}

// Official product categories for enquiry dropdown
const PRODUCT_OPTIONS = [
  'Coconut Coir Scrubber',
  'Coir Planting Supplies',
  'Coir Packaging',
  'Coir Interior Panel',
  'Coir Erosion Control',
  'Coir Filtration',
  'Coir Roll & Sheet',
  'Coir Mattresses',
  'Other',
]

export default function Contact({ renderLayout = false }) {
  const prefersReducedMotion = useReducedMotion()

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    product: '',
    email: '',
    phone: '',
    company: '',
    requirement: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)
  const [copiedField, setCopiedField] = useState(null)

  // Quick copy helper for phone / email
  const handleCopy = (text, fieldName) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    }
  }

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Field validations
  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
    }

    if (!formData.product) {
      newErrors.product = 'Please select a product category.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g., name@company.com).'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required.'
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = 'Please fill in your project or product requirement.'
    } else if (formData.requirement.trim().length < 10) {
      newErrors.requirement = 'Please provide at least a brief detail of your requirements.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      const firstErrorField = document.querySelector('[aria-invalid="true"]')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
        firstErrorField.focus()
      }
      return
    }

    setIsSubmitting(true)

    /* ======================================================================
       BACKEND INTEGRATION PLACEHOLDER:
       When your backend API or email service (e.g. Node API, Formspree,
       Resend, EmailJS, AWS SES) is ready, replace this mock block with:

       try {
         const response = await fetch('/api/quotations', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formData),
         })
         if (!response.ok) throw new Error('Submission failed')
         const result = await response.json()
         setIsSubmitted(true)
       } catch (err) {
         setErrors({ submit: 'Failed to send enquiry. Please contact us via phone or WhatsApp.' })
       } finally {
         setIsSubmitting(false)
       }
       ====================================================================== */

    // Simulated network latency for realistic UX
    setTimeout(() => {
      setSubmittedData({
        ...formData,
        referenceId: `AACC-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 900)
  }

  // Reset form to send another quotation
  const handleResetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      product: '',
      email: '',
      phone: '',
      company: '',
      requirement: '',
    })
    setErrors({})
    setIsSubmitted(false)
    setSubmittedData(null)
  }

  // Content of the entire page
  const pageContent = (
    <main className="overflow-hidden bg-[#FFFFFF] text-[#252A25] font-['Inter',sans-serif]">
      {/* ====================================================================
          1. HERO SECTION
          ==================================================================== */}
      <section
        aria-label="Contact Adhi Annam Hero"
        className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#183D2C] pb-16 pt-32 text-white sm:min-h-[580px] sm:pb-20 lg:min-h-[620px]"
      >
        {/* Background Image with subtle gradient and natural coir overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.img
            src={IMAGES.hero}
            alt="Adhi Annam Coir natural manufacturing and products"
            className="h-full w-full object-cover object-center"
            initial={prefersReducedMotion ? false : { scale: 1.08 }}
            animate={prefersReducedMotion ? undefined : { scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Subtle multi-layer gradient overlay for corporate depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C] via-[#183D2C]/85 to-[#183D2C]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,161,106,0.18),transparent_50%)]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Breadcrumb Navigation */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-xs font-medium text-[#EDE8DA]/80 sm:text-sm"
          >
            <Link
              to="/"
              className="transition-colors hover:text-[#C5A16A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5A16A]"
            >
              Home
            </Link>
            <span className="text-[#C5A16A]/70">/</span>
            <span className="text-[#EDE8DA] font-semibold">Contact</span>
          </motion.nav>

          {/* Heading Content */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A16A]/35 bg-[#C5A16A]/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A16A]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#EDE8DA] sm:text-xs">
                CONTACT ADHI ANNAM
              </p>
            </div>

            <h1
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-4 text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl"
            >
              Get In Touch
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#EDE8DA]/90 sm:text-lg">
              Let&apos;s connect and explore how our natural coir solutions can support your business
              requirements.
            </p>
          </motion.div>

          {/* Quick Credibility Strip */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4 sm:gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A16A]">Location</p>
              <p className="mt-1 text-sm font-medium text-white sm:text-base">Pollachi, India</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A16A]">Response Time</p>
              <p className="mt-1 text-sm font-medium text-white sm:text-base">&lt; 24 Business Hours</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A16A]">Direct Line</p>
              <p className="mt-1 text-sm font-medium text-white sm:text-base">+91 95662 94433</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A16A]">Global Standards</p>
              <p className="mt-1 text-sm font-medium text-white sm:text-base">ISO 9001 &amp; 14001</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          2. MAIN CONTACT SECTION (TWO-COLUMN DESKTOP / STACKED MOBILE)
          ==================================================================== */}
      <section
        id="request-a-quote"
        className="relative bg-[#FFFFFF] py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            {/* ----------------------------------------------------------------
                LEFT COLUMN: Company Information & Manufacturing Showcase
                ---------------------------------------------------------------- */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between space-y-10 lg:col-span-5"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#DDE7D8] px-3.5 py-1 text-xs font-semibold text-[#183D2C]">
                  <Sparkles size={14} className="text-[#52764B]" />
                  Direct Factory Connections
                </div>

                <h2
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="mt-4 text-3xl leading-tight text-[#183D2C] sm:text-4xl"
                >
                  Get In Touch
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#555B50] sm:text-base">
                  Reach our manufacturing headquarters directly for custom formulations, bulk
                  exports, private labeling, and technical specifications.
                </p>

                {/* Company Name Badge */}
                <div className="mt-6 rounded-xl border border-[#DDE7D8] bg-[#EDE8DA]/40 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#183D2C] text-[#C5A16A]">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-[#52764B]">
                        Corporate Headquarters &amp; Factory
                      </p>
                      <h3 className="text-base font-bold text-[#183D2C]">
                        {COMPANY_INFO.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Interactive Contact Cards */}
                <div className="mt-6 space-y-4">
                  {/* Address */}
                  <a
                    href={COMPANY_INFO.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-[#DDE7D8]/80 bg-[#FFFFFF] p-4 transition-all duration-200 hover:border-[#52764B]/50 hover:bg-[#DDE7D8]/20 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DDE7D8] text-[#183D2C] transition-colors group-hover:bg-[#183D2C] group-hover:text-white">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#52764B]">
                          Factory &amp; Registered Address
                        </span>
                        <ExternalLink size={14} className="text-[#52764B] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="mt-1 text-sm font-medium leading-relaxed text-[#252A25]">
                        {COMPANY_INFO.address}
                      </p>
                      <span className="mt-1 inline-block text-xs font-semibold text-[#183D2C] group-hover:underline">
                        Open in Google Maps &rarr;
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <div className="group flex items-center justify-between rounded-xl border border-[#DDE7D8]/80 bg-[#FFFFFF] p-4 transition-all duration-200 hover:border-[#52764B]/50 hover:bg-[#DDE7D8]/20 hover:shadow-sm">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="flex flex-1 items-center gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DDE7D8] text-[#183D2C] transition-colors group-hover:bg-[#183D2C] group-hover:text-white">
                        <Phone size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#52764B]">
                          Call Us Directly
                        </span>
                        <p className="text-base font-semibold text-[#183D2C]">
                          {COMPANY_INFO.phone}
                        </p>
                        <p className="text-xs text-[#555B50]">{COMPANY_INFO.workingHours}</p>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                      className="ml-2 rounded-lg p-2 text-[#52764B] transition-colors hover:bg-[#DDE7D8] hover:text-[#183D2C]"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <CheckCircle2 size={18} className="text-[#183D2C]" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="group flex items-center justify-between rounded-xl border border-[#DDE7D8]/80 bg-[#FFFFFF] p-4 transition-all duration-200 hover:border-[#52764B]/50 hover:bg-[#DDE7D8]/20 hover:shadow-sm">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex flex-1 items-center gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DDE7D8] text-[#183D2C] transition-colors group-hover:bg-[#183D2C] group-hover:text-white">
                        <Mail size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#52764B]">
                          Email Enquiries
                        </span>
                        <p className="text-base font-semibold text-[#183D2C]">
                          {COMPANY_INFO.email}
                        </p>
                        <p className="text-xs text-[#555B50]">Typically replies within 24 business hours</p>
                      </div>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                      className="ml-2 rounded-lg p-2 text-[#52764B] transition-colors hover:bg-[#DDE7D8] hover:text-[#183D2C]"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <CheckCircle2 size={18} className="text-[#183D2C]" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#555B50]">
                    Connect Online:
                  </span>
                  <a
                    href={COMPANY_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#DDE7D8] bg-[#FFFFFF] px-3.5 py-2 text-xs font-semibold text-[#183D2C] transition-all hover:border-[#183D2C] hover:bg-[#183D2C] hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#DDE7D8] bg-[#FFFFFF] px-3.5 py-2 text-xs font-semibold text-[#183D2C] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    <MessageCircle size={15} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Manufacturing Photographs Composition */}
              <div className="pt-2">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#52764B]">
                    Manufacturing &amp; Facility Photographs
                  </span>
                  <span className="text-[11px] text-[#555B50]">Pollachi, Tamil Nadu</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Photo 1: Finished coir products */}
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#DDE7D8] bg-[#EDE8DA] shadow-sm"
                  >
                    <img
                      src={IMAGES.finishedProducts}
                      alt="Finished coconut coir scrubbers and products inside manufacturing facility"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Coir Finished Products
                    </p>
                  </motion.div>

                  {/* Photo 2: Production process */}
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#DDE7D8] bg-[#EDE8DA] shadow-sm"
                  >
                    <img
                      src={IMAGES.productionProcess}
                      alt="Coconut coir manufacturing and natural fibre production process"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-2 left-2 right-2 text-[11px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Fibre Production Unit
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ----------------------------------------------------------------
                RIGHT COLUMN: Request a Quote Form Card (Most Important Section)
                ---------------------------------------------------------------- */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-[#183D2C]/10 bg-[#FFFFFF] p-6 shadow-[0_12px_40px_rgba(24,61,44,0.07)] sm:p-8 lg:p-10">
                {/* Header */}
                <div className="border-b border-[#DDE7D8]/80 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A16A]">
                      B2B Quotations &amp; Enquiries
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DDE7D8] px-2.5 py-0.5 text-[11px] font-medium text-[#183D2C]">
                      <Clock size={12} />
                      Prompt response
                    </span>
                  </div>

                  <h2
                    style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                    className="mt-2 text-2xl font-normal text-[#183D2C] sm:text-3xl"
                  >
                    Request a Quote
                  </h2>

                  <p className="mt-2 text-sm text-[#555B50] sm:text-base">
                    Tell us about your requirements. Our team will be happy to assist you.
                  </p>
                </div>

                {/* SUCCESS STATE */}
                {isSubmitted && submittedData ? (
                  <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                    className="py-8"
                  >
                    <div className="rounded-xl border border-[#52764B]/30 bg-[#DDE7D8]/30 p-6 sm:p-8 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#183D2C] text-[#C5A16A]">
                        <CheckCircle2 size={32} />
                      </div>

                      <h3
                        style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                        className="mt-4 text-2xl text-[#183D2C]"
                      >
                        Enquiry Received Successfully!
                      </h3>

                      <p className="mt-2 text-sm text-[#555B50]">
                        Thank you, <strong className="text-[#183D2C]">{submittedData.firstName}</strong>.
                        We have logged your quotation request for{' '}
                        <strong className="text-[#183D2C]">{submittedData.product}</strong> on behalf of{' '}
                        <strong className="text-[#183D2C]">{submittedData.company}</strong>.
                      </p>

                      {/* Summary receipt box */}
                      <div className="mt-6 rounded-lg border border-[#DDE7D8] bg-white p-4 text-left text-xs sm:text-sm">
                        <div className="flex justify-between border-b border-[#DDE7D8] pb-2 font-mono text-[11px] sm:text-xs">
                          <span className="text-[#555B50]">Reference ID:</span>
                          <span className="font-bold text-[#183D2C]">{submittedData.referenceId}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2.5">
                          <div>
                            <span className="text-[#555B50]">Product:</span>
                            <p className="font-semibold text-[#183D2C]">{submittedData.product}</p>
                          </div>
                          <div>
                            <span className="text-[#555B50]">Contact Email:</span>
                            <p className="font-semibold text-[#183D2C] truncate">{submittedData.email}</p>
                          </div>
                          {submittedData.phone && (
                            <div>
                              <span className="text-[#555B50]">Phone:</span>
                              <p className="font-semibold text-[#183D2C]">{submittedData.phone}</p>
                            </div>
                          )}
                          <div>
                            <span className="text-[#555B50]">Logged at:</span>
                            <p className="font-semibold text-[#183D2C]">{submittedData.timestamp}</p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-5 text-xs text-[#555B50]">
                        Our export desk in Pollachi typically replies within 24 business hours with detailed
                        specifications and shipping estimates.
                      </p>

                      {/* Action buttons */}
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#183D2C] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#52764B]"
                        >
                          <RefreshCw size={14} />
                          Submit Another Enquiry
                        </button>
                        <a
                          href={COMPANY_INFO.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#25D366] bg-[#25D366]/10 px-5 py-2.5 text-xs font-semibold text-[#183D2C] transition-colors hover:bg-[#25D366] hover:text-white"
                        >
                          <MessageCircle size={14} />
                          Quick WhatsApp Follow-up
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* THE INTERACTIVE FORM */
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                    {/* First Name & Last Name (Side by side on desktop) */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                        >
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          aria-invalid={Boolean(errors.firstName)}
                          aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                          placeholder="e.g. Anand"
                          className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] placeholder-[#555B50]/60 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                            errors.firstName
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                          }`}
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="mt-1 text-xs text-red-600">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                        >
                          Last Name <span className="text-xs font-normal text-[#555B50]">(Optional)</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="e.g. Kumar"
                          className="mt-1.5 w-full rounded-xl border border-[#DDE7D8] bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] placeholder-[#555B50]/60 transition-all focus:border-[#52764B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#52764B]/30"
                        />
                      </div>
                    </div>

                    {/* Products dropdown (Full width) */}
                    <div>
                      <label
                        htmlFor="product"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                      >
                        Products <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(errors.product)}
                        aria-describedby={errors.product ? 'product-error' : undefined}
                        className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.product
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                        }`}
                      >
                        <option value="">Select a product category...</option>
                        {PRODUCT_OPTIONS.map((prod) => (
                          <option key={prod} value={prod}>
                            {prod}
                          </option>
                        ))}
                      </select>
                      {errors.product && (
                        <p id="product-error" className="mt-1 text-xs text-red-600">
                          {errors.product}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone (Side by side on desktop) */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          placeholder="name@company.com"
                          className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] placeholder-[#555B50]/60 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-400'
                              : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                          }`}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                        >
                          Phone <span className="text-xs font-normal text-[#555B50]">(Optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="mt-1.5 w-full rounded-xl border border-[#DDE7D8] bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] placeholder-[#555B50]/60 transition-all focus:border-[#52764B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#52764B]/30"
                        />
                      </div>
                    </div>

                    {/* Company Name (Full width) */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                      >
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? 'company-error' : undefined}
                        placeholder="e.g. GreenCo Solutions Ltd."
                        className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] placeholder-[#555B50]/60 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.company
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                        }`}
                      />
                      {errors.company && (
                        <p id="company-error" className="mt-1 text-xs text-red-600">
                          {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Requirement (Textarea, Full width) */}
                    <div>
                      <label
                        htmlFor="requirement"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#252A25]"
                      >
                        Please Fill Your Requirement <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="requirement"
                        name="requirement"
                        rows={4}
                        value={formData.requirement}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(errors.requirement)}
                        aria-describedby={errors.requirement ? 'requirement-error' : undefined}
                        placeholder="Please share product specifications, required dimensions, container volumes, target port or delivery timeline..."
                        className={`mt-1.5 w-full rounded-xl border bg-[#DDE7D8]/30 px-4 py-3 text-sm text-[#252A25] placeholder-[#555B50]/60 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                          errors.requirement
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-[#DDE7D8] focus:border-[#52764B] focus:ring-[#52764B]/30'
                        }`}
                      />
                      {errors.requirement && (
                        <p id="requirement-error" className="mt-1 text-xs text-red-600">
                          {errors.requirement}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#183D2C] px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#52764B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D2C] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw size={18} className="animate-spin text-[#C5A16A]" />
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <div className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-[#555B50]">
                      <Lock size={14} className="text-[#52764B]" />
                      <span>Your info is kept confidential and never shared with third parties</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. LOCATION SECTION (VERIFIED ADDRESS & MAP EMBED)
          ==================================================================== */}
      <section className="bg-[#EDE8DA]/50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#52764B]">
              Manufacturing Base &amp; Logistics
            </span>
            <h2
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="mt-2 text-3xl leading-tight text-[#183D2C] sm:text-4xl"
            >
              Our Location
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#555B50] sm:text-base">
              Visit Adhi Annam Coir Comforts and connect with our team.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Location Details Card */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between rounded-2xl border border-[#DDE7D8] bg-[#FFFFFF] p-6 shadow-sm sm:p-8 lg:col-span-5"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#183D2C] text-[#C5A16A]">
                  <MapPin size={24} />
                </div>

                <h3
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="mt-5 text-2xl text-[#183D2C]"
                >
                  Pollachi Unit
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#555B50]">
                  Situated in the heart of India&apos;s primary coconut belt, our Pollachi manufacturing
                  facility has direct access to top-grade organic coconut husks and seamless logistical
                  connectivity to Cochin and Tuticorin international seaports.
                </p>

                <div className="mt-6 rounded-xl border border-[#DDE7D8] bg-[#EDE8DA]/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#52764B]">
                    Official Verified Address
                  </p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-[#252A25]">
                    {COMPANY_INFO.address}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs text-[#555B50] sm:text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#52764B]" />
                    <span>Near STC College, Udumalai Road</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#52764B]" />
                    <span>~45 km from Coimbatore International Airport (CJB)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#52764B]" />
                    <span>Direct highway and port container haulage routes</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DDE7D8]">
                <a
                  href={COMPANY_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#183D2C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#52764B]"
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Google Maps Interactive Embed Frame */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-[420px] overflow-hidden rounded-2xl border border-[#DDE7D8] bg-[#EDE8DA] shadow-md lg:col-span-7"
            >
              <iframe
                title="Adhi Annam Coir Comforts Pvt. Ltd. Official Facility Location"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )

  // If rendered standalone without App.jsx, include Navbar, Footer, and WhatsAppFloat
  if (renderLayout) {
    return (
      <>
        <Navbar />
        {pageContent}
        <WhatsAppFloat />
        <Footer />
      </>
    )
  }

  // Normal route rendering (App.jsx provides layout globally)
  return pageContent
}
