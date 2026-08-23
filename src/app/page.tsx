import Compare from "./components/Compare";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Process from "./components/Process";
import Roadmap from "./components/Roadmap";
import UseCases from "./components/UseCases";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full font-sans">
        <Hero />
        <Logos />
        <Process />
        <UseCases />
        <Compare />
        <Features />
        <Roadmap />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
