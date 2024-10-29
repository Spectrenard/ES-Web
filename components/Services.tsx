"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Bolt, BarChart3, Boxes, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Animation de code défilant pour Sites Web Performants
const CodeAnimation = () => {
  return (
    <div className="w-full h-full bg-[#0F0F10] rounded-xl overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-sm font-mono text-blue-400/70 whitespace-pre"
      >
        {`
const optimizePerformance = () => {
  // Optimisation du chargement
  prefetch(assets);
  lazyLoad(images);
  
  // Mise en cache
  enableCaching();
  compressData();

  // Performance monitoring
  trackMetrics();
  analyzeLCP();
}
        `}
      </motion.div>
    </div>
  );
};

// Dashboard minimaliste pour SEO & Analytics
const AnalyticsDashboard = () => {
  return (
    <div className="w-full h-full bg-[#0F0F10] rounded-xl p-4">
      <div className="space-y-3">
        {[
          { label: "Performance", value: 98 },
          { label: "SEO", value: 94 },
          { label: "Accessibilité", value: 100 },
        ].map((metric, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-400">{metric.label}</span>
              <span className="text-neutral-300">{metric.value}%</span>
            </div>
            <motion.div
              className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <motion.div
                className="h-full bg-blue-500/40 rounded-full"
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
    <div className="w-full h-full bg-[#0F0F10] rounded-xl p-4">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
        {[
          "bg-blue-500/20",
          "bg-purple-500/20",
          "bg-green-500/20",
          "bg-yellow-500/20",
        ].map((color, i) => (
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
        ))}
      </div>
    </div>
  );
};

// Grille de design avec motifs
const DesignPatterns = () => {
  return (
    <div className="w-full h-full bg-[#0F0F10] rounded-xl p-4 overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="rounded-md bg-gradient-to-br from-blue-500/10 to-purple-500/10"
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
    title: "Sites Web Performants",
    description:
      "Développement de sites web rapides et optimisés pour une expérience utilisateur exceptionnelle.",
    header: <CodeAnimation />,
    icon: <Bolt className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "SEO & Analytics",
    description:
      "Optimisation pour les moteurs de recherche et analyse détaillée des performances.",
    header: <AnalyticsDashboard />,
    icon: <BarChart3 className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Applications Sur Mesure",
    description:
      "Développement d'applications web personnalisées répondant à vos besoins.",
    header: <ModularInterface />,
    icon: <Boxes className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Design Moderne",
    description: "Création d'interfaces utilisateur élégantes et responsives.",
    header: <DesignPatterns />,
    icon: <Sparkles className="h-4 w-4 text-blue-500" />,
  },
];

export default function Services() {
  return (
    <div className="px-4 py-20">
      <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-4 mb-16">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-gray-400 flex-grow" />
        <h2 className="text-3xl font-instrument text-white">Que fait-on ?</h2>
        <div className="h-[1px] bg-gradient-to-l from-transparent via-gray-800 to-gray-400 flex-grow" />
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 1 || i === 2 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
