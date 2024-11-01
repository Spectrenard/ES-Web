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
      {/* <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#64748b"
      /> */}

      <Navbar />
      <section className="container mx-auto py-16 md:py-32 relative z-10">
        <div className="absolute inset-0">
          {/* Spotlight principal - centre haut (gardé mais simplifié sur mobile) */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1/4 
            w-[200px] md:w-[900px] h-[200px] md:h-[600px] 
            bg-gradient-to-b from-purple-500/20 md:from-purple-500/30 via-purple-400/10 md:via-purple-400/20 to-transparent 
            blur-[60px] md:blur-[140px] rounded-full"
          />

          {/* Spotlight gauche (masqué sur mobile) */}
          <div
            className="hidden md:block absolute -left-20 top-1/3 
            w-[500px] h-[500px] 
            bg-gradient-to-r from-violet-600/20 via-purple-400/30 to-transparent 
            blur-[130px] rounded-full"
          />

          {/* Spotlight droit (masqué sur mobile) */}
          <div
            className="hidden md:block absolute -right-20 top-1/2 
            w-[500px] h-[500px] 
            bg-gradient-to-l from-indigo-500/20 via-purple-400/30 to-transparent 
            blur-[130px] rounded-full"
          />
        </div>

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
        <div className="absolute inset-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-48
            w-[300px] md:w-[1200px] h-[300px] md:h-[600px] 
            bg-gradient-to-b from-purple-300/20 md:from-purple-300/30 via-purple-50/10 md:via-purple-50/20 to-transparent 
            blur-[60px] md:blur-[90px] rounded-[100%]"
          />
          <div
            className="hidden md:block absolute -right-20 top-96
            w-[500px] h-[500px] 
            bg-gradient-to-l from-violet-600/20 via-purple-400/20 to-transparent 
            blur-[130px] rounded-full"
          />
        </div>
        <Services />
      </div>

      {/* Section Projects */}
      <div id="projects" className="relative">
        <div className="absolute inset-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-90
            w-[300px] md:w-[1200px] h-[400px] md:h-[800px] 
            bg-gradient-to-b from-purple-400/15 md:from-purple-400/25 via-purple-200/10 md:via-purple-200/15 to-transparent 
            blur-[60px] md:blur-[100px] rounded-[100%]"
          />
          <div
            className="hidden md:block absolute -left-20 top-40
            w-[600px] h-[600px] 
            bg-gradient-to-r from-indigo-500/20 via-purple-400/20 to-transparent 
            blur-[130px] rounded-full"
          />
        </div>
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
        <div className="absolute inset-0 z-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1/4
            w-[300px] md:w-[1200px] h-[400px] md:h-[800px]
            bg-gradient-to-b from-purple-400/10 md:from-purple-400/15 via-purple-300/5 md:via-purple-300/10 to-transparent 
            blur-[60px] md:blur-[130px] rounded-[60%]"
          />
          <div
            className="hidden md:block absolute -right-20 top-1/3
            w-[500px] h-[800px] rotate-[15deg]
            bg-gradient-to-l from-indigo-500/15 via-purple-400/10 to-transparent 
            blur-[130px]"
          />
        </div>
        <div className="relative z-10">
          <Faq />
        </div>
      </div>
      {/* Section Contact */}
      <div id="contact" className="relative -mt-1">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-20
            w-[300px] md:w-[900px] h-[300px] md:h-[700px]
            bg-gradient-to-b from-purple-500/15 md:from-purple-500/20 via-purple-400/10 md:via-purple-400/15 to-transparent 
            blur-[60px] md:blur-[120px]"
          />
          <div
            className="hidden md:block absolute -left-20 bottom-0
            w-[500px] h-[500px] rotate-12
            bg-gradient-to-r from-indigo-500/15 via-slate-400/15 to-transparent 
            blur-[100px]"
          />
        </div>
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
