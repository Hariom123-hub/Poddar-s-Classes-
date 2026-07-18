/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Subjects from "./components/Subjects";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingFacebook from "./components/FloatingFacebook";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Subjects />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingFacebook />
    </div>
  );
}
