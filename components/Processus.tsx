import Button from "./ui/Button";
import { StandaloneShineButton } from "./ui/cta";
import { PlayCircle, Rocket, ArrowRight, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Processus() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const etapes = [
    {
      numero: "01",
      titre: "Découverte",
      description:
        "Échange pour comprendre vos objectifs et définir vos besoins",
      icon: "🤝",
      sousTitre: "Premier contact",
    },
    {
      numero: "02",
      titre: "Proposition",
      description:
        "Présentation détaillée de la solution, du budget et du planning prévisionnel",
      icon: "📝",
      sousTitre: "Plan d'action",
    },
    {
      numero: "03",
      titre: "Production",
      description:
        "Développement itératif avec points d'étape réguliers et validations",
      icon: "⚙️",
      sousTitre: "Développement",
    },
    {
      numero: "04",
      titre: "Livraison",
      description:
        "Mise en production et déploiement de votre projet après validation finale",
      icon: "🚀",
      sousTitre: "Final",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-32 relative"
    >
      {/* Spotlight pour la section */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
          w-[1000px] h-[600px] 
          bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent 
          blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={titleVariants}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1 bg-white/10 rounded-full text-white/50  text-sm border border-white/20">
              Notre méthode
            </span>
          </div>

          <h2 className="text-5xl font-bold text-center mb-4 text-stone-100 font-instrument">
            Notre Processus de
            <span className="text-purple-400/90"> Réalisation</span>
          </h2>

          <p className="text-stone-400 text-center max-w-2xl mx-auto">
            Une approche méthodique et transparente pour transformer votre
            vision en réalité
          </p>

          <motion.div
            variants={statsVariants}
            className="flex justify-center gap-12 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold ">10+</div>
              <div className="text-sm text-stone-400">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">97%</div>
              <div className="text-sm text-stone-400">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold ">3-7</div>
              <div className="text-sm text-stone-400">Semaines en Moyenne</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapes.map((etape, index) => (
            <motion.div
              key={etape.numero}
              variants={cardVariants}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              />
              <div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8
                  transform transition-all duration-300 hover:scale-105
                 "
              >
                <div className="text-4xl mb-4">{etape.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-purple-400/90 text-3xl font-bold">
                    {etape.numero}
                  </div>
                  <div className="h-1 w-12 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white/60 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-stone-100">
                  {etape.titre}
                </h3>
                <div className="text-sm text-purple-400/70 mb-2">
                  {etape.sousTitre}
                </div>
                <p className="text-stone-400">{etape.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={titleVariants} className="mt-20 text-center">
          <StandaloneShineButton
            icon={
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            }
          >
            Démarrer votre projet
          </StandaloneShineButton>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
    </motion.section>
  );
}
