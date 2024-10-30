"use client";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { StandaloneShineButton } from "@/components/ui/cta";
import Particles from "@/components/ui/particles";
import { CheckCircle, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import Ripple from "@/components/ui/ripple";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-svh relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#64748b"
      />

      <Navbar />
      <section className="container mx-auto px-4 py-32 relative z-10">
        <div className="absolute inset-0">
          {/* Spotlight principal - centre haut */}
          <div
            className="absolute left-1/2 top-1/4 -translate-x-1/2 
            w-[900px] h-[600px] 
            bg-gradient-to-b from-purple-500/30 via-purple-400/20 to-transparent 
            blur-[140px] rounded-full"
          />

          {/* Spotlight gauche */}
          <div
            className="absolute -left-20 top-1/3 
            w-[500px] h-[500px] 
            bg-gradient-to-r from-violet-600/20 via-purple-400/30 to-transparent 
            blur-[130px] rounded-full"
          />

          {/* Spotlight droit */}
          <div
            className="absolute -right-20 top-1/2 
            w-[500px] h-[500px] 
            bg-gradient-to-l from-indigo-500/20 via-purple-400/30 to-transparent 
            blur-[130px] rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="py-40 space-y-6">
            <Ripple />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10"
            >
              <AnimatedShinyText>✨ Réponse en moins de 24h</AnimatedShinyText>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl font-semibold mb-6 text-stone-100 font-instrument d"
            >
              Votre <span className="text-purple-400/90">projet</span> a du
              cœur, notre code lui donne vie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-md text-stone-400 mb-12 mx-auto max-w-[750px]"
            >
              Transformons vos idées en une vitrine digitale qui attire, inspire
              et engage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center items-center gap-2 text-stone-500 pt-8 pb-2"
            >
              <CheckCircle className="w-4 h-4 text-purple-300" />
              <span className="text-stone-400">10+ Projets Réalisés</span>
              <span className="text-stone-600">|</span>
              <Clock className="w-4 h-4 text-purple-300" />
              <span className="text-stone-400">Support 24/7</span>
              <span className="text-stone-600">|</span>
              <Award className="w-4 h-4 text-purple-300" />
              <span className="text-stone-400">Experts Certifiés</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
              }}
            >
              <StandaloneShineButton>
                Obtenez votre devis gratuitement
              </StandaloneShineButton>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Section Services avec ses spotlights */}
      <div className="relative">
        <div className="absolute inset-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-48
            w-[1200px] h-[600px] 
            bg-gradient-to-b from-purple-300/40 via-purple-50/30 to-transparent 
            blur-[90px] rounded-[100%]"
          />
          <div
            className="absolute right-0 top-96
            w-[500px] h-[500px] 
            bg-gradient-to-l from-violet-600/20 via-purple-400/30 to-transparent 
            blur-[130px] rounded-full"
          />
        </div>
        <Services />
      </div>

      {/* Section Projects avec ses spotlights */}
      <div className="relative">
        <div className="absolute inset-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-90
            w-[1200px] h-[800px] 
            bg-gradient-to-b from-purple-400/30 via-purple-200/20 to-transparent 
            blur-[100px] rounded-[100%]"
          />
          <div
            className="absolute left-0 top-40
            w-[600px] h-[600px] 
            bg-gradient-to-r from-indigo-500/20 via-purple-400/30 to-transparent 
            blur-[130px] rounded-full"
          />
        </div>
        <Projects />
      </div>
    </div>
  );
}
