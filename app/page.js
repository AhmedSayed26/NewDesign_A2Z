import { Suspense } from "react";
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
  title: "A2Z — Media",
  description: "A2Z Media, Production & Strategic Communication provides integrated media and marketing solutions that help companies build a strong presence and achieve real impact.",
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Suspense fallback={null}>
        <Ticker />
      </Suspense>
      <Suspense fallback={null}>
        <Clients />
      </Suspense>
      <Services />
      <Different />
      <Presence />
      <Skills />
      <Build />
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
    </main>
  );
}
