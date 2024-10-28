import Link from "next/link";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[60%] max-w-7xl z-50">
      <nav className="w-full px-6 py-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
            Logo
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Fonctionnalités
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              À propos
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ShimmerButton className="px-4 py-2">Connexion</ShimmerButton>
          </div>
        </div>
      </nav>
    </div>
  );
}
