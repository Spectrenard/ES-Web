"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Bolt, BarChart3, Boxes, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Particles from "./ui/particles";

// Animation de code défilant pour Sites Web Performants
const CodeAnimation = () => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
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
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl p-4">
      <div className="space-y-3">
        {[
          { label: "Performance", value: 98 },
          { label: "SEO", value: 94 },
          { label: "Accessibilité", value: 100 },
        ].map((metric, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-300">{metric.label}</span>
              <span className="text-orange-300">{metric.value}%</span>
            </div>
            <motion.div
              className="h-1 bg-slate-950 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.div
                className="h-full bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${metric.value}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Interface modulaire pour Applications Sur Mesure
const ModularInterface = () => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
        {["bg-slate-950", "bg-slate-800", "bg-orange-500", "bg-slate-300"].map(
          (color, i) => (
            <motion.div
              key={i}
              className={`rounded-lg ${color}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          )
        )}
      </div>
    </div>
  );
};

// Grille de design avec motifs
const DesignPatterns = () => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-xl p-4 overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-md bg-gradient-to-br from-orange-500 to-slate-900"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
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
    title: "Performance Web",
    description:
      "Sites web ultra-rapides et optimisés pour une expérience fluide.",
    header: <CodeAnimation />,
    icon: <Bolt className="h-4 w-4 text-[#D4733E]" />,
  },
  {
    title: "SEO & Analytics",
    description:
      "Visibilité maximale et suivi précis des performances de votre site.",
    header: <AnalyticsDashboard />,
    icon: <BarChart3 className="h-4 w-4 text-[#D4733E]" />,
  },
  {
    title: "Applications Web",
    description: "Solutions sur mesure adaptées à vos besoins spécifiques.",
    header: <ModularInterface />,
    icon: <Boxes className="h-4 w-4 text-[#D4733E]" />,
  },
  {
    title: "Design UI/UX",
    description:
      "Interfaces modernes et intuitives qui captivent vos utilisateurs.",
    header: <DesignPatterns />,
    icon: <Sparkles className="h-4 w-4 text-[#D4733E]" />,
  },
];

export default function Services() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 px-4 py-20 overflow-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#ffffff"
      />
      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-300/40 via-orange-50/30 to-transparent blur-[90px] rounded-[100%]" />

        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#FFB88C]/30 blur-[100px] rounded-full" />
      </div>

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
                "bg-[#1A1614]/40 backdrop-blur-sm border border-[#2D1810]",
                "hover:bg-[#1A2B3C]/80 hover:border-[#89B4D6]/20 hover:shadow-lg",
                "hover:shadow-[#D4733E]/5",
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
