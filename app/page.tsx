import Navbar from "@/components/Navbar";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Particles from "@/components/ui/particles";
import StarWarsButton from "@/components/ui/starsButton";
import { CheckCircle, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black min-h-svh relative">
      <Particles
        className="absolute inset-0 z-20 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#4B5563"
      />

      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-white relative z-10">
        {/* Effets de lumière complexes */}
        <div className="absolute inset-0">
          {/* Spotlights latéraux majeurs */}
          <div className="absolute -left-1/4 top-0 w-[600px] h-[800px] bg-gradient-to-r from-blue-500/20 via-blue-600/15 to-transparent blur-[150px] rounded-full" />
          <div className="absolute -right-1/4 top-0 w-[600px] h-[800px] bg-gradient-to-l from-blue-500/20 via-blue-600/15 to-transparent blur-[150px] rounded-full" />

          {/* Orbe centrale principale */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/40 blur-[140px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="py-40 space-y-6">
            <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10">
              <AnimatedShinyText>✨ Réponse en moins de 24h</AnimatedShinyText>
            </div>

            <h1 className="text-6xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-instrument">
              Vos idées sont uniques, votre site devrait l'être aussi
            </h1>

            <p className="text-md text-gray-500 mb-12 mx-auto max-w-[750px]">
              Explorez un univers de possibilités infinies et laissez-nous vous
              guider dans la création d'une présence en ligne qui reflète
              parfaitement l'essence et la vision de votre marque.
            </p>

            {/* Section avec badge statistique ou label partenaires */}
            <div className="flex justify-center items-center gap-2 text-gray-400 pt-8 pb-2">
              <CheckCircle className="w-4 h-4" />
              <span>10+ Projets Réalisés</span>
              <span className="text-white/20">|</span>
              <Clock className="w-4 h-4" />
              <span>Support 24/7</span>
              <span className="text-white/20">|</span>
              <Award className="w-4 h-4" />
              <span>Experts Certifiés</span>
            </div>

            {/* CTA et Formulaire de devis */}
            <StarWarsButton text="Obtenez votre devis gratuitement" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-gray-400">
            Une suite complète d'outils pour votre réussite
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">⚡️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Simple et rapide</h3>
            <p className="text-gray-400">
              Interface intuitive pour une prise en main immédiate. Commencez en
              moins de 5 minutes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Hautement sécurisé</h3>
            <p className="text-gray-400">
              Protection de vos données avec les dernières technologies de
              cryptage.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Support 24/7</h3>
            <p className="text-gray-400">
              Une équipe d'experts à votre disposition pour vous accompagner.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
