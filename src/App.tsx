import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/sections/Hero';
import { Demos } from '@/components/sections/Demos';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Community } from '@/components/sections/Community';

export default function App() {
  return (
    <div className="min-h-screen bg-chroma-bg">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <Demos />
        <Features />
        <About />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
