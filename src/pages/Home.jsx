
import React from "react";
import { blogData } from "../data/blogData";
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

const images = {
  hero: "https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png",
  global:
    "https://static.wixstatic.com/media/ab8198_c6e9e4cd9a8748929cc7f9d220ecbcd1~mv2.png/v1/crop/x_514,y_0,w_1609,h_1073/fill/w_633,h_422,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-11-02%20183052.png",
}

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

const Home = () => {
  const prefersReducedMotion = useReducedMotion()
  // Display the first three blog articles from blogData.js
  const latestBlogs = blogData.slice(0, 3);

  const products = [
    {
      title: "Coir Packaging",
      img: "/images/about/gallery/coir_packaging.avif",
      link: "/products/coir-packaging",
    },
    {
      title: "Coir Filtration",
      img: "/Coir%20Foam%20Block.avif",
      link: "/products/coir-filtration",
    },
    {
      title: "Coconut Coir Interior Panels",
      img: "/Coir%20wood%20box.avif",
      link: "/products/coir-interior-panels",
    },
    {
      title: "Coconut Coir Scrubbers",
      img: "/coir%20void%20fillers.avif",
      link: "/products/coir-scrubbers",
    },
    {
      title: "Coir Horticulture",
      img: "/coir%20bubble%20wrap.avif",
      link: "/products/coir-horticulture",
    },
    {
      title: "Other Coir Products",
      img: "/Coir%20Fitted%20Cushioning-2.avif",
      link: "/products",
    },
  ];

  return (
    <main className="bg-[#EDE8DA] text-[#183D2C]">
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
                        </ol>
                      </nav>
            
                      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E6C58F] sm:text-xs">
                        NATURAL ORIGINS  <span className="px-2 text-white/55">|</span>{" "}
                        SUSTAINABLE FUTURE
                      </p>
                      <h1
                        id="trade-shows-hero-heading"
                        style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                        className="max-w-5xl text-4xl leading-[1.06] tracking-[-0.025em] sm:text-6xl lg:text-7xl"
                      >
                        Nature's Finest Fibres. Creating a Greener Tomorrow.
      
                      </h1>
                      <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                        Discover the world of Adhi Annam Coir, where natural coconut fibres are transformed into innovative, high-quality and eco-friendly solutions. Combining traditional expertise with modern manufacturing, we are committed to delivering sustainable products for a better future.
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

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: "url('/images/home-banner.avif')",
        }}
      >
        <div className="absolute inset-0 bg-[#EDE8DA]/60" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#183D2C] mb-6">
            Premium Coconut Coir Products – Manufacturers &amp; Global Exporters
          </h1>

          <p className="text-base md:text-xl text-[#183D2C] max-w-2xl mx-auto mb-8">
            Adhi Annam Coir Comforts Pvt. Ltd. is a leading manufacturer
            and exporter of eco-friendly coir products, promoting
            sustainability through innovation and quality craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">

            <Link
              to="/products"
              className="bg-[#183D2C] hover:bg-[#C5A16A] text-white font-semibold py-3 px-6 rounded transition duration-300"
            >
              Our Products
            </Link>

            <Link
              to="/contact"
              className="bg-white hover:bg-[#C5A16A] text-[#183D2C] font-semibold py-3 px-6 rounded transition duration-300"
            >
              Get in Touch
            </Link>

          </div>

          <div className="flex flex-wrap gap-3 justify-center text-sm">

            <span className="bg-white/80 px-4 py-2 rounded-full text-[#183D2C]">
              ISO 9001 &amp; 14001 Certified
            </span>

            <span className="bg-white/80 px-4 py-2 rounded-full text-[#183D2C]">
              Trusted Since 2007
            </span>

          </div>
        </div>
      </section>


      {/* Our Products Section */}
      <section className="py-16 md:py-20 bg-[#183D2C]">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <p className="text-[#C5A16A] font-semibold uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#EDE8DA]">
              Our Products
            </h2>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (

              <Link
                key={product.title}
                to={product.link}
                className="group block bg-white rounded-xl shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >

                <div className="overflow-hidden">

                  <img
                    src={product.img}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-52 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-xl font-semibold text-[#183D2C] group-hover:text-[#C5A16A] transition">
                    {product.title}
                  </h3>

                </div>

              </Link>

            ))}

          </div>

          <div className="text-center mt-10">

            <Link
              to="/products"
              className="inline-block border border-[#C5A16A] text-[#EDE8DA] px-8 py-3 rounded-md hover:bg-[#C5A16A] hover:text-[#183D2C] transition duration-300"
            >
              Explore All Products
            </Link>

          </div>

        </div>
      </section>


      {/* Latest Blog Section */}
      <section className="py-16 md:py-20 bg-[#EDE8DA]">

        <div className="container mx-auto px-4">

          {/* Blog Heading */}
          <div className="text-center mb-12">

            <p className="text-[#C5A16A] font-semibold uppercase tracking-widest text-sm mb-3">
              Latest Updates
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#183D2C]">
              Latest from Our Blog
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our latest insights, innovations and stories
              about sustainable coir products.
            </p>

          </div>


          {/* Dynamic Blog Cards */}
          {latestBlogs.length > 0 ? (

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {latestBlogs.map((article) => (

                <article
                  key={article.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >

                  {/* Blog Image */}
                  <div className="overflow-hidden">

                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-52 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                  </div>


                  {/* Blog Content */}
                  <div className="p-6">

                    <span className="text-sm font-semibold text-[#C5A16A]">
                      {article.category}
                    </span>

                    <h3 className="text-xl font-semibold mt-3 mb-3 text-[#183D2C] group-hover:text-[#C5A16A] transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>

                    <Link
                      to={`/blog`}
                      className="inline-flex items-center gap-2 mt-5 font-semibold text-[#C5A16A] hover:text-[#183D2C] transition-colors"
                    >
                      Read More <span>→</span>
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <p className="text-center text-gray-600">
              No blog articles available at the moment.
            </p>

          )}


          {/* View All Blogs */}
          <div className="text-center mt-12">

            <Link
              to="/blog"
              className="inline-block bg-[#183D2C] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#C5A16A] hover:text-[#183D2C] transition-colors duration-300"
            >
              View All Blogs
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
