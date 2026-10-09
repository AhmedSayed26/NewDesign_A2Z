import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import Different from "@/components/home/Different";
import Presence from "@/components/home/Presence";
import Skills from "@/components/home/Skills";
import Build from "@/components/home/Build";
import Projects from "@/components/home/Projects";

export const metadata = {
  title: "A2Z",
  description: "A2Z",
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Ticker />
      <Clients />
      <Services />
      <Different />
      <Presence />
      <Skills />
      <Build />
      <Projects />
    </main>
  );
}
