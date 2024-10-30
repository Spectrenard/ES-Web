import Link from "next/link";
import Particles from "@/components/ui/particles";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function NotFound() {
  return (
    <div className="bg-white min-h-svh relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={50}
        staticity={50}
        color="#94A3B8"
      />

      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/30 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 h-svh flex flex-col items-center justify-center relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-gray-50 rounded-full border border-gray-200">
            <AnimatedShinyText>Erreur 404</AnimatedShinyText>
          </div>

          <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 font-instrument mb-4">
            404
          </h1>

          <h2 className="text-3xl text-gray-900 font-instrument mb-6">
            Page non trouvée
          </h2>

          <p className="text-gray-600 max-w-md mx-auto mb-12">
            La page que vous recherchez semble avoir été téléportée vers une
            autre dimension.
          </p>

          <Link href="/"></Link>
        </div>
      </div>
    </div>
  );
}
