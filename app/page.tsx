import ShimmerButton from "@/components/ui/shimmer-button";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <header className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 bottom-0 mx-auto max-w-[1200px] flex justify-between"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          {[...Array(6)].map((_, index) => (
            <div key={index} className="relative w-px h-full bg-white/10">
              <div
                className="absolute left-0 h-24 w-full bg-gradient-to-b from-transparent via-white to-transparent animate-line"
                style={{
                  animationDelay: `${index * 0.8}s`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Votre titre ici
          </h1>
          <p className="text-xl mb-8 text-white">
            Votre sous-titre ou description ici
          </p>
          <ShimmerButton />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Contenu principal */}
      </main>
    </div>
  );
}
