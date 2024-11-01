import { StandaloneShineButton } from "./ui/cta";
import { ArrowRight } from "lucide-react";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

export default function Processus() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

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
    <section ref={sectionRef} className="py-16 md:py-32 relative isolate">
      {/* Spotlight ajusté pour mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
          w-[200px] md:w-[1000px] h-[300px] md:h-[600px] 
          bg-gradient-to-b from-purple-500/10 via-purple-400/5 to-transparent 
          blur-[60px] md:blur-[100px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center space-y-4 mb-12 md:mb-16 opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
        >
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-4 py-1 bg-white/10 rounded-full text-white/50 text-xs md:text-sm border border-white/20">
              Notre méthode
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-stone-100 font-instrument">
            Notre Processus de
            <span className="text-purple-400/90"> Réalisation</span>
          </h2>

          <p className="text-stone-400 text-center max-w-2xl mx-auto text-sm md:text-base">
            Une approche méthodique et transparente pour transformer votre
            vision en réalité
          </p>

          {/* Stats responsives */}
          <div
            className={`flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-8 transition-all duration-700 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">10+</div>
              <div className="text-xs md:text-sm text-stone-400">
                Projets Réalisés
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">97%</div>
              <div className="text-xs md:text-sm text-stone-400">
                Clients Satisfaits
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">3-7</div>
              <div className="text-xs md:text-sm text-stone-400">
                Semaines en Moyenne
              </div>
            </div>
          </div>
        </div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {etapes.map((etape, index) => (
            <div
              key={etape.numero}
              className={`group relative opacity-0 ${
                isInView ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8
                transform transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="text-3xl md:text-4xl mb-4">{etape.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-purple-400/90 text-2xl md:text-3xl font-bold">
                    {etape.numero}
                  </div>
                  <div className="h-1 w-8 md:w-12 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white/60 w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-stone-100">
                  {etape.titre}
                </h3>
                <div className="text-xs md:text-sm text-purple-400/70 mb-2">
                  {etape.sousTitre}
                </div>
                <p className="text-sm md:text-base text-stone-400">
                  {etape.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton CTA */}
        <div
          className={`mt-12 md:mt-20 text-center opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
          style={{
            animationDelay: "0.8s",
            animationFillMode: "forwards",
          }}
        >
          <StandaloneShineButton
            onClick={() => scrollToSection("contact")}
            icon={
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            }
            className="text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
          >
            Démarrer votre projet
          </StandaloneShineButton>
        </div>
      </div>

      {/* Remplacer les spotlights de fond en bas du fichier par : */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 bg-purple-500/5 rounded-full blur-xl md:blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-purple-500/5 rounded-full blur-xl md:blur-3xl pointer-events-none" />
    </section>
  );
}
