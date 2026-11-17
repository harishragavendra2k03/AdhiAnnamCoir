// HomeHero component – replicates Trade Shows hero style with custom content
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeHero = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate flex min-h-[590px] items-end overflow-hidden bg-[#183D2C] text-white sm:min-h-[660px] lg:min-h-[700px]"
    >
      {/* Background image – you can replace the URL with a coir‑related image */}
      <motion.img
        src="https://static.wixstatic.com/media/d79127_c450c39e7c8247778750c4b1108fec67~mv2.png"
        alt=""
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { scale: 1.04 }}
        animate={prefersReducedMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102A1E]/90 via-[#183D2C]/70 to-[#183D2C]/35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#102A1E]/35 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        <nav aria-label="Breadcrumb" className="mb-9">
          <ol className="flex items-center gap-2 text-sm text-white/75">
            <li>
              <Link to="/" className="transition-colors hover:text-white">Home</Link>
            </li>
          </ol>
        </nav>
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A16A] sm:text-xs">
          NATURAL ORIGINS | SUSTAINABLE FUTURE
        </p>
        <h1
          id="home-hero-heading"
          style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
          className="max-w-5xl text-4xl leading-[1.06] tracking-[-0.025em] sm:text-6xl lg:text-7xl text-white"
        >
          Nature's Strength. Building a Sustainable Future.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
          Discover premium coir products crafted from natural coconut fibres, combining traditional expertise with innovative, eco‑friendly solutions for a better tomorrow.
        </p>
        <Link
          to="/products"
          className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
        >
          Explore Our Products
          <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeHero;
