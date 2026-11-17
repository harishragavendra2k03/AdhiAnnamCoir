import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Factory,
  Globe2,
  Handshake,
  Layers,
  Leaf,
  Lightbulb,
  MapPin,
  MessageCircle,
  Mountain,
  Package,
  PanelsTopLeft,
  Sprout,
  Waves,
} from "lucide-react"
import { Link } from "react-router-dom"

const companyLinks = {
  contact: "/contact",
  quote: "/contact#request-a-quote",
  whatsapp:
    "https://wa.me/919566294433?text=Hello%20Adhi%20Annam%20Coir%20Comforts%2C%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.",
}

const images = {
  hero: "https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png",
  global:
    "https://static.wixstatic.com/media/ab8198_c6e9e4cd9a8748929cc7f9d220ecbcd1~mv2.png/v1/crop/x_514,y_0,w_1609,h_1073/fill/w_633,h_422,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-11-02%20183052.png",
}

const regions = ["North America", "Europe", "Asia"]

const showcaseCards = [
  {
    title: "Horticulture & Gardening",
    description:
      "Explore coir-based solutions for nurseries, greenhouses and growing applications.",
    image:
      "https://static.wixstatic.com/media/d79127_71c9fb87f02d403bb421a47b7b9afe4b~mv2.png",
    alt: "Coir pots, liners and growing products for horticulture",
    Icon: Sprout,
  },
  {
    title: "Landscaping & Erosion Control",
    description:
      "Discover natural coir options for landscaping and erosion-control applications.",
    image:
      "https://static.wixstatic.com/media/ab8198_e0a2b899735b4d9ba9cf4519a34e706d~mv2.jpg",
    alt: "Coir erosion-control matting for landscaping applications",
    Icon: Mountain,
  },
  {
    title: "Sustainable Packaging",
    description:
      "See biodegradable coir packaging concepts for protective and product packaging.",
    image:
      "https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png",
    alt: "Molded coir packaging inserts and protective blocks",
    Icon: Package,
  },
  {
    title: "Interior Design & Construction",
    description:
      "Learn about coir-based panel options for interior and building applications.",
    image:
      "https://static.wixstatic.com/media/d79127_e1faa3af9d4b41a49166a7ba3bb4ad0e~mv2.png",
    alt: "Coir interior panels for sustainable design and construction",
    Icon: PanelsTopLeft,
  },
  {
    title: "Natural Fibre Products",
    description:
      "Explore versatile coir products and the possibilities of a natural fibre material.",
    image:
      "https://static.wixstatic.com/media/d79127_c372723bab94492c82306a1d9f97d7ce~mv2.png",
    alt: "Coconut coir scrubbers made from natural fibre",
    Icon: Leaf,
  },
  {
    title: "Filtration Solutions",
    description:
      "Discuss coir filter media for air, water and industrial filtration applications.",
    image:
      "https://static.wixstatic.com/media/d79127_8ac6ed898e1d4f7fbaf2a55ed12aa59f~mv2.png",
    alt: "Coir filter media for air and water filtration",
    Icon: Waves,
  },
]

const upcomingExhibitions = []

const reasonsToMeet = [
  {
    title: "Explore Natural Fibre Innovations",
    description:
      "Discover coir-based products and their applications across industries.",
    Icon: Lightbulb,
  },
  {
    title: "Discuss Business Opportunities",
    description:
      "Connect with our team about distribution, bulk requirements and partnerships.",
    Icon: Handshake,
  },
  {
    title: "Discover Product Applications",
    description:
      "Explore solutions for horticulture, packaging, interiors and other sectors.",
    Icon: Layers,
  },
  {
    title: "Build Global Partnerships",
    description:
      "Connect with a manufacturer focused on natural coir solutions and business collaboration.",
    Icon: Globe2,
  },
]

