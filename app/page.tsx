"use client";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { StandaloneShineButton } from "@/components/ui/cta";
import Particles from "@/components/ui/particles";
import { CheckCircle, Clock, Award } from "lucide-react";
import Ripple from "@/components/ui/ripple";
import Projects from "@/components/Projects";
import Processus from "@/components/Processus";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div
      id="header"
      className="bg-gray-950 min-h-svh relative overflow-x-hidden"
    >
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#64748b"
      />

      <Navbar />
      <section className="container mx-auto py-16 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative max-sm:pt-20">
          <div className="py-20 md:py-40 space-y-6">
            <Ripple />
            <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10 opacity-0 animate-[bounceIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              <AnimatedShinyText>✨ Réponse en 24h</AnimatedShinyText>
            </div>

            <h1 className="text-3xl md:text-6xl font-semibold mb-6 text-stone-100 font-instrument">
              <span className="block opacity-0 animate-header-slide-up-1 px-4">
                Un site web sur mesure,
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-2 px-4">
                une <span className="text-purple-400/90">présence </span>
                qui inspire
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-3">
                <span className="text-purple-400/90">confiance</span>
              </span>
            </h1>

            <p className="max-sm:text-xs text-md text-stone-400 px-4 mb-12 mx-auto max-w-[750px] opacity-0 animate-header-scale-up">
              De la conception à la mise en ligne, nous développons des sites
              web modernes et performants qui correspondent à vos objectifs.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-stone-500 pt-8 pb-2">
              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.2s_forwards]">
                <CheckCircle className="w-4 h-4 text-purple-300" />
                <span className="text-stone-400">Sites Web Sur Mesure</span>
              </div>

              <span className="hidden md:inline text-stone-600 opacity-0 animate-[fadeIn_0.3s_ease-out_1.3s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.4s_forwards]">
                <Clock className="w-4 h-4 text-purple-300" />
                <span className="text-stone-400">Support 24/7</span>
              </div>

              <span className="hidden md:inline text-stone-600 opacity-0 animate-[fadeIn_0.3s_ease-out_1.5s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.6s_forwards]">
                <Award className="w-4 h-4 text-purple-300" />
                <span className="text-stone-400">Développeurs Certifiés</span>
              </div>
            </div>

            <div className="opacity-0 animate-[zoomIn_0.5s_ease-out_1.8s_forwards]">
              <StandaloneShineButton onClick={() => scrollToSection("contact")}>
                Obtenez votre devis gratuitement
              </StandaloneShineButton>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      <div id="services" className="relative">
        <Services />
      </div>

      {/* Section Projects */}
      <div id="projects" className="relative">
        <Projects />
      </div>
      <div id="processus" className="relative">
        <Processus />
      </div>
      <div>
        <Reviews />
      </div>
      {/* Section FAQ */}
      <div id="faq" className="relative bg-gray-950">
        <div className="relative z-10">
          <Faq />
        </div>
      </div>
      {/* Section Contact */}
      <div id="contact" className="relative -mt-1">
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
