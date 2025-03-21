"use client";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { StandaloneShineButton } from "@/components/ui/cta";
import { CheckCircle, Clock, Award } from "lucide-react";
import Ripple from "@/components/ui/ripple";
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
      className="bg-gradient-to-b from-sky-50 to-white min-h-screen overflow-x-hidden relative overflow-fix"
    >
      {/* Éléments de design du background en CSS pur */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grand spotlight bleu */}
        <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] rounded-full bg-sky-400/20 blur-[100px] spotlight spotlight-blue"></div>
        {/* Grille CSS */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #718096 1px, transparent 1px), 
                                 linear-gradient(to bottom, #718096 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div
          className="hidden md:block absolute bottom-[30%] right-[15%] w-[250px] h-[250px] opacity-10 rotate-45"
          style={{
            backgroundImage: `radial-gradient(circle, #718096 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <Navbar />
      <section className="container mx-auto py-16 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative max-sm:pt-20">
          <div className="py-12 xl:py-28 2xl:py-40 space-y-6">
            <div className="inline-block px-4 py-1 bg-sky-100 rounded-full border border-sky-200 opacity-0 animate-[bounceIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              <AnimatedShinyText className="text-sky-700">
                ✨ Réponse en 24h
              </AnimatedShinyText>
            </div>

            <h1 className="text-3xl md:text-6xl font-semibold mb-6 text-slate-800 font-syne">
              <span className="block opacity-0 animate-header-slide-up-1 px-4">
                Un site web sur mesure,
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-2 px-4">
                une <span className="text-sky-600">présence </span>
                qui inspire
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-3">
                <span className="text-sky-600">confiance</span>
              </span>
            </h1>

            <p className="max-sm:text-xs text-md text-slate-600 px-4 mb-12 mx-auto max-w-[750px] opacity-0 animate-header-scale-up">
              De la conception à la mise en ligne, nous développons des sites
              web modernes et performants qui correspondent à vos objectifs.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-slate-600 pt-8 pb-2">
              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.2s_forwards]">
                <CheckCircle className="w-4 h-4 text-sky-500" />
                <span className="text-slate-700">Sites Web Sur Mesure</span>
              </div>

              <span className="hidden md:inline text-slate-400 opacity-0 animate-[fadeIn_0.3s_ease-out_1.3s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.4s_forwards]">
                <Clock className="w-4 h-4 text-sky-500" />
                <span className="text-slate-700">Support 24/7</span>
              </div>

              <span className="hidden md:inline text-slate-400 opacity-0 animate-[fadeIn_0.3s_ease-out_1.5s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.6s_forwards]">
                <Award className="w-4 h-4 text-sky-500" />
                <span className="text-slate-700">Développeurs Certifiés</span>
              </div>
            </div>

            <div className="opacity-0 animate-[zoomIn_0.5s_ease-out_1.8s_forwards]">
              <StandaloneShineButton
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600"
              >
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
      {/* Section Processus */}
      <div
        id="processus"
        className="relative bg-gradient-to-b from-white to-sky-50"
      >
        <Processus />
      </div>
      {/* Section Reviews */}
      <div
        id="reviews"
        className="relative bg-gradient-to-b from-sky-50 to-white"
      >
        <Reviews />
      </div>
      {/* Section FAQ */}
      <div id="faq" className="relative">
        <div className="relative z-10">
          <Faq />
        </div>
      </div>
      {/* Section Contact */}
      <div
        id="contact"
        className="relative bg-gradient-to-b from-white to-sky-50"
      >
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
