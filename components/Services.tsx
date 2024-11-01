"use client";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Bolt, BarChart3, Boxes, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Particles from "./ui/particles";
import { useInView } from "@/hooks/useInView";
import type { CSSProperties } from "react";

interface StatItem {
  label: string;
  value: string;
  trend: string;
}

interface ChartStyle extends CSSProperties {
  "--chart-height": string;
  "--delay": string;
}

// Animation de code défilant pour Sites Web Performants
const CodeAnimation = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const codeContent = `// Optimisation des performances
import { lazy, Suspense } from 'react';
import { optimizeImages } from './utils';

// Chargement différé des composants
const HeavyComponent = lazy(() => import('./Heavy'));

// Configuration du cache
const cacheConfig = {
  strategy: 'stale-while-revalidate',
  maxAge: 60 * 60 * 24,
};

// Optimisation des images
const images = await optimizeImages({
  quality: 80,
  formats: ['webp', 'avif'],
});

// Mise en cache des API
const cache = new Cache(cacheConfig);
const data = await cache.fetch('/api/data');

// Préchargement des ressources
<link rel="preload" href="font.woff2" />;
<link rel="preconnect" href="https://api.example.com" />;

// Optimisation des CSS
const criticalCSS = extractCritical(App);
const styles = optimizeCSS(criticalCSS);

// Compression Gzip/Brotli
app.use(compression({ level: 9 }));

// Service Worker pour le offline
registerServiceWorker('./sw.js');

// Métriques de performance
measureWebVitals({
  CLS: 0.1,  // Cumulative Layout Shift
  FID: 100,  // First Input Delay
  LCP: 2.5,  // Largest Contentful Paint
});`;

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-full bg-slate-900 rounded-xl overflow-hidden"
    >
      <div
        className={`${
          isInView ? "animate-code-scroll" : ""
        } text-sm font-mono text-slate-300 whitespace-pre leading-relaxed p-4`}
      >
        {codeContent}
        {/* On duplique le contenu pour créer l'effet de défilement infini */}
        {codeContent}
      </div>
    </div>
  );
};

// Dashboard minimaliste pour SEO & Analytics
const AnalyticsDashboard = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  const stats: StatItem[] = [
    { label: "Visibilité", value: "94%", trend: "+12%" },
    { label: "Classement", value: "Top 3", trend: "+5" },
  ];

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-[150px] bg-slate-900 rounded-xl p-2 md:p-3"
    >
      <div className="flex flex-col h-full">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-300">Analytics Overview</span>
          <div
            className={`h-1.5 w-1.5 rounded-full bg-green-400 ${
              isInView ? "animate-live-dot" : ""
            }`}
          />
        </div>

        {/* Statistiques principales */}
        <div className="grid grid-cols-2 gap-1 md:gap-2 mb-2">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`opacity-0 bg-slate-800/50 rounded-lg p-1.5 md:p-2 ${
                isInView ? "animate-stats-fade-in" : ""
              }`}
              style={{ "--delay": `${i * 0.2}s` } as ChartStyle}
            >
              <div className="text-[10px] md:text-xs text-slate-400">
                {stat.label}
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs md:text-sm font-semibold text-slate-200">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs text-green-400">
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Graphique simplifié */}
        <div className="flex items-end gap-1 h-14 mt-auto">
          {[40, 70, 55, 90, 60, 75, 85].map((height, i) => (
            <div
              key={i}
              className={`flex-1 bg-purple-400/20 rounded-t ${
                isInView ? "animate-chart-grow" : ""
              }`}
              style={
                {
                  "--chart-height": `${height}%`,
                  "--delay": `${i * 0.1}s`,
                  backgroundColor:
                    i === 6
                      ? "rgb(192, 132, 252, 0.5)"
                      : "rgb(192, 132, 252, 0.2)",
                } as ChartStyle
              }
            />
          ))}
        </div>

        {/* Labels du graphique */}
        <div className="flex justify-between mt-1">
          {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
            <span
              key={i}
              className={`opacity-0 text-[9px] text-slate-400 ${
                isInView ? "animate-chart-label-fade" : ""
              }`}
              style={{ "--delay": `${0.8 + i * 0.1}s` } as ChartStyle}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Animation pour Applications Web
const WebAppAnimation = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-[150px] bg-slate-900 rounded-xl p-2 md:p-4"
    >
      <div className="relative h-full">
        <div
          className={`absolute inset-0 border border-purple-400/20 rounded-lg ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="h-4 bg-purple-400/10 rounded-t-lg flex items-center px-2 gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-purple-300/40" />
            ))}
          </div>

          <div className="p-2 grid grid-cols-2 gap-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`h-[30px] bg-purple-400/10 rounded ${
                  isInView ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Grille de design avec motifs
const DesignPatterns = () => {
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="w-full h-[120px] md:h-full bg-slate-900 rounded-xl p-2 md:p-4 overflow-hidden"
    >
      <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full min-h-[100px]">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={`rounded-md bg-gradient-to-br from-white to-slate-900 min-h-[10px] ${
              isInView ? "animate-grid-pattern-pulse" : ""
            }`}
            style={{ "--delay": `${i * 0.1}s` } as ChartStyle}
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
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen px-2 md:px-4 py-12 md:py-20 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-2 md:gap-4 mb-8 md:mb-16">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-300 flex-grow" />
          <h2 className="text-2xl md:text-4xl font-instrument text-gray-90 font-bold">
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
                "bg-[#1A1614]/40 backdrop-blur-sm border",
                "hover:bg-[#1A2B3C]/80 hover:border-purple-400/20 hover:shadow-lg",
                "hover:shadow-purple-500/5",
                {
                  "md:col-span-2": i === 1 || i === 2,
                  "col-span-1": true,
                }
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
