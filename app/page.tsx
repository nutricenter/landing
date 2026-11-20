// Landing page — main entry point
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import ProductShowcase from "@/components/ProductShowcase";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ProductShowcase />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
