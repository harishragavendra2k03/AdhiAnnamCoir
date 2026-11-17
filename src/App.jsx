import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import BackToTop from "./Components/common/BackToTop";
import WhatsAppFloat from "/Components/common/WhatsAppFloat";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/about/About"; 
import TradeShows from "./pages/TradeShows";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
// Product Category Subpages – canonical routes
import CoirPackaging from "./pages/products/CoirPackaging";
import CoirFiltration from "./pages/products/CoirFiltration";
import CoirInteriorPanel from "./pages/products/CoirInteriorPanel";
import CoirScrubbers from "./pages/products/CoirScrubbers";
import CoirHorticulture from "./pages/products/CoirHorticulture";
import CoirRollSheet from "./pages/products/CoirRollSheet";
import CoirErosionControl from "./pages/products/CoirErosionControl";
import CoirMattresses from "./pages/products/CoirMattresses";
import CoirCorporateGifts from "./pages/products/CoirCorporateGifts";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      

        {/* Canonical category routes */}
        <Route path="/products/coir-packaging" element={<CoirPackaging />} />
        <Route path="/products/coir-filtration" element={<CoirFiltration />} />
        <Route path="/products/coir-interior-panels" element={<CoirInteriorPanel />} />
        <Route path="/products/coir-scrubbers" element={<CoirScrubbers />} />
        <Route path="/products/coir-horticulture" element={<CoirHorticulture />} />
        <Route path="/products/coir-rolls-and-sheets" element={<CoirRollSheet />} />
        <Route path="/products/coir-erosion-control" element={<CoirErosionControl />} />
        <Route path="/products/coir-mattresses" element={<CoirMattresses />} />
        <Route path="/products/coir-corporate-gifts" element={<CoirCorporateGifts />} />

        {/* Redirects for legacy/alternate URLs */}
        <Route path="/products/coir-interior-panel" element={<Navigate to="/products/coir-interior-panels" replace />} />
        <Route path="/products/coir-roll-and-sheet" element={<Navigate to="/products/coir-rolls-and-sheets" replace />} />
        <Route path="/products/erosion-control" element={<Navigate to="/products/coir-erosion-control" replace />} />
        <Route path="/products/mattresses" element={<Navigate to="/products/coir-mattresses" replace />} />
        <Route path="/products/corporate-gifts" element={<Navigate to="/products/coir-corporate-gifts" replace />} />

        {/* Dynamic product detail pages */}
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetails />} />
        <Route path="/products/:slug" element={<ProductDetails />} />

        {/* Other pages */}
        <Route path="/tradeShows" element={<TradeShows />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
