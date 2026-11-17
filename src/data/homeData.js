// Home page data for Adhi Annam Coir
// All sections are defined here to keep JSX clean and reusable.

export const homeData = {
  // Hero section
  hero: {
    title: "Premium Coconut Coir Products – Manufacturers & Global Exporters",
    subtitle: "Eco‑friendly, high‑performance solutions for packaging, horticulture, filtration, and green building.",
    backgroundImage: "/images/home-banner.avif",
    overlayColor: "bg-[#183D2C]/70",
    ctaPrimary: { label: "Our Products", to: "/products" },
    ctaSecondary: { label: "Get in Touch", to: "/contact" },
  },
  // About section
  about: {
    title: "About Adhi Annam Coir",
    description: "Adhi Annam Coir Comforts Pvt. Ltd. is a leading manufacturer and exporter of eco‑friendly coir products. We combine traditional craftsmanship with modern technology to deliver sustainable solutions that reduce carbon footprints and support circular economies.",
    image: "/images/about/about-coir.avif",
  },
  // Featured products (showcase grid)
  products: [
    { title: "Coir Packaging", img: "/images/about/gallery/coir_packaging.avif", link: "/products/coir-packaging" },
    { title: "Coir Filtration", img: "/Coir%20Foam%20Block.avif", link: "/products/coir-filtration" },
    { title: "Coir Interior Panels", img: "/Coir%20wood%20box.avif", link: "/products/coir-interior-panels" },
    { title: "Coir Scrubbers", img: "/coir%20void%20fillers.avif", link: "/products/coir-scrubbers" },
    { title: "Coir Horticulture", img: "/coir%20bubble%20wrap.avavif", link: "/products/coir-horticulture" },
    { title: "Other Coir Products", img: "/Coir%20Fitted%20Cushioning-2.avif", link: "/products" },
  ],
  // Company highlights / statistics
  stats: [
    { label: "Years in Business", value: "15+" },
    { label: "Global Exports", value: "30+ Countries" },
    { label: "ISO Certifications", value: "ISO 9001 & 14001" },
    { label: "Eco‑Score", value: "Top 5% in Green Manufacturing" },
  ],
  // Sustainability block
  sustainability: {
    title: "Sustainability at the Core",
    description: "Our coir products are 100 % biodegradable, reduce plastic waste, and help lower embodied carbon across supply chains.",
    image: "/images/about/gallery/eco_coir.avif",
  },
  // Contact CTA
  contact: {
    title: "Ready to Transform Your Projects?",
    button: { label: "Contact Us", to: "/contact" },
  },
};
