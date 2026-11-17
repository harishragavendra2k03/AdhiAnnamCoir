import React, { useState } from 'react';
import { blogData } from '../data/blogData';
import FeaturedBlog from '../Components/blog/FeaturedBlog';
import BlogCard from '../Components/blog/BlogCard';
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

 


const Blog = () => {
   const prefersReducedMotion = useReducedMotion()
  const [page, setPage] = useState(0);

  const pageSize = 3;

  const [featured, ...others] = blogData;

  const paginated = others.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <main className="min-h-screen bg-white text-[#183D2C]">
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
                      Blog
                    </li>
                  </ol>
                </nav>
      
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E6C58F] sm:text-xs">
                  INSIGHTS  <span className="px-2 text-white/55">|</span>{" "}
                  INNOVATION <span className="px-2 text-white/55">|</span>{" "} SUSTAINABILITY
                </p>
                <h1
                  id="trade-shows-hero-heading"
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="max-w-5xl text-4xl leading-[1.06] tracking-[-0.025em] sm:text-6xl lg:text-7xl"
                >
                  Inspiring Ideas. Sharing Stories. Shaping a Greener Future.

                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  Explore the latest industry insights, innovative coir solutions, product highlights and sustainability stories from Adhi Annam Coir, showcasing how natural fibres and responsible practices are creating a more sustainable tomorrow.
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

      {/* Blog Header */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Blog
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-600">
          Stay up-to-date with the latest news, product highlights
          and sustainability stories from Adhi Annam Coir.
        </p>
      </section>

      {/* Featured Blog */}
      {featured && (
        <section className="max-w-6xl mx-auto px-4 mb-10">
          <FeaturedBlog article={featured} />
        </section>
      )}

      {/* Blog List */}
      <section className="max-w-6xl mx-auto px-4 pb-16">

        <div className="flex flex-col gap-8">

          {paginated.map((article) => (
  <BlogCard article={article} key={article.id} />
))}

        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-5 mt-12">

          <button
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            disabled={page === 0}
            className="
              px-6 py-3
              bg-[#183D2C]
              text-white
              disabled:opacity-40
              disabled:cursor-not-allowed
              hover:bg-[#C5A16A]
              transition
            "
          >
            Previous
          </button>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={(page + 1) * pageSize >= others.length}
            className="
              px-6 py-3
              bg-[#183D2C]
              border-radius: 10px
              text-white
              disabled:opacity-40
              disabled:cursor-not-allowed
              hover:bg-[#C5A16A]
              transition
             
            "
          >
            Next
          </button>

        </div>

      </section>

      {/* Footer Spacing */}
      <div className="h-12"></div>

    </main>
  );
};

export default Blog;
