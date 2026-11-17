import React, { useState } from 'react';
import { motion, useReducedMotion } from "framer-motion"
import Hero from '../../Components/about/Hero';
import Intro from '../../Components/about/Intro';
import Stats from '../../Components/about/Stats';
import Gallery from '../../Components/about/Gallery';
import VisionMission from '../../Components/about/VisionMission';
import Team from '../../Components/about/Team';
import CTA from '../../Components/about/CTA';
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



const About = () => {
  const prefersReducedMotion = useReducedMotion()
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
                    <li aria-hidden="true">
                      <ChevronRight size={14} />
                    </li>
                    <li aria-current="page" className="text-white">
                      About
                    </li>
                  </ol>
                </nav>
      
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E6C58F] sm:text-xs">
                  OUR STORY   <span className="px-2 text-white/55">|</span>{" "}
                  OUR PURPOSE <span className="px-2 text-white/55">|</span>{" "} OUR COMMITMENT
                </p>
                <h1
                  id="trade-shows-hero-heading"
                  style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
                  className="max-w-5xl text-4xl leading-[1.06] tracking-[-0.025em] sm:text-6xl lg:text-7xl"
                >
                  Rooted in Nature. Driven by Innovation. Committed to a Greener Tomorrow.

                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  Discover the journey of Adhi Annam Coir, where natural fibres meet innovation and sustainability. With a passion for quality and a commitment to responsible practices, we transform renewable coir resources into versatile solutions for a better world. Explore our values, expertise and vision as we continue to create sustainable possibilities for industries and communities worldwide.
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
      <section>
      <Hero />
      <Intro />
      <Stats />
      <Gallery />
      <VisionMission />
      <Team />
      <CTA />
      </section>
    </main>
  );
};

export default About;
