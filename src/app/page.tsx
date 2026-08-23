import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import UseCases from "./components/UseCases";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full font-sans">
        <Hero />
        <Process />
        <UseCases />
        <Features />
        <FAQ />
      </main>
    </>
  );
}
