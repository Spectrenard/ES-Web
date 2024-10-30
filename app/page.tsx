import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { StandaloneShineButton } from "@/components/ui/cta";
import Particles from "@/components/ui/particles";
import { CheckCircle, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 min-h-svh relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#ffffff"
      />

      <Navbar />
      <section className="container mx-auto px-4 py-32 relative z-10">
        <div className="absolute inset-0">
          {/* Spotlight principal - forme elliptique plus large */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-gradient-to-r from-orange-300/30 via-orange-200/40 to-orange-300/30 blur-[130px] rounded-full transform rotate-12" />

          {/* Spotlight secondaire - forme plus petite et décalée */}
          <div className="absolute right-1/4 top-2/3 w-[600px] h-[300px] bg-gradient-to-bl from-orange-400/30 via-orange-300/40 to-transparent blur-[100px] rounded-full transform -rotate-15" />

          {/* Orbe décorative - position asymétrique */}
          <div className="absolute left-1/4 bottom-1/4 w-[400px] h-[400px] bg-orange-500/20 blur-[90px] rounded-full animate-pulse" />

          {/* Accent lumineux supplémentaire */}
          <div className="absolute right-0 top-0 w-[300px] h-[800px] bg-gradient-to-b from-orange-400/20 via-orange-300/30 to-transparent blur-[140px] rounded-[30%] transform -rotate-45" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="py-40 space-y-6 ">
            <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10">
              <AnimatedShinyText>✨ Réponse en moins de 24h</AnimatedShinyText>
            </div>

            <h1 className="text-7xl font-semibold mb-6 text-stone-100 font-instrument drop-shadow-[0_0_0.2rem_#ffffff70]">
              Votre <span className="text-orange-300/90">projet</span> a du
              cœur, notre code lui donne vie
            </h1>

            <p className="text-md text-stone-400 mb-12 mx-auto max-w-[750px]">
              Transformons vos idées en une vitrine digitale qui attire, inspire
              et engage.
            </p>

            <div className="flex justify-center items-center gap-2 text-stone-500 pt-8 pb-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-stone-400">10+ Projets Réalisés</span>
              <span className="text-stone-600">|</span>
              <Clock className="w-4 h-4" />
              <span className="text-stone-400">Support 24/7</span>
              <span className="text-stone-600">|</span>
              <Award className="w-4 h-4" />
              <span className="text-stone-400">Experts Certifiés</span>
            </div>

            <StandaloneShineButton>
              Obtenez votre devis gratuitement
            </StandaloneShineButton>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
