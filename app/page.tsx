import Navbar from "@/components/Navbar";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";
import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 min-h-svh relative">
      <Particles
        className="absolute inset-0 z-10"
        quantity={100}
        staticity={50}
        color="#4B5563"
      />

      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="py-40">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
              <span className="text-blue-400">✨ Nouveau : IA intégrée</span>
            </div>

            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transformez vos idées en réalité
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              La plateforme tout-en-un pour développer et déployer vos projets
              en un temps record. Propulsée par l'IA pour une productivité
              maximale.
            </p>

            <div className="flex gap-6 justify-center">
              <ShimmerButton className="px-8 py-4">
                Commencer gratuitement
              </ShimmerButton>
              <ShimmerButton className="px-8 py-4">Voir la démo</ShimmerButton>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-center text-sm text-gray-400 mb-4">
              Ils nous font confiance
            </p>
            <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <InfiniteLogoCarousel />
            </div>
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
