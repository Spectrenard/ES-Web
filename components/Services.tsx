"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Bolt, BarChart3, Boxes, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Particles from "./ui/particles";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation de code défilant pour Sites Web Performants
const CodeAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="w-full h-full bg-slate-900 rounded-xl overflow-hidden"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: "-50%" } : { y: 0 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="text-sm font-mono text-slate-300 whitespace-pre leading-relaxed"
      >
        {`
// Performance optimization
const optimizeWebsite = async () => {
  // Assets preloading
  await preloadCriticalAssets();
  lazyLoadImages();
  
  // Core optimizations
  minifyResources();
  enableCompression();
  setupCaching();
  
  // Performance metrics
  measureLCP();
  trackUserExperience();
  optimizeForCore();
}
// Real-time monitoring
const monitor = () => {
  trackPerformance({
    memory: true,
    network: true,
    rendering: true
  });
  
  optimizeOnTheFly();
  reportMetrics();
}
// Performance optimization
const optimizeWebsite = async () => {
  // Assets preloading
  await preloadCriticalAssets();
  lazyLoadImages();
  
  // Core optimizations
  minifyResources();
  enableCompression();
  setupCaching();
  
  // Performance metrics
  measureLCP();
  trackUserExperience();
  optimizeForCore();
}
        `}
      </motion.div>
    </div>
  );
};

// Dashboard minimaliste pour SEO & Analytics
const AnalyticsDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="w-full h-[150px] bg-slate-900 rounded-xl p-3">
      <div className="flex flex-col h-full">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-300">Analytics Overview</span>
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Statistiques principales */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          {[
            { label: "Visibilité", value: "94%", trend: "+12%" },
            { label: "Classement", value: "Top 3", trend: "+5" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-slate-800/50 rounded-lg p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-xs text-slate-400">{stat.label}</div>
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold text-slate-200">
                  {stat.value}
                </span>
                <span className="text-xs text-green-400">{stat.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Graphique simplifié */}
        <div className="flex items-end gap-1 h-14 mt-auto">
          {[40, 70, 55, 90, 60, 75, 85].map((height, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-purple-400/20 rounded-t"
              initial={{ height: 0 }}
              animate={
                isInView
                  ? {
                      height: `${height}%`,
                      backgroundColor:
                        i === 6
                          ? "rgb(192, 132, 252, 0.5)"
                          : "rgb(192, 132, 252, 0.2)",
                    }
                  : { height: 0 }
              }
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "backOut",
              }}
            />
          ))}
        </div>

        {/* Labels du graphique */}
        <div className="flex justify-between mt-1">
          {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
            <motion.span
              key={i}
              className="text-[9px] text-slate-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              {day}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Nouvelle animation pour Applications Web
const WebAppAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="w-full h-[150px] bg-slate-900 rounded-xl p-4">
      <div className="relative h-full">
        {/* Fenêtre principale */}
        <motion.div
          className="absolute inset-0 border border-purple-400/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Barre de navigation simulée */}
          <div className="h-4 bg-purple-400/10 rounded-t-lg flex items-center px-2 gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-purple-300/40" />
            ))}
          </div>

          {/* Éléments animés */}
          <div className="p-2 grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="h-[30px] bg-purple-400/10 rounded"
                initial={{ x: -20, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        x: 0,
                        opacity: [0.3, 1, 0.3],
                      }
                    : { x: -20, opacity: 0 }
                }
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Grille de design avec motifs
const DesignPatterns = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className="w-full h-full bg-slate-900 rounded-xl p-4 overflow-hidden"
    >
      <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-md bg-gradient-to-br from-white to-slate-900"
            animate={
              isInView
                ? {
                    opacity: [0.3, 1, 0.3],
                  }
                : { opacity: 0.3 }
            }
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    title: "Design UI/UX",
    description:
      "Interfaces modernes et intuitives qui captivent vos utilisateurs.",
    header: <DesignPatterns />,
    icon: <Sparkles className="h-4 w-4 text-purple-300" />,
  },
  {
    title: "Sites/Applications Web",
    description: "Solutions sur mesure adaptées à vos besoins spécifiques.",
    header: <WebAppAnimation />,
    icon: <Boxes className="h-4 w-4 text-purple-300" />,
  },
  {
    title: "Optimisation SEO",
    description:
      "Visibilité optimale de votre site sur Google et autres moteurs de recherche.",
    header: <AnalyticsDashboard />,
    icon: <BarChart3 className="h-4 w-4 text-purple-300" />,
  },
  {
    title: "Performance Web",
    description:
      "Sites web ultra-rapides et optimisés pour une expérience fluide.",
    header: <CodeAnimation />,
    icon: <Bolt className="h-4 w-4 text-purple-300" />,
  },
];

export default function Services() {
  return (
    <div className="relative w-full min-h-screen px-4 py-20 overflow-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#ffffff"
      />

      {/* Contenu avec titre adapté */}
      <div className="relative z-10">
        <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-4 mb-16">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-300 flex-grow" />
          <h2 className="text-4xl font-instrument text-gray-90 font-bold">
            Que fait-on ?
          </h2>
          <div className="h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-300 flex-grow" />
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn(
                "transition-all duration-300 hover:scale-[1.02]",
                "bg-[#1A1614]/40 backdrop-blur-sm border ",
                "hover:bg-[#1A2B3C]/80 hover:border-purple-400/20 hover:shadow-lg",
                "hover:shadow-purple-500/5",
                {
                  "md:col-span-2": i === 1 || i === 2,
                }
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
