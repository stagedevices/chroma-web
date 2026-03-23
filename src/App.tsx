import { Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackgroundField from "./components/layout/BackgroundField";
import Home from "./pages/Home";
import Modes from "./pages/Modes";
import Pro from "./pages/Pro";
import Press from "./pages/Press";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

const easing: [number, number, number, number] = [0.22, 0.8, 0.28, 1];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <MotionConfig transition={{ duration: 0.6, ease: easing }}>
      <div className="min-h-screen bg-chroma-bg text-slate-900 dark:text-slate-100 flex flex-col">
        <BackgroundField />
        <Header />
        <ScrollToTop />
        <div className="flex-1 pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/modes" element={<Modes />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/press" element={<Press />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </MotionConfig>
  );
}
