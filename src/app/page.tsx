import Hero from "@/components/home/Hero";
import ClientStrip from "@/components/home/ClientStrip";
import SelectedWork from "@/components/home/SelectedWork";
import Playground from "@/components/home/Playground";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <SelectedWork />
      <Playground />
      <Process />
      <Services />
      <About />
      <Contact />
    </>
  );
}