const revealUp = (prefersReducedMotion, delay = 0) => ({
  initial: prefersReducedMotion ? false : { opacity: 0, y: 20 },
  whileInView: prefersReducedMotion ? undefined : { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
})

const TradeShows = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <main className="overflow-hidden bg-white text-[#252A25]">
      <section
        aria-labelledby="trade-shows-hero-heading"
        className="relative isolate flex min-h-[590px] items-end overflow-hidden bg-[#183D2C] pb-16 pt-32 text-white sm:min-h-[660px] sm:pb-20 lg:min-h-[700px]"
      >
        <motion.img
          src={images.hero}
          alt=""
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { scale: 1.04 }}
          animate={prefersReducedMotion ? undefined : { scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102A1E]/90 via-[#183D2C]/70 to-[#183D2C]/35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#102A1E]/35 to-transparent" />

        <motion.div
          {...revealUp(prefersReducedMotion)}
          className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
        >
          <nav aria-label="Breadcrumb" className="mb-9">
            <ol className="flex items-center gap-2 text-sm text-white/75">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-white">
                Trade Shows
              </li>
            </ol>
          </nav>

          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E6C58F] sm:text-xs">
            Global Connections <span className="px-2 text-white/55">|</span>{" "}
            Industry Exhibitions
          </p>
          <h1
            id="trade-shows-hero-heading"
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            className="max-w-5xl text-4xl leading-[1.06] tracking-[-0.025em] sm:text-6xl lg:text-7xl"
          >
            Connecting Innovation. Expanding Global Partnerships.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Showcasing innovative, eco-conscious coir solutions on the
            international stage and connecting with businesses shaping a more
            sustainable future.
          </p>
          <Link
            to="#global-presence"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore our global presence
            <ArrowRight
              size={17}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute bottom-10 right-8 hidden h-24 w-24 rounded-full border border-[#E6C58F]/50 lg:block"
        />
      </section>

      <section
        id="global-presence"
        aria-labelledby="global-presence-heading"
        className="bg-[#F7F6F0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <motion.div
            {...revealUp(prefersReducedMotion)}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 border border-[#C5A16A]/55 sm:-left-6 sm:-top-6 sm:h-36 sm:w-36" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#DDE7D8]">
              <img
                src={images.global}
                alt="Adhi Annam Coir manufacturing facility in Pollachi"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                <Factory size={19} aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.16em]">
                  Rooted in Pollachi
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 right-5 hidden h-20 w-20 items-center justify-center rounded-full border border-[#C5A16A]/70 bg-[#F7F6F0] text-[#52764B] sm:flex">
              <Globe2 size={30} strokeWidth={1.2} aria-hidden="true" />
            </div>
          </motion.div>

          <motion.div {...revealUp(prefersReducedMotion, 0.08)}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7046]">
              Connecting across borders
            </p>
            <h2
              id="global-presence-heading"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="max-w-xl text-4xl leading-[1.12] tracking-[-0.02em] text-[#183D2C] sm:text-5xl"
            >
              Global Footprint in Trade Shows
            </h2>
            <div className="my-6 h-px w-16 bg-[#C5A16A]" />
            <p className="text-base leading-8 text-[#555B50]">
              Adhi Annam Coir proudly showcases its innovative and
              eco-conscious coir-based solutions at international exhibitions
              across North America, Europe and Asia.
            </p>
            <p className="mt-4 text-base leading-8 text-[#555B50]">
              Through these exhibitions, we connect with distributors,
              industry leaders and environmental advocates, sharing the
              benefits and applications of natural coir products.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {regions.map((region) => (
                <li
                  key={region}
                  className="flex items-center gap-2 border-t border-[#183D2C]/15 pt-4 text-sm font-semibold text-[#183D2C]"
                >
                  <MapPin
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-[#9A7546]"
                  />
                  {region}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="showcase-heading"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...revealUp(prefersReducedMotion)}
            className="mb-11 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7046]">
                Coir across industries
              </p>
              <h2
                id="showcase-heading"
                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                className="text-4xl leading-tight text-[#183D2C] sm:text-5xl"
              >
                Natural Coir Solutions. Multiple Applications.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#555B50] sm:text-base">
              At exhibitions, we present natural coir products and solutions
              for a range of industries and applications.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseCards.map(({ title, description, image, alt, Icon }, index) => (
              <motion.article
                key={title}
                {...revealUp(prefersReducedMotion, (index % 3) * 0.06)}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }
                }
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-xl border border-[#183D2C]/10 bg-[#FAFAF7] shadow-[0_8px_28px_rgba(24,61,44,0.06)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#DDE7D8]">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183D2C]/35 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none" />
                  <span className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-full border border-white/35 bg-[#183D2C]/85 text-white backdrop-blur-sm">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3
                    style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                    className="text-2xl text-[#183D2C]"
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#62685D]">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="upcoming-exhibitions-heading"
        className="bg-[#F7F6F0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...revealUp(prefersReducedMotion)}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7046]">
              Meet us in person
            </p>
            <h2
              id="upcoming-exhibitions-heading"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="text-4xl leading-tight text-[#183D2C] sm:text-5xl"
            >
              Meet Us at Upcoming Exhibitions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#555B50] sm:text-base">
              Connect with our team, discover our coir solutions and explore
              opportunities for business collaboration.
            </p>
          </motion.div>

          {upcomingExhibitions.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {upcomingExhibitions.map((event) => (
                <article
                  key={event.name}
                  className="overflow-hidden rounded-2xl border border-[#183D2C]/10 bg-white shadow-[0_12px_36px_rgba(24,61,44,0.08)]"
                >
                  {event.image && (
                    <img
                      src={event.image}
                      alt={`${event.name} exhibition`}
                      loading="lazy"
                      className="aspect-[16/7] w-full object-cover"
                    />
                  )}
                  <div className="p-6 sm:p-8">
                    <h3
                      style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                      className="text-2xl text-[#183D2C]"
                    >
                      {event.name}
                    </h3>
                    <div className="mt-5 grid gap-3 text-sm text-[#555B50] sm:grid-cols-2">
                      <p className="flex items-center gap-2">
                        <CalendarDays
                          size={17}
                          aria-hidden="true"
                          className="shrink-0 text-[#8B7046]"
                        />
                        {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          aria-hidden="true"
                          className="shrink-0 text-[#8B7046]"
                        />
                        {event.city}, {event.country}
                      </p>
                      <p className="flex items-center gap-2 sm:col-span-2">
                        <Factory
                          size={17}
                          aria-hidden="true"
                          className="shrink-0 text-[#8B7046]"
                        />
                        {event.venue}
                      </p>
                    </div>
                    {event.booth && (
                      <p className="mt-4 text-sm font-semibold text-[#183D2C]">
                        Booth: {event.booth}
                      </p>
                    )}
                    {event.detailsUrl && (
                      <a
                        href={event.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#52764B] hover:text-[#183D2C]"
                      >
                        View Event Details
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <motion.div
              {...revealUp(prefersReducedMotion, 0.08)}
              className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#183D2C]/10 bg-white px-6 py-10 text-center shadow-[0_12px_36px_rgba(24,61,44,0.06)] sm:px-10 sm:py-12"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#DDE7D8] text-[#183D2C]">
                <CalendarDays size={24} aria-hidden="true" />
              </span>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#555B50] sm:text-lg">
                Our next exhibition schedule will be announced soon. Stay
                connected to discover where you can meet us next.
              </p>
              <Link
                to={companyLinks.contact}
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#183D2C] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#52764B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52764B]"
              >
                Contact Us for Exhibition Updates
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <section
        aria-labelledby="why-meet-heading"
        className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...revealUp(prefersReducedMotion)}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7046]">
              Beyond the booth
            </p>
            <h2
              id="why-meet-heading"
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="text-4xl leading-tight text-[#183D2C] sm:text-5xl"
            >
              Let&apos;s Connect Beyond the Exhibition Floor
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasonsToMeet.map(({ title, description, Icon }, index) => (
              <motion.article
                key={title}
                {...revealUp(prefersReducedMotion, index * 0.06)}
                whileHover={
                  prefersReducedMotion ? undefined : { y: -4 }
                }
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-[#183D2C]/10 bg-[#FAFAF7] p-6 sm:p-7"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-[#DDE7D8] text-[#183D2C]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="mt-5 text-xl leading-snug text-[#183D2C]"
                >
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#62685D]">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#183D2C] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-32 -z-10 size-96 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-16 -z-10 size-64 rounded-full border border-[#C5A16A]/25"
        />
        <motion.div
          {...revealUp(prefersReducedMotion)}
          className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C58F]">
              Business networking
            </p>
            <h2
              style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
              className="text-4xl leading-tight sm:text-5xl"
            >
              Let&apos;s Meet. Let&apos;s Collaborate. Let&apos;s Grow Together.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Planning to attend an exhibition or interested in exploring
              business opportunities with Adhi Annam? Get in touch with our
              team.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              to={companyLinks.contact}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C5A16A] px-5 py-3 text-sm font-semibold text-[#183D2C] transition-colors hover:bg-[#EDE8DA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Our Team
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link
              to={companyLinks.quote}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Request a Quote
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={companyLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default TradeShows
