import Navbar from "@/components/Navbar";
import Particles from "@/components/ui/particles";
import ShimmerButton from "@/components/ui/shimmer-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 to-black min-h-svh relative">
      <Particles
        className="absolute inset-0 z-20 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#4B5563"
      />

      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-white relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20  via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="py-40">
            <div className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
              <span className="text-blue-400">✨ Réponse en moins de 24h</span>
            </div>

            <h1 className="text-7xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 font-instrument ">
              Transformons vos idées en réalité
            </h1>
            <p className="text-md text-gray-500 mb-12 mx-auto max-w-[750px]">
              Explorez un univers de possibilités infinies et laissez-nous vous
              guider dans la création d'une présence en ligne qui reflète
              parfaitement l'essence et la vision de votre marque.
            </p>

            <div className="flex gap-6 justify-center">
              <ShimmerButton variant="secondary" className="px-8 py-4">
                Obtenir un devis gratuitement
              </ShimmerButton>
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
